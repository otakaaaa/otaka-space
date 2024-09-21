import { Text, Box, Flex, Badge, Image } from "@mantine/core"
import Breadcrumbs, { BreadcrumbItems } from "@/components/elements/breadclumbs"
import TopicLabel from "@/components/elements/TopicLabel"
import { styles } from "./page.module"
import parse from 'html-react-parser'
import { apiClient } from "@/libs/apiClient"
import { ServiceListResponseApi, ServiceDetailsResponseApi } from "@/types/Service/Service"
import { FcServices } from "react-icons/fc";

export const revalidate = 60

export const dynamicParams = true

export async function generateStaticParams() {
    try {
        const response = await apiClient.get('/rcms-api/1/services/list', {});
        const services: ServiceListResponseApi = response.data;

        if (!services.list || services.list.length === 0) {
            throw new Error('No services found in API response');
        }

        return services.list.map((work: any) => ({
            id: work.topics_id.toString(),
        }));
    } catch (error) {
        console.error('Failed to fetch services:', error);
        return [];
    }
}

export default async function WorksDetail({ params } : { params: { id: string } }) {
    const response = await apiClient.get(`/rcms-api/1/services/detail/${params.id}`, {});
    const work: ServiceDetailsResponseApi = response.data;

    if (!work) {
        return <Text>Not found</Text>
    }

    const breadclumbsLinks: BreadcrumbItems[] = [
        { label: 'TOP', href: '/' },
        { label: 'サービス一覧', href: '/services' },
        { label: work.details.subject, href: `/services/detail/${work.details.topics_id}` },
    ]

    return (
        <>
            <Breadcrumbs items={breadclumbsLinks} />
            <Box px={'8vw'} m={0}>
                <TopicLabel icon={<FcServices />}>{work.details.subject}</TopicLabel>
                <Flex mb={20}>
                    {/* {work.categories.length > 0 &&
                    work.categories.map((category: any, index: number) => (
                        <Badge key={index} color='pink'>{category.label}</Badge>
                    ))} */}
                </Flex>
                <Image src={work.details.image.url_org} alt={work.details.image.desc} className={styles.mainImage} mb={30} />
                <Box mb={80}>{parse(work.details.contents)}</Box>
            </Box>
        </>
    )
}