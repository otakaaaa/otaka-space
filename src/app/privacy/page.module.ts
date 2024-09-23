import { css } from "../../../styled-system/css";

export const styles = {
    container: css({
        flexDirection: 'column',
        md: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        }
    }),
    topicWrap: css({
        width: '100%',
        md: {
            width: '30%',
        }
    }),
    contentsWrap: css({
        width: '100%',
        marginBottom: '80px',
        md: {
            width: '65%',
        }
    }),
}