import Image from "next/image";
import { styles } from './page.module'
import { Flex, Divider, Text, Stack } from "@mantine/core";
import MyCard from "@/components/elements/MyCard";
import TopicLabel from "@/components/elements/TopicLabel";

export default function Home() {
  return (
    <main>
      <Image src={'/top/dummy-mainview.png'} className={styles.mainView} alt="" width={100} height={300} />
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
          <MyCard title="ダミーテキスト１ダミーテキスト１ダミーテキスト１" categories={['ダミー']} />
          <MyCard title="ダミーテキスト２" categories={['ダミー']} />
          <MyCard title="ダミーテキスト３" categories={['ダミー']} />
          <MyCard title="ダミーテキスト４" categories={['ダミー']} />
          <MyCard title="ダミーテキスト５" categories={['ダミー']} />
          <MyCard title="ダミーテキスト６" categories={['ダミー']} />
        </Flex>
      </section>
      <section className={styles.section}>
        <TopicLabel>事業内容</TopicLabel>
        <Divider my={'md'} />
        <Text my={'md'}>WEBサイト制作、WEBアプリの開発を共創いたします。</Text>
        <Stack align='center' justify="center" gap={'md'} mb={'xl'}>
          <Text my={'md'} size="xl" className={styles.serviceTitle}>WEBサイト制作</Text>
          <Image src={'/top/dummy-mainview.png'} alt="" className={styles.serviceView} width={100} height={300} />
        </Stack>
        <Stack align='center' justify="center" gap={'md'} mb={'xl'}>
          <Text my={'md'} size="xl" className={styles.serviceTitle}>WEBアプリ開発</Text>
          <Image src={'/top/dummy-mainview.png'} alt="" className={styles.serviceView} width={100} height={300} />
        </Stack>
      </section>
    </main>
  );
}
