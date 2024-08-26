import { css } from "@/../styled-system/css";

export const styles = {
    headerArea: css({
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F7F8FC',
        // position: 'fixed',
        // width: '100%',
        // zIndex: 999,
        // boxShadow: '0px 0px 10px #e7e8ec',
    }),
    logo: css({
        marginLeft: '20px',
    }),
    links: css({
        display: 'flex',
    }),
    link: css({
        marginRight: '40px',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        _hover: {
            opacity: 0.7,
            scale: 1.1,
        },
    }),
};
