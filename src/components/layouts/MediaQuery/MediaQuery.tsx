import { css } from "../../../../styled-system/css"

export const DivPC = (props: { children: React.ReactNode }) => {
    return (
        <div className={css({
            display: 'none !important',
            md: {
                display: 'block !important',
            }
        })}>
            {props.children}
        </div>
    )
}

export const DivSP = (props: { children: React.ReactNode }) => {
    return (
        <div className={css({
            display: 'block',
            md: {
                display: 'none',
            }
        })}>
            {props.children}
        </div>
    )
}