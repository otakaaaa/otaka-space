import { css } from "../../../../styled-system/css";

export const styles = {
    section: css({
        display: 'flex',
        flexDirection: 'column',
        padding: '12vw 3.125vw',
        justifyContent: 'space-between',
        md: {
            padding: '3.906vw 3.125vw',
            flexDirection: 'row',
        }
    }),
    topicWrap: css({
        width: '100%',
        md: {
            width: '20%',
        }
    }),
    WorkCardWrap: css({
        flexDirection: 'column',
        width: '100%',
        md: {
            width: '75%',
            flexDirection: 'row'
        }
    })
}