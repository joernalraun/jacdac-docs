import React, { ChangeEvent, useEffect, useState } from "react"
import {
    CursorCharacterScreenReg,
    CursorCharacterScreenCmd,
} from "../../../jacdac-ts/src/jdom/constants"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import { useRegisterUnpackedValue } from "../../jacdac/useRegisterValue"
import { Grid, TextField } from "@mui/material"
import useRegister from "../hooks/useRegister"
import CmdButton from "../CmdButton"
import ClearIcon from "@mui/icons-material/Clear"
import CharacterScreenWidget from "../widgets/CharacterScreenWidget"
import DashboardRegisterValueFallback from "./DashboardRegisterValueFallback"

export default function DashboardCursorCharacterScreen(props: DashboardServiceProps) {
    const { service, expanded } = props

    const messageRegister = useRegister(service, CursorCharacterScreenReg.Message)
    const rowsRegister = useRegister(service, CursorCharacterScreenReg.Rows)
    const columnsRegister = useRegister(service, CursorCharacterScreenReg.Columns)
    const enabledRegister = useRegister(
        service,
        CursorCharacterScreenReg.Enabled
    )
    const [message] = useRegisterUnpackedValue<[string]>(messageRegister, props)
    const [rows] = useRegisterUnpackedValue<[number]>(rowsRegister, props)
    const [columns] = useRegisterUnpackedValue<[number]>(columnsRegister, props)

    const [enabled] = useRegisterUnpackedValue<[number]>(
        enabledRegister,
        props
    )

    const [fieldMessage, setFieldMessage] = useState(message)

    const handleClear = async () => {
        setFieldMessage("")
        await messageRegister.sendSetStringAsync("", true)
    }
    const handleFieldMessageChange = async (
        ev: ChangeEvent<HTMLTextAreaElement>
    ) => {
        setFieldMessage(ev.target.value)
        await messageRegister.sendSetStringAsync(ev.target.value, true)
    }

    // set first value of message
    useEffect(() => {
        if (!fieldMessage && message) setFieldMessage(message)
    }, [message])

    if (rows === undefined || columns === undefined)
        return (
            <DashboardRegisterValueFallback
                register={rows === undefined ? rowsRegister : columnsRegister}
            />
        ) // size unknown

    const converter: (s: string) => string = s => s
    const cmessage = message?.split("").map(converter).join("")

    return (
        <Grid container spacing={1}>
            {expanded && (
                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        <Grid item xs>
                            <TextField
                                label="text"
                                value={fieldMessage}
                                onChange={handleFieldMessageChange}
                                multiline={true}
                                rows={rows || 2}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item>
                            <CmdButton
                                title="clear the entire display"
                                onClick={handleClear}
                                icon={<ClearIcon />}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            )}
            <Grid item xs>
                <CharacterScreenWidget
                    rows={rows}
                    columns={columns}
                    rtl={false}
                    message={cmessage}
                    disabled={enabled === 0}
                />
            </Grid>
        </Grid>
    )
}
