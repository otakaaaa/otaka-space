'use client';

import { css } from "../../../styled-system/css"
import { Container, Flex, Avatar, Box, Text } from "@mantine/core"
import { Eye } from './Icons'
import { BlogDetail } from "@/types/Blog/blog"
import { useRouter } from 'next/navigation';

interface ArticleProps {
    items: BlogDetail
}

export default function Article(props: ArticleProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/blog/detail/${props.items.topics_id}`);
    }

    return (
        <Container bg={'#fff'} className={styles.articleContainer} onClick={handleClick}>
            <Flex>
                <Box>
                    <Flex mb={15}>
                        {props.items.tags &&
                        props.items.tags.length > 0 &&
                        props.items.tags.map((tag, index) => (
                            <Text key={index} bg={'#EDEEEE'} c={'#00000099'} mr={8} px={6} fw={700} className={styles.tag}>{tag.label}</Text>
                        ))}
                    </Flex>
                    <Text size={'20px'} fw={'bold'} mb={15}>{props.items.subject}</Text>
                    <Text size={'12px'} mb={10} c={'dimmed'}>{props.items.ymd}</Text>
                    {/* アイコン表示 */}
                    {/* <Flex>
                        <Eye w="14" h="14" c="#00000099" />
                        <Text size={'14px'} ml={8}>{99}</Text>
                    </Flex> */}
                </Box>
            </Flex>
        </Container>
    )
}

const styles = {
    articleContainer: css({
        padding: '16px 22px !important',
        boxShadow: '0px 0px 10px #e7e8ec',
        borderRadius: '8px',
        width: '100%',
        _hover: {
            scale: 1.01,
            cursor: 'pointer',
        },
        md: {
            padding: '18px 24px !important',
        }
    }),
    tag: css({
        borderRadius: '4px',
    })
}