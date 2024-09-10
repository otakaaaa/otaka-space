import { css } from "../../../styled-system/css"
import { Container, Flex, Avatar, Box, Text, Image } from "@mantine/core"
import { Eye } from './Icons'

interface ArticleProps {
    items: ArticleItem
}

export interface ArticleItem {
    avatar?: string,
    userName: string,
    createdAt: string,
    title: string,
    tags?: string[],
    pageView: number,
}

export default function Article(props: ArticleProps) {
    return (
        <Container bg={'#fff'} p={'1.25vw 1.875vw'} className={styles.articleContainer}>
            <Flex>
                <Avatar src={props.items.avatar || '/top/dummy-mainview.png'} alt="" mr={10} />
                <Box>
                    <Text size={'1.094vw'} mb={10}>{props.items.userName || 'ゲスト'}</Text>
                    <Text size={'0.938vw'} mb={15}>{props.items.createdAt}</Text>
                    <Text size={'1.563vw'} fw={'bold'} mb={10}>{props.items.title}</Text>
                    <Flex mb={10}>
                        {props.items.tags &&
                        props.items.tags.length > 0 &&
                        props.items.tags.map((tag, index) => (
                            <Text key={index} bg={'#EDEEEE'} c={'#00000099'} mr={8} px={6} className={styles.tag}>{tag}</Text>
                        ))}
                    </Flex>
                    <Flex>
                        <Eye w="14" h="14" c="#00000099" />
                        <Text size={'1.094vw'} ml={8}>{props.items.pageView}</Text>
                    </Flex>
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