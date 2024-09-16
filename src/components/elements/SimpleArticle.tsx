'use client';

import { css } from "../../../styled-system/css"
import { Container, Flex, Avatar, Box, Text } from "@mantine/core"
import { BlogDetail } from "@/types/Blog/blog"
import { useRouter } from "next/navigation";

interface ArticleProps {
    items: BlogDetail
}

export default function SimpleArticle(props: ArticleProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/blog/detail/${props.items.topics_id}`);
    }

    return (
        <Container bg={'#fff'} w={'100%'} className={styles.articleContainer} onClick={handleClick}>
            <Flex>
                <Avatar src={'/top/dummy-mainview.png'} alt="" mr={10} />
                <Box>
                    <Text size={'14px'} mb={10}>{'satoshi otaka'}</Text>
                    <Text size={'12px'} mb={15}>{props.items.ymd}</Text>
                    <Text size={'20px'} fw={'bold'} mb={10}>{props.items.subject}</Text>
                </Box>
            </Flex>
        </Container>
    )
}

const styles = {
    articleContainer: css({
        boxShadow: '0px 0px 10px #e7e8ec',
        borderRadius: '8px',
        padding: '16px 12px',
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