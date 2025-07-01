import React from "react"
import SvgWidget from "./SvgWidget"

function checkIfInRange(lowerBound: number, number: number): boolean {
    if (lowerBound === 2) {
        if (number < lowerBound + 1) {
            return true
        }
    } else if (lowerBound === 11) {
        if (number >= lowerBound) {
            return true
        }
    } else {
        if (number >= lowerBound && number < lowerBound + 1) {
            return true
        }
    }

    return false
}

export default function FwdAcidityWidget(props: {
    value: number
    size?: string
}) {
    let { value } = props
    value = Math.round(value * 10) / 10

    const output = !isNaN(value) ? value.toFixed(1) : "--"

    const w = 747.30349
    const h = 1811.90357

    return (
        <SvgWidget width={w} height={h} size="clamp(14rem, 12vw, 16vh)">
            <rect
                x="76.66432"
                y="70.77937"
                width="196.15317"
                height="156.38136"
                rx="16.2749"
                ry="16.2749"
                fill={checkIfInRange(2, value) ? "#e8904d" : "none"}
                stroke="#343333"
                strokeMiterlimit="10"
                strokeWidth="2px"
            />
            <rect
                x="76.66432"
                y="240.48166"
                width="196.15317"
                height="156.38136"
                rx="16.2749"
                ry="16.2749"
                fill={checkIfInRange(3, value) ? "#f4be52" : "none"}
                stroke="#343333"
                strokeMiterlimit="10"
                strokeWidth="2px"
            />
            <rect
                x="76.66432"
                y="410.18395"
                width="196.15317"
                height="156.38136"
                rx="16.2749"
                ry="16.2749"
                fill={checkIfInRange(4, value) ? "#fbe24e" : "none"}
                stroke="#343333"
                strokeMiterlimit="10"
                strokeWidth="2px"
            />
            <rect
                x="76.66432"
                y="579.88624"
                width="196.15317"
                height="156.38136"
                rx="16.2749"
                ry="16.2749"
                fill={checkIfInRange(5, value) ? "#c7d254" : "none"}
                stroke="#343333"
                strokeMiterlimit="10"
                strokeWidth="2px"
            />
            <rect
                x="76.66432"
                y="749.58853"
                width="196.15317"
                height="156.38136"
                rx="16.2749"
                ry="16.2749"
                fill={checkIfInRange(6, value) ? "#8bbe5d" : "none"}
                stroke="#343333"
                strokeMiterlimit="10"
                strokeWidth="2px"
            />
            <rect
                x="76.66432"
                y="919.29081"
                width="196.15317"
                height="156.38136"
                rx="16.2749"
                ry="16.2749"
                fill={checkIfInRange(7, value) ? "#4fae74" : "none"}
                stroke="#343333"
                strokeMiterlimit="10"
                strokeWidth="2px"
            />
            <rect
                x="76.66432"
                y="1088.9931"
                width="196.15317"
                height="156.38136"
                rx="16.2749"
                ry="16.2749"
                fill={checkIfInRange(8, value) ? "#58b7c0" : "none"}
                stroke="#343333"
                strokeMiterlimit="10"
                strokeWidth="2px"
            />
            <rect
                x="76.66432"
                y="1258.69539"
                width="196.15317"
                height="156.38136"
                rx="16.2749"
                ry="16.2749"
                fill={checkIfInRange(9, value) ? "#5a8db4" : "none"}
                stroke="#343333"
                strokeMiterlimit="10"
                strokeWidth="2px"
            />
            <rect
                x="76.66432"
                y="1428.39768"
                width="196.15317"
                height="156.38136"
                rx="16.2749"
                ry="16.2749"
                fill={checkIfInRange(10, value) ? "#3e729d" : "none"}
                stroke="#343333"
                strokeMiterlimit="10"
                strokeWidth="2px"
            />
            <rect
                x="76.66432"
                y="1598.09997"
                width="196.15317"
                height="156.38136"
                rx="16.2749"
                ry="16.2749"
                fill={checkIfInRange(11, value) ? "#335d94" : "none"}
                stroke="#343333"
                strokeMiterlimit="10"
                strokeWidth="2px"
            />
            <text
                transform="translate(150.08126 182.37109)"
                fill={checkIfInRange(2, value) ? "#fff" : "#343333"}
                fontFamily="Galano Grotesque Bold"
                fontSize="90px"
                fontWeight="700"
            >
                <tspan x="0" y="0">
                    2
                </tspan>
            </text>
            <text
                transform="translate(148.77633 351.89135)"
                fill={checkIfInRange(3, value) ? "#fff" : "#343333"}
                fontFamily="Galano Grotesque Bold"
                fontSize="90px"
                fontWeight="700"
            >
                <tspan x="0" y="0">
                    3
                </tspan>
            </text>
            <text
                transform="translate(146.5715 521.41142)"
                fill={checkIfInRange(4, value) ? "#fff" : "#343333"}
                fontFamily="Galano Grotesque Bold"
                fontSize="90px"
                fontWeight="700"
            >
                <tspan x="0" y="0">
                    4
                </tspan>
            </text>
            <text
                transform="translate(148.82126 690.93149)"
                fill={checkIfInRange(5, value) ? "#fff" : "#343333"}
                fontFamily="Galano Grotesque Bold"
                fontSize="90px"
                fontWeight="700"
            >
                <tspan x="0" y="0">
                    5
                </tspan>
            </text>
            <text
                transform="translate(147.2463 860.45157)"
                fill={checkIfInRange(6, value) ? "#fff" : "#343333"}
                fontFamily="Galano Grotesque Bold"
                fontSize="90px"
                fontWeight="700"
            >
                <tspan x="0" y="0">
                    6
                </tspan>
            </text>
            <text
                transform="translate(151.65622 1029.97164)"
                fill={checkIfInRange(7, value) ? "#fff" : "#343333"}
                fontFamily="Galano Grotesque Bold"
                fontSize="90px"
                fontWeight="700"
            >
                <tspan x="0" y="0">
                    7
                </tspan>
            </text>
            <text
                transform="translate(148.95578 1199.49172)"
                fill={checkIfInRange(8, value) ? "#fff" : "#343333"}
                fontFamily="Galano Grotesque Bold"
                fontSize="90px"
                fontWeight="700"
            >
                <tspan x="0" y="0">
                    8
                </tspan>
            </text>
            <text
                transform="translate(147.2463 1369.01179)"
                fill={checkIfInRange(9, value) ? "#fff" : "#343333"}
                fontFamily="Galano Grotesque Bold"
                fontSize="90px"
                fontWeight="700"
            >
                <tspan x="0" y="0">
                    9
                </tspan>
            </text>
            <text
                transform="translate(127.35666 1538.53186)"
                fill={checkIfInRange(10, value) ? "#fff" : "#343333"}
                fontFamily="Galano Grotesque Bold"
                fontSize="90px"
                fontWeight="700"
            >
                <tspan x="0" y="0">
                    10
                </tspan>
            </text>
            <text
                transform="translate(139.73166 1708.05171)"
                fill={checkIfInRange(11, value) ? "#fff" : "#343333"}
                fontFamily="Galano Grotesque Bold"
                fontSize="90px"
                fontWeight="700"
            >
                <tspan x="0" y="0">
                    11
                </tspan>
            </text>
            <g>
                <text
                    transform="translate(386.61799 844.04452)"
                    fontFamily="Galano Grotesque Bold"
                    fontSize="138.91557px"
                    fontWeight="700"
                >
                    <tspan x="0" y="0">
                        pH
                    </tspan>
                </text>
                <text
                    transform="translate(390.99543 1075.90292)"
                    fontFamily="Galano Grotesque Bold"
                    fontSize="138.91557px"
                    fontWeight="700"
                >
                    {output}
                </text>
                <line
                    x1="395.24584"
                    y1="918.71434"
                    x2="579.52441"
                    y2="918.71434"
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit="10"
                    strokeWidth="5px"
                />
            </g>
        </SvgWidget>
    )
}
