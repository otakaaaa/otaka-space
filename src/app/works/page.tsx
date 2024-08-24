import './page.module.css';
import Breadcrumbs, { BreadcrumbItemsType } from '@/components/elements/breadclumbs';
import { Box, Flex } from '@mantine/core';
import MyCard from '@/components/elements/MyCard';
import TopicLabel from '@/components/elements/TopicLabel';

const breadclumbsLinks: BreadcrumbItemsType[] = [
  { label: 'TOP', href: '/' },
  { label: '実績一覧', href: '/works' },
];

export default function Achievements() {
  return (
    <>
      <Breadcrumbs items={breadclumbsLinks} />
      <Box px={130} m={0}>
        <TopicLabel>実績一覧</TopicLabel>
        <Flex
          my={60}
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
          <MyCard title="ダミーテキスト７" categories={['ダミー']} />
          <MyCard title="ダミーテキスト８" categories={['ダミー']} />
          <MyCard title="ダミーテキスト９" categories={['ダミー']} />
          <MyCard title="ダミーテキスト１０" categories={['ダミー']} />
          <MyCard title="ダミーテキスト１１" categories={['ダミー']} />
          <MyCard title="ダミーテキスト１２" categories={['ダミー']} />
        </Flex>
      </Box>
    </>
  );
}