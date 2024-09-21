import { css } from "../../../styled-system/css"
import { Title, Center } from "@mantine/core"

type TopicLabelType = {
    children: string,
    mb?: string,
    icon?: React.ReactNode,
}

export default function TopicLabel(props: TopicLabelType) {
    const textStyle = css({
        padding: '0 20px !important',
        width: '-webkit-fill-available',
    })

    const iconStyle = css({
        minWidth: '45px',
        minHeight: '45px',
        padding: '6px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#F7F8FC',
        fontSize: '32px',
    })

    return (
        <Center>
            {props.icon &&
                <div className={iconStyle}>{props.icon}</div>
            }
            <Title className={textStyle} order={3} mb={props.mb}>{props.children}</Title>
        </Center>
    )
}