const TrendingSvg = (props:any) => (
  <svg width={28} height={29} fill="none" className="ip y" {...props}>
    <path fill="#fff" d="M0 .8h28v28H0z" />
    <g opacity={0.8} clipPath="url(#a)">
      <path fill="#fff" d="M4 4.8h20v20H4z" />
      <circle cx={14} cy={14.79} r={9.5} stroke="#000" />
      <path
        d="m5.46 18.36 4.47-4.48m.04-.01 3.67 3.66m.03 0 5.1-5.09m-2.15-.84h3m0 0v3"
        stroke="#000"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(4 4.8)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default TrendingSvg
