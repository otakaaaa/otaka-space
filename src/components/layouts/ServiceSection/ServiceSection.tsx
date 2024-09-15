import { Divider, Stack } from "@mantine/core";
import TopicLabel from "@/components/elements/TopicLabel";
import { styles } from "./ServiceSection.module";
import { FaLaptop } from "react-icons/fa";
import { FeaturesAsymmetrical } from "@/components/layouts/Features/FeaturesAsymmetrical";

export default function ServiceSection() {
    return (
        <section className={styles.section} id="service">
            <Stack className={styles.topicWrap}>
                <TopicLabel icon={<FaLaptop />}>事業内容</TopicLabel>
                <Divider my={'md'} />
            </Stack>
            <Stack id="service" className={styles.featureWrap}>
                <FeaturesAsymmetrical />
            </Stack>
        </section>
    )
}