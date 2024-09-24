import { styles } from './page.module';
import Breadcrumbs, { BreadcrumbItems } from '@/components/elements/breadclumbs';
import TopicLabel from '@/components/elements/TopicLabel';
import { Flex, Button, Space, Stack, Divider } from '@mantine/core';
import Article from '@/components/elements/Article';
import { Fragment } from 'react';
import { apiClient } from '@/libs/apiClient';
import { BlogListResponseApi, BlogDetail, Tag } from '@/types/Blog/blog';
import { css } from '../../../styled-system/css';
import { FcNews } from "react-icons/fc";

const breadclumbsLinks: BreadcrumbItems[] = [
  { label: 'TOP', href: '/' },
  { label: 'ブログ一覧', href: '/blog' },
];

export default async function Blog() {
  const articles: BlogListResponseApi = await apiClient.get('/rcms-api/1/blog/list', {})
    .then((response) => response.data)
    .catch((error) => console.error('Error:', error));
  let uniqueTags: Tag[] = [];
  await apiClient.get('/rcms-api/1/blog-tags/list', {})
    .then((response) => {
      let utilizedTags: Tag[] = [];
      response.data.list.length > 0 &&
      response.data.list.map((item: BlogDetail) =>
        item.tags.length > 0 && item.tags.map((tag) =>
          utilizedTags.push(tag)
        )
      )
      uniqueTags = Array.from(new Map(utilizedTags.map(itemObject => [itemObject.key, itemObject])).values());
    }).catch((error) => console.error('Error:', error));

  return (
    <>
      <Breadcrumbs items={breadclumbsLinks} />
      <Flex m={0} className={styles.container}>
        <Stack className={styles.topicWrap}>
          <TopicLabel icon={<FcNews />}>ブログ</TopicLabel>
          <Divider my={'md'} />
          {/* タグ */}
          {/* <DivPC>
            {uniqueTags && uniqueTags.length > 0 && uniqueTags.map((tag, index) => (
              <Button key={index} className={tagStyle}>
                {tag.label}
              </Button>
            ))}
          </DivPC> */}
        </Stack>
        <Stack mb={60} className={styles.articleWrap}>
          {
            articles && articles.list.length > 0 &&
            articles.list.map((article, index) => (
              <Fragment key={index}>
                <Article items={article} />
                {articles.list.length - 1 === index && <Space h={16} />}
              </Fragment>
            ))
          }
        </Stack>
      </Flex>
    </>
  );
}

const tagStyle = css({
  width: 'fit-content',
  fontSize: '14px',
  borderRadius: '50px !important',
  backgroundColor: '#404C96 !important',
  marginBottom: '20px',
  _hover: {
    backgroundColor: '#fff !important',
    color: '#404C96 !important',
    border: '1px solid #404C96 !important',
  },
  _last: {
    marginBottom: 0,
  }
})