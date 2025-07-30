import React from "react"
import SvgWidget from "./SvgWidget"

export default function FwdTemperatureWidget(props: { value: number }) {
    let { value } = props
    value = Math.round(value * 10) / 10

    const output = !isNaN(value) ? value.toFixed(1) : "--"

    const w = 578.01962
    const h = 674.6128

    let blockerHeight = 0
    const sixtyHeight = 0
    const minusFortyHeight = 408

    // the scale of -40 to 60 is 100 degrees so simply adding 40 gives you percent
    // this needs to be inverted because increased height moves the blocker down rather than up
    const percent = 100 - (value + 40)

    if (value >= 60) {
        blockerHeight = sixtyHeight
    } else if (value <= -40) {
        blockerHeight = minusFortyHeight
    } else {
        blockerHeight = (percent / 100) * minusFortyHeight
    }

    return (
        <SvgWidget width={w} height={h} size="clamp(14rem, 12vw, 16vh)">
            <defs>
                <linearGradient
                    id="linear-gradient"
                    x1="134.89087"
                    y1="56.34342"
                    x2="134.89087"
                    y2="624.1735"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#ce1408" />
                    <stop offset=".25" stopColor="#e5eb19" />
                    <stop offset=".5277" stopColor="#66f217" />
                    <stop offset=".58468" stopColor="#54ea38" />
                    <stop offset=".72799" stopColor="#2ad987" />
                    <stop offset=".79381" stopColor="#1ad3a7" />
                    <stop offset="1" stopColor="#0a00e9" />
                </linearGradient>
            </defs>
            <rect
                x="351.47799"
                y="229.88855"
                width="174.33836"
                height="131.43859"
                rx="12"
                ry="12"
                fill="#eaeaea"
            />
            <g>
                <text
                    x="437"
                    y="295"
                    textAnchor="middle"
                    fontFamily="Galano Grotesque Bold"
                    fontSize="50.44879px"
                >
                    {output}
                </text>
                <text
                    transform="translate(408 338.09526)"
                    fontFamily="Galano Grotesque Bold"
                    fontSize="42px"
                >
                    <tspan x="0" y="0">
                        º
                    </tspan>
                </text>
                <text
                    transform="translate(429.18295 338.09526)"
                    fontFamily="Galano Grotesque Bold"
                    fontSize="42px"
                >
                    <tspan x="0" y="0">
                        C
                    </tspan>
                </text>
            </g>
            <text
                transform="translate(235.68582 470)"
                fontFamily="Galano Grotesque Bold"
                fontSize="36px"
            >
                <tspan x="0" y="0">
                    -40
                </tspan>
            </text>
            <text
                transform="translate(237.41384 389.3)"
                fontFamily="Galano Grotesque Bold"
                fontSize="36px"
            >
                <tspan x="0" y="0" letterSpacing="-.00298em">
                    -20
                </tspan>
            </text>
            <text
                transform="translate(237.41384 310)"
                fontFamily="Galano Grotesque Bold"
                fontSize="36px"
            >
                <tspan x="0" y="0">
                    0
                </tspan>
            </text>
            <text
                transform="translate(237.41384 230.5)"
                fontFamily="Galano Grotesque Bold"
                fontSize="36px"
            >
                <tspan x="0" y="0" letterSpacing="-.00298em">
                    20
                </tspan>
            </text>
            <text
                transform="translate(235.68582 149)"
                fontFamily="Galano Grotesque Bold"
                fontSize="36px"
            >
                <tspan x="0" y="0">
                    40
                </tspan>
            </text>
            <text
                transform="translate(235.77615 71)"
                fontFamily="Galano Grotesque Bold"
                fontSize="36px"
            >
                <tspan x="0" y="0">
                    60
                </tspan>
            </text>
            <path
                d="M226.21588,552.39322c0,50.43994-40.88995,91.33008-91.32996,91.33008-50.43005,0-91.32001-40.89014-91.32001-91.33008,0-39.66992,25.29993-73.44971,60.64996-86.04004V62.18326c0-12.02002,9.75-21.77979,21.78003-21.77979h17.79999c12.02002,0,21.77002,9.75977,21.77002,21.77979v404.16992c35.34998,12.6001,60.64996,46.37012,60.64996,86.04004Z"
                fill="none"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth="5px"
            />
            <path
                d="M206.6759,552.39322c0,39.64014-32.14001,71.78027-71.78998,71.78027-39.64001,0-71.78009-32.14014-71.78009-71.78027,0-28.65967,16.81006-53.3999,41.11005-64.90967,5.56-2.64014,11.52002-4.57031,17.75-5.70996V60.48356c0-2.28027,1.85004-4.14014,4.14001-4.14014h17.58002c2.27997,0,4.14001,1.85986,4.14001,4.14014v421.29004c6.22998,1.13965,12.17999,3.06982,17.73999,5.70996,24.31,11.50977,41.10999,36.25,41.10999,64.90967Z"
                fill="url(#linear-gradient)"
            />
            <line
                x1="185.57349"
                y1="459.79054"
                x2="220.21958"
                y2="459.79054"
                fill="none"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth="4px"
            />
            <line
                x1="185.57349"
                y1="419.26115"
                x2="205.82287"
                y2="419.26115"
                fill="none"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth="4px"
            />
            <line
                x1="185.57349"
                y1="338.88615"
                x2="205.82287"
                y2="338.88615"
                fill="none"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth="4px"
            />
            <line
                x1="185.57349"
                y1="258.51114"
                x2="205.82287"
                y2="258.51114"
                fill="none"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth="4px"
            />
            <line
                x1="185.57349"
                y1="178.13613"
                x2="205.82287"
                y2="178.13613"
                fill="none"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth="4px"
            />
            <line
                x1="185.57349"
                y1="97.76112"
                x2="205.82287"
                y2="97.76112"
                fill="none"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth="4px"
            />
            <line
                x1="185.57349"
                y1="379.64694"
                x2="220.21958"
                y2="379.64694"
                fill="none"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth="4px"
            />
            <line
                x1="185.57349"
                y1="299.50334"
                x2="220.21958"
                y2="299.50334"
                fill="none"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth="4px"
            />
            <line
                x1="185.57349"
                y1="219.35974"
                x2="220.21958"
                y2="219.35974"
                fill="none"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth="4px"
            />
            <line
                x1="185.57349"
                y1="139.21614"
                x2="220.21958"
                y2="139.21614"
                fill="none"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth="4px"
            />
            <line
                x1="185.57349"
                y1="59.07254"
                x2="220.21958"
                y2="59.07254"
                fill="none"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth="4px"
            />
            <rect
                x="118"
                y="55"
                width="34"
                height={blockerHeight}
                fill="white"
            />
        </SvgWidget>
    )
}
