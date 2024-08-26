import { css } from "@/../styled-system/css"
import { Text } from "@mantine/core"

type TopicLabelType = {
    children: string,
}

export default function TopicLabel(props: TopicLabelType) {
    const style = css({
        backgroundImage: 'url(../../public/top/topic-bg-purple.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '22px',
    })

    return (
        <Text className={style} size="xl" fw={'bold'}>{props.children}</Text>
    )
}