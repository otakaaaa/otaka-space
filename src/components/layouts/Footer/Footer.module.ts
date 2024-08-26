import { css } from "../../../../styled-system/css";

export const styles = {
    area: css({
        backgroundColor: '#404C96',
        color: '#F7F6FF',
        fontSize: '14px',
    }),
    wrapper: css({
        display: 'flex',
        paddingTop: '65px',
        margin: '0 130px',
    }),
    logo: css({
        fontSize: '24px',
        marginRight: '100px',
    }),
    linkArea: css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: '30px',
    }),
    link: css({
        textDecoration: 'none',
        color: '#fff',
        marginBottom: '20px',
        _hover: {
            scale: 1.1,
        },
    }),
    localeArea: css({
        marginBottom: '80px',
    }),
    copyRight: css({
        textAlign: 'center',
        paddingBottom: '15px',
        fontSize: '12px',
    }),
}


