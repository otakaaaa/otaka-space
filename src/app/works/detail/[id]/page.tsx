import { Text, Box, Flex, Badge, Image } from "@mantine/core"
import Breadcrumbs, { BreadcrumbItems } from "@/components/elements/breadclumbs"
import TopicLabel from "@/components/elements/TopicLabel"
import { styles } from "./page.module"
import parse from 'html-react-parser'
import { apiClient } from "@/libs/apiClient"
import { WorksListResponseApi, WorkDetailsResponseApi } from "@/types/Works/Works"

export const revalidate = 60

export const dynamicParams = true

export async function generateStaticParams() {
    try {
        const response = await apiClient.get('/rcms-api/1/works/list', {});
        const works: WorksListResponseApi = response.data;

        if (!works.list || works.list.length === 0) {
            throw new Error('No works found in API response');
        }

        return works.list.map((work: any) => ({
            id: work.topics_id.toString(),
        }));
    } catch (error) {
        console.error('Failed to fetch works:', error);
        return [];
    }
}

export default async function WorksDetail({ params } : { params: { id: string } }) {
    const response = await apiClient.get(`/rcms-api/1/works/detail/${params.id}`, {});
    const work: WorkDetailsResponseApi = response.data;

    if (!work) {
        return <Text>Not found</Text>
    }
    console.log(work);

    const breadclumbsLinks: BreadcrumbItems[] = [
        { label: 'TOP', href: '/' },
        { label: '実績一覧', href: '/works' },
        { label: work.details.subject, href: `/works/detail/${work.details.topics_id}` },
    ]

    return (
        <>
            <Breadcrumbs items={breadclumbsLinks} />
            <Box px={130} m={0}>
                <TopicLabel mb="1.563vw">{work.details.subject}</TopicLabel>
                <Flex mb={20}>
                    {/* {work.categories.length > 0 &&
                    work.categories.map((category: any, index: number) => (
                        <Badge key={index} color='pink'>{category.label}</Badge>
                    ))} */}
                </Flex>
                <Image src={'/top/dummy-mainview.png'} alt="" className={styles.mainImage} mb={30} />
                <Box mb={80}>{parse(work.details.contents)}</Box>
            </Box>
        </>
    )
}