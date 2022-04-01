import * as React from "react"

const ArrowLeft = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={13}
        fill="none"
        {...props}
    >
        <path
            d="M21.309 7.257H4.098l3.211 4.084v1.127l-6.648-6 6.648-6v1.127L4.098 5.679h17.211v1.578Z"
            fill="#000"
        />
    </svg>
)

const ArrowRight = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={12}
        fill="none"
        {...props}
    >
        <path
            d="m14 12 6.648-6L14 0v1.127l3.211 4.084H0V6.79h17.211L14 10.873V12Z"
            fill="#000"
        />
    </svg>
)


export { ArrowLeft, ArrowRight }
