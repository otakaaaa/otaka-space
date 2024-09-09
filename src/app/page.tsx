import { styles } from './page.module'
import { Flex, Divider, Text, Stack, Center, Image } from "@mantine/core";
import WorkCard from "@/components/elements/WorkCard";
import TopicLabel from "@/components/elements/TopicLabel";
import { apiClient } from '@/libs/apiClient';
import { WorksListResponseApi, WorkDetails } from '@/types/Works/Works';

export default async function Home() {
  const works: WorksListResponseApi = await apiClient.get('/rcms-api/1/works/list', {})
    .then((response) => response.data)
    .catch((error) => console.error('Error:', error));

  return (
    <main>
      <Image src={'/top/dummy-mainview.png'} className={styles.mainView} alt="" />
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
    </main>
  );
}
