import Image from "next/image";
import { styles } from './page.module'
import { Flex, Divider, Text, Stack } from "@mantine/core";
import MyCard from "@/components/elements/card/MyCard";

export default function Home() {
  return (
    <main>
      <Image src={'/top/dummy-mainview.png'} className={styles.mainView} alt="" width={100} height={300} />
      <section className={styles.section}>
        <Text fw={'bold'} size="xl" className={styles.title}>実績</Text>
        <Divider my={'md'} />
        <Flex
          mih={50}
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
        <Text fw={'bold'} size="xl" className={styles.title}>事業内容</Text>
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
