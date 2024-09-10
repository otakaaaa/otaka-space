import { css } from "../../../styled-system/css"
import { Text } from "@mantine/core"

type TopicLabelType = {
    children: string,
    mb?: string,
}

export default function TopicLabel(props: TopicLabelType) {
    const style = css({
        backgroundImage: 'url(../../public/top/topic-bg-purple.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '1.719vw',
    })

    return (
        <Text className={style} size="xl" fw={'bold'} mb={props.mb}>{props.children}</Text>
    )
}