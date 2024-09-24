import { css } from "../../../styled-system/css";

export const styles = {
    container: css({
        flexDirection: 'column',
        padding: '10px 30px',
        md: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '20px 80px',
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