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
            width: '20%',
        }
    }),
    workCardWrap: css({
        width: '100%',
        md: {
            width: '75%',
        }
    }),
}