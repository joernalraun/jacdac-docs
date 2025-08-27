import Tooltip from "../ui/Tooltip"
import { Button } from "gatsby-theme-material-ui"
import React, { useMemo } from "react"
import useChange from "../../jacdac/useChange"
import IFrameBridgeClient from "./iframebridgeclient"
import MakeCodeIcon from "../../components/icons/MakeCodeIcon"
import useBus from "../../jacdac/useBus"
import { translations } from "./translations"

export default function MakeCodeAddBlocksButton() {
    const bus = useBus()
    const iframeBridge = bus.nodeData[
        IFrameBridgeClient.DATA_ID
    ] as IFrameBridgeClient
    const extensions = useChange(iframeBridge, _ => _?.candidateExtensions())
    const handleAdd = () => iframeBridge?.postAddExtensions()
    const isMakeCodeTool = useMemo(
        () =>
            typeof window !== "undefined" &&
            /makecode/.test(window.location.href),
        []
    )
    const isButtonEnabled = !!extensions?.length

    // Example: get language from browser or default to English
    const lang = typeof navigator !== "undefined" ? navigator.language.slice(0, 2) : "en"
    const t = translations[lang] || translations.en

    if (!isMakeCodeTool) return null

    return (
        <Tooltip
            describeChild
            title={isButtonEnabled ? t.enabledTooltip : t.disabledTooltip}
            placement="bottom"
        >
            <span>
                <Button
                    sx={{ mr: 1 }}
                    size="small"
                    color="primary"
                    variant="contained"
                    disabled={!isButtonEnabled}
                    startIcon={<MakeCodeIcon />}
                    onClick={handleAdd}
                >
                    {t.addBlocks}
                </Button>
            </span>
        </Tooltip>
    )
}
