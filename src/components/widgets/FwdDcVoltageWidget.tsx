import React from "react"
import SvgWidget from "./SvgWidget"

export default function FwdDcVoltageWidget(props: { value: number }) {
    const { value } = props

    const output = !isNaN(value) ? value.toFixed(2) + " V" : "--"

    const w = 368.71687
    const h = 345.2565

    return (
        <SvgWidget width={w} height={h} size="clamp(14rem, 12vw, 16vh)">
            <defs>
                <clipPath id="clippath">
                    <rect
                        x="107.36679"
                        y="-1548.21978"
                        width="524.16588"
                        height="483.05483"
                        fill="none"
                    />
                </clipPath>
            </defs>
            <g clipPath="url(#clippath)">
                <image
                    width="5578"
                    height="3719"
                    transform="translate(-3893.02666 -3121.75345) scale(.93445)"
                    href="../Solar Kit/Photos/Edited/Solar-Kit-4.jpg"
                />
            </g>
            <g>
                <rect
                    x="90.43719"
                    y="215.24283"
                    width="187.8425"
                    height="66.14374"
                    rx="12"
                    ry="12"
                    fill="#eaeaea"
                />
                <text
                    x="185"
                    y="260"
                    textAnchor="middle"
                    fontFamily="Galano Grotesque Bold"
                    fontSize="33px"
                >
                    {output}
                </text>
            </g>
            <path
                d="M182.58682,54.50374h42.25907c2.17727,0,3.51374,2.3847,2.37729,4.24184l-25.69844,41.99502c-1.13646,1.85714.20002,4.24184,2.37729,4.24184h7.33562c2.18723,0,3.52211,2.40427,2.36561,4.26074l-45.98031,73.81049c-1.65763,2.66094-5.76641.9821-5.08633-2.07826l12.28284-55.27278c.38679-1.74057-.93768-3.39168-2.72071-3.39168h-19.93698c-2.06101,0-3.40908-2.15962-2.50387-4.01119l30.42504-62.23304c.4676-.95645,1.43923-1.56297,2.50387-1.56297Z"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="3px"
            />
        </SvgWidget>
    )
}
