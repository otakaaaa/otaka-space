import { css } from "../../../../styled-system/css";

export const styles = {
    section: css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '3.906vw 3.125vw',
        md: {
            flexDirection: 'row',
        }
    }),
    topicWrap: css({
        width: '100%',
        md: {
            width: '20%',
        }
    }),
    featureWrap: css({
        width: '100%',
        md: {
            width: '75%',
        }
    })
}