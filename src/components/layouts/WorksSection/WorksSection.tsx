import TopicLabel from "@/components/elements/TopicLabel";
import WorkCard from "@/components/elements/WorkCard";
import { Divider, Flex } from "@mantine/core";
import { WorksListResponseApi, WorkDetails } from "@/types/Works/Works";
import { apiClient } from "@/libs/apiClient";
import { styles } from "./WorksSection.module";

export default async function WorksSection() {
    const works: WorksListResponseApi = await apiClient.get('/rcms-api/1/works/list', {})
    .then((response) => response.data)
    .catch((error) => console.error('Error:', error));

    return (
        <section className={styles.section}>
            <TopicLabel>実績</TopicLabel>
            <Divider my={'md'} />
            <Flex
                gap="md"
                justify="center"
                align="start"
                direction="row"
                wrap="wrap"
            >
                {works.list.length > 0 &&
                works.list.map((work: WorkDetails, index: number) => (
                    <WorkCard items={work} key={index} />
                ))}
            </Flex>
        </section>
    )
}