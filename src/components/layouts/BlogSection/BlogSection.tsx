import TopicLabel from "@/components/elements/TopicLabel";
import { Flex, Divider, Stack } from "@mantine/core";
import { BlogListResponseApi } from "@/types/Blog/blog";
import { apiClient } from "@/libs/apiClient";
import { styles } from "./BlogSection.module";
import ArrowButton from "@/components/elements/ArrowButton";
import { BiNotepad } from "react-icons/bi";
import SimpleArticle from "@/components/elements/SimpleArticle";

export default async function BlogSection() {
    const articles: BlogListResponseApi = await apiClient.get('/rcms-api/1/blog/list', {
        params: {
            cnt: 3,
        }
    }).then((response) => response.data)
    .catch((error) => console.error('Error:', error));

    return (
        <Flex p={'3.906vw 3.125vw'} justify={'space-between'}>
            <Stack w={'20%'}>
                <TopicLabel icon={<BiNotepad />}>ブログ</TopicLabel>
                <Divider my={'md'} />
                <ArrowButton href="/blog">もっと見る</ArrowButton>
            </Stack>
            <Stack
                gap="md"
                align="start"
                w={'75%'}
            >
                {articles.list.length > 0 && articles.list.map((article, index) => (
                    <SimpleArticle key={index} items={article} />
                ))}
            </Stack>
        </Flex>
    )
}