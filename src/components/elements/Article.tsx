import { css } from "../../../styled-system/css"
import { Container, Flex, Avatar, Box, Text, Image } from "@mantine/core"
import { Eye } from './Icons'
import { BlogDetail } from "@/types/Blog/blog"

interface ArticleProps {
    items: BlogDetail
}

export default function Article(props: ArticleProps) {
    return (
        <Container bg={'#fff'} className={styles.articleContainer}>
            <Flex>
                <Avatar src={'/top/dummy-mainview.png'} alt="" mr={10} />
                <Box>
                    <Text size={'14px'} mb={10}>{'satoshi otaka'}</Text>
                    <Text size={'12px'} mb={15}>{props.items.ymd}</Text>
                    <Text size={'20px'} fw={'bold'} mb={10}>{props.items.subject}</Text>
                    <Flex mb={10}>
                        {props.items.tags &&
                        props.items.tags.length > 0 &&
                        props.items.tags.map((tag, index) => (
                            <Text key={index} bg={'#EDEEEE'} c={'#00000099'} mr={8} px={6} className={styles.tag}>{tag.label}</Text>
                        ))}
                    </Flex>
                    <Flex>
                        <Eye w="14" h="14" c="#00000099" />
                        <Text size={'14px'} ml={8}>{99}</Text>
                    </Flex>
                </Box>
            </Flex>
        </Container>
    )
}

const styles = {
    articleContainer: css({
        padding: '16px',
        boxShadow: '0px 0px 10px #e7e8ec',
        borderRadius: '8px',
        _hover: {
            scale: 1.01,
            cursor: 'pointer',
        },
        md: {
            padding: '16px 24px',
        }
    }),
    tag: css({
        borderRadius: '4px',
    })
}