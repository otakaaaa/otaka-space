import { css } from "../../styled-system/css"
import TopicBGPurple from '../../public/top/topic-bg-purple.png';

export const styles = {
    mainView: css({
        width: '100%',
        height: '500px',
    }),
    section: css({
        padding: '50px 130px',
    }),
    title: css({
        backgroundImage: `url(../../public/top/topic-bg-purple.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '22px',
    }),
    serviceView: css({
        width: '100%',
        height: '400px',
    }),
    serviceTitle: css({
        borderBottom: '1px solid #333',
    }),
}