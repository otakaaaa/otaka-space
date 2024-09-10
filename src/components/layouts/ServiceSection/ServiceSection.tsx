import { Flex, Divider, Text, Stack, Center, Image } from "@mantine/core";
import TopicLabel from "@/components/elements/TopicLabel";
import { styles } from "./ServiceSection.module";

export default function ServiceSection() {
    return (
        <section className={styles.section} id="service">
            <TopicLabel>事業内容</TopicLabel>
            <Divider my={'md'} />
            <Text my={'xl'} size="xl">WEBの開発をリソース支援いたします。</Text>
            <Center mb={'sm'}>
            <Image src={'/top/dummy-mainview.png'} alt="" className={styles.serviceView} />
            </Center>
            <Flex>
            <Stack>
                <Text my={'md'} size="md" className={styles.serviceTitle}>フロントエンド開発</Text>
                <Text my={'md'} size="md" className={styles.serviceTitle}>バックエンド開発</Text>
                <Text my={'md'} size="md" className={styles.serviceTitle}>ECサイト構築</Text>
                <Text my={'md'} size="md" className={styles.serviceTitle}>CMS構築</Text>
            </Stack>
            <Stack>
                <Text my={'md'} size="md" className={styles.serviceDetail}>・・・JavaScript、TypeScript、React、Next.js、Vue.js等</Text>
                <Text my={'md'} size="md" className={styles.serviceDetail}>・・・PHP、Node.js、Ruby、CakePHP、Laravel、Express、Ruby on Rails等</Text>
                <Text my={'md'} size="md" className={styles.serviceDetail}>・・・STORES、Kuroco等</Text>
                <Text my={'md'} size="md" className={styles.serviceDetail}>・・・WordPress、Kuroco等</Text>
            </Stack>
            </Flex>
        </section>
    )
}