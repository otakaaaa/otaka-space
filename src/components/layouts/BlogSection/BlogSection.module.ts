import { css } from "../../../../styled-system/css";

export const styles = {
    section: css({
        flexDirection: 'column',
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
    articleWrap: css({
        width: '100%',
        md: {
            width: '75%',
        }
    })
}