import TopicLabel from "@/components/elements/TopicLabel";
import WorkCard from "@/components/elements/WorkCard";
import { Divider, Flex, Stack, Button } from "@mantine/core";
import { WorksListResponseApi, WorkDetails } from "@/types/Works/Works";
import { apiClient } from "@/libs/apiClient";
import { styles } from "./WorksSection.module";
import { FaTrophy } from "react-icons/fa";
import ArrowButton from "@/components/elements/ArrowButton";
import { DivPC, DivSP } from "../MediaQuery/MediaQuery";

export default async function WorksSection() {
    const works: WorksListResponseApi = await apiClient.get('/rcms-api/1/works/list', {})
    .then((response) => response.data)
    .catch((error) => console.error('Error:', error));

    return (
        <section className={styles.section}>
            <Stack className={styles.topicWrap}>
                <TopicLabel icon={<FaTrophy />}>実績</TopicLabel>
                <Divider my={'md'} />
                <DivPC>
                    <ArrowButton href="/works">もっと見る</ArrowButton>
                </DivPC>
            </Stack>
            <Flex
                gap="md"
                align="start"
                className={styles.WorkCardWrap}
            >
                {works.list.length > 0 &&
                works.list.map((work: WorkDetails, index: number) => (
                    <WorkCard items={work} key={index} />
                ))}
            </Flex>
            <DivSP>
                <ArrowButton href="/works">もっと見る</ArrowButton>
            </DivSP>
        </section>
    )
}