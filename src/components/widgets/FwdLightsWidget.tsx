import React from "react"
import SvgWidget from "./SvgWidget"
import "./fwd-edu.css"
import useThrottledValue from "../hooks/useThrottledValue"

export default function FwdLightsWidget(props: {
    percentBrightness: number
    noReading: boolean
}) {
    const { percentBrightness, noReading } = props

    const w = 418.06001
    const h = 345.2565

    const throttledPercentBrightness = useThrottledValue(percentBrightness, 120)

    // y range for blockerY is 81 to 265 for a difference of 184
    const blockerY = 81 + (184 * throttledPercentBrightness) / 100

    return (
        <SvgWidget width={w} height={h}>
            <defs>
                <linearGradient
                    id="linear-gradient"
                    x1="209.03"
                    y1="273.94074"
                    x2="209.03"
                    y2="80.64402"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#fff" />
                    <stop offset="1" stopColor="#aa3dce" />
                </linearGradient>
            </defs>
            <polygon
                points="389.43003 273.94074 28.62997 273.94074 59.23836 80.64402 358.82164 80.64402 389.43003 273.94074"
                fill="url(#linear-gradient)"
            />
            <rect y={blockerY} width="418.06001" height="189" fill="#ffffff" />
            <g>
                <rect
                    x="125.17074"
                    y="138.28437"
                    width="167.71853"
                    height="66.14374"
                    rx="12"
                    ry="12"
                    fill="#eaeaea"
                />
                <text
                    x="48"
                    transform="translate(162.94204 186.52623)"
                    fontFamily="Galano Grotesque Bold"
                    fontSize="42.9648px"
                    fontWeight="700"
                    textAnchor="middle"
                >
                    {noReading ? "--" : percentBrightness}%
                </text>
                <text
                    transform="translate(225.0679 186.52623)"
                    fontFamily="Galano Grotesque Bold"
                    fontSize="42.9648px"
                    fontWeight="700"
                >
                    <tspan x="0" y="0"></tspan>
                </text>
            </g>
            <g>
                <rect
                    x="59.55134"
                    y="55.32425"
                    width="298.95733"
                    height="25.67732"
                    rx="4.5556"
                    ry="4.5556"
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit="10"
                    strokeWidth="3px"
                />
                <g>
                    <g>
                        <circle cx="68.46754" cy="63.92905" r="2.3687" />
                        <circle cx="68.46754" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="77.25269" cy="63.92905" r="2.3687" />
                        <circle cx="77.25269" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="86.03785" cy="63.92905" r="2.3687" />
                        <circle cx="86.03785" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="94.823" cy="63.92905" r="2.3687" />
                        <circle cx="94.823" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="103.60815" cy="63.92905" r="2.3687" />
                        <circle cx="103.60815" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="112.39331" cy="63.92905" r="2.3687" />
                        <circle cx="112.39331" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="121.17846" cy="63.92905" r="2.3687" />
                        <circle cx="121.17846" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="129.96362" cy="63.92905" r="2.3687" />
                        <circle cx="129.96362" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="138.74877" cy="63.92905" r="2.3687" />
                        <circle cx="138.74877" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="147.53393" cy="63.92905" r="2.3687" />
                        <circle cx="147.53393" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="156.31908" cy="63.92905" r="2.3687" />
                        <circle cx="156.31908" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="165.10423" cy="63.92905" r="2.3687" />
                        <circle cx="165.10423" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="173.88939" cy="63.92905" r="2.3687" />
                        <circle cx="173.88939" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="182.67454" cy="63.92905" r="2.3687" />
                        <circle cx="182.67454" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="191.4597" cy="63.92905" r="2.3687" />
                        <circle cx="191.4597" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="200.24485" cy="63.92905" r="2.3687" />
                        <circle cx="200.24485" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="209.03" cy="63.92905" r="2.3687" />
                        <circle cx="209.03" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="217.81516" cy="63.92905" r="2.3687" />
                        <circle cx="217.81516" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="226.60031" cy="63.92905" r="2.3687" />
                        <circle cx="226.60031" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="235.38547" cy="63.92905" r="2.3687" />
                        <circle cx="235.38547" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="244.17062" cy="63.92905" r="2.3687" />
                        <circle cx="244.17062" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="252.95578" cy="63.92905" r="2.3687" />
                        <circle cx="252.95578" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="261.74093" cy="63.92905" r="2.3687" />
                        <circle cx="261.74093" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="270.52608" cy="63.92905" r="2.3687" />
                        <circle cx="270.52608" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="279.31124" cy="63.92905" r="2.3687" />
                        <circle cx="279.31124" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="288.09639" cy="63.92905" r="2.3687" />
                        <circle cx="288.09639" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="296.88155" cy="63.92905" r="2.3687" />
                        <circle cx="296.88155" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="305.6667" cy="63.92905" r="2.3687" />
                        <circle cx="305.6667" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="314.45185" cy="63.92905" r="2.3687" />
                        <circle cx="314.45185" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="323.23701" cy="63.92905" r="2.3687" />
                        <circle cx="323.23701" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="332.02216" cy="63.92905" r="2.3687" />
                        <circle cx="332.02216" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="340.80732" cy="63.92905" r="2.3687" />
                        <circle cx="340.80732" cy="72.47672" r="2.3687" />
                    </g>
                    <g>
                        <circle cx="349.59247" cy="63.92905" r="2.3687" />
                        <circle cx="349.59247" cy="72.47672" r="2.3687" />
                    </g>
                </g>
            </g>
        </SvgWidget>
    )
}
