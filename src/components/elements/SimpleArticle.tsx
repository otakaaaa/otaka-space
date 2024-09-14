import { css } from "../../../styled-system/css"
import { Container, Flex, Avatar, Box, Text } from "@mantine/core"
import { BlogDetail } from "@/types/Blog/blog"

interface ArticleProps {
    items: BlogDetail
}

export default function SimpleArticle(props: ArticleProps) {
    return (
        <Container bg={'#fff'} p={'1.25vw 1.875vw'} className={styles.articleContainer}>
            <Flex>
                <Avatar src={'/top/dummy-mainview.png'} alt="" mr={10} />
                <Box>
                    <Text size={'1.094vw'} mb={10}>{'satoshi otaka'}</Text>
                    <Text size={'0.938vw'} mb={15}>{props.items.ymd}</Text>
                    <Text size={'1.563vw'} fw={'bold'} mb={10}>{props.items.subject}</Text>
                </Box>
            </Flex>
        </Container>
    )
}

const styles = {
    articleContainer: css({
        boxShadow: '0px 0px 0.781vw #e7e8ec',
        borderRadius: '0.625vw',
        _hover: {
            scale: 1.01,
            cursor: 'pointer',
        }
    }),
    tag: css({
        borderRadius: '0.313vw',
    })
}