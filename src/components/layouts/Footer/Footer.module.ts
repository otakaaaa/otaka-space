import { css } from "../../../../styled-system/css";

export const styles = {
    area: css({
        backgroundColor: '#404C96',
        color: '#F7F6FF',
        fontSize: '1.094vw',
    }),
    wrapper: css({
        display: 'flex',
        paddingTop: '5.078vw',
        margin: '0 10.156vw',
    }),
    logo: css({
        fontSize: '1.875vw',
        marginRight: '7.813vw',
    }),
    linkArea: css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: '2.344vw',
    }),
    link: css({
        textDecoration: 'none',
        color: '#fff',
        marginBottom: '1.563vw',
        _hover: {
            scale: 1.1,
        },
    }),
    localeArea: css({
        marginBottom: '6.25vw',
    }),
    copyRight: css({
        textAlign: 'center',
        paddingBottom: '1.172vw',
        fontSize: '0.938vw',
    }),
}


