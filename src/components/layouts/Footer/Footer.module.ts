import { css } from "../../../../styled-system/css";

export const styles = {
    area: css({
        backgroundColor: '#404C96',
        color: '#F7F6FF',
        fontSize: '14px',
    }),
    wrapper: css({
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '65px',
        margin: '0 30px',
        md: {
            margin: '0 130px',
            flexDirection: 'row',
        }
    }),
    logo: css({
        fontSize: '24px',
        marginBottom: '20px',
        md: {
            marginBottom: '0',
            marginRight: '100px',
        }
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


