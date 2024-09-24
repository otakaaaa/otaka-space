import { Text, Box, Flex, Divider } from "@mantine/core"
import Breadcrumbs, { BreadcrumbItems } from "@/components/elements/breadclumbs"
import TopicLabel from "@/components/elements/TopicLabel"
import { styles } from "./page.module"
import parse from 'html-react-parser'
import { apiClient } from "@/libs/apiClient"
import { BlogListResponseApi, BlogDetailResponseApi } from "@/types/Blog/blog"
import { FcNews } from "react-icons/fc";

export const revalidate = 60

export const dynamicParams = true

export async function generateStaticParams() {
    try {
        const response = await apiClient.get('/rcms-api/1/blog/list', {});
        const articles: BlogListResponseApi = response.data;

        if (!articles.list || articles.list.length === 0) {
            throw new Error('No blogs found in API response');
        }

        return articles.list.map((work: any) => ({
            id: work.topics_id.toString(),
        }));
    } catch (error) {
        console.error('Failed to fetch blogs:', error);
        return [];
    }
}

export default async function WorksDetail({ params } : { params: { id: string } }) {
    const response = await apiClient.get(`/rcms-api/1/blog/detail/${params.id}`, {});
    const article: BlogDetailResponseApi = response.data;

    if (!article) {
        return <Text>Not found</Text>
    }

    const breadclumbsLinks: BreadcrumbItems[] = [
        { label: 'TOP', href: '/' },
        { label: 'ブログ一覧', href: '/blog' },
        { label: article.details.subject, href: `/blog/detail/${article.details.topics_id}` },
    ]

    return (
        <>
            <Breadcrumbs items={breadclumbsLinks} />
            <Box m={0} className={styles.container}>
                <TopicLabel icon={<FcNews />}>{article.details.subject}</TopicLabel>
                <Divider my={'md'} />
                <Flex mb={20}>
                    {/* {work.categories.length > 0 &&
                    work.categories.map((category: any, index: number) => (
                        <Badge key={index} color='pink'>{category.label}</Badge>
                    ))} */}
                </Flex>
                <Box mb={80}>{parse(article.details.contents)}</Box>
            </Box>
        </>
    )
}