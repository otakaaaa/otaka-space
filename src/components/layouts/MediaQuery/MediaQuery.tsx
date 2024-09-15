import { css } from "../../../../styled-system/css"

export const DivPC = (props: { children: React.ReactNode }) => {
    return (
        <div className={css({
            display: 'none',
            md: {
                display: 'block',
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