import { css } from "../../../styled-system/css"
import { Text, Center } from "@mantine/core"

type TopicLabelType = {
    children: string,
    mb?: string,
    icon?: React.ReactNode,
}

export default function TopicLabel(props: TopicLabelType) {
    const textStyle = css({
        backgroundImage: 'url(../../public/top/topic-bg-purple.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '22px',
        padding: '0 20px !important',
        whiteSpace: 'nowrap',
        fontSize: '22px !important',
        width: '-webkit-fill-available',
    })

    const iconStyle = css({
        minWidth: '45px',
        minHeight: '45px',
        padding: '6px',
        borderRadius: '50%',
        backgroundColor: '#404C96',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#F7F8FC',
        fontSize: '24px',
    })

    return (
        <Center>
            {props.icon &&
                <div className={iconStyle}>{props.icon}</div>
            }
            <Text className={textStyle} fw={'bold'} mb={props.mb}>{props.children}</Text>
        </Center>
    )
}