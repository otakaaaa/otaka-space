import { css } from "../../../../styled-system/css";

export const styles = {
    headerArea: css({
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F7F8FC',
    }),
    logo: css({
        marginLeft: '20px',
    }),
    links: css({
        display: 'flex',
    }),
    link: css({
        marginRight: '40px',
        color: '#333',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
            opacity: 0.7,
        },
    }),
};
