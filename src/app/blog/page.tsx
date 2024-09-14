import './page.module.css';
import Breadcrumbs, { BreadcrumbItems } from '@/components/elements/breadclumbs';
import TopicLabel from '@/components/elements/TopicLabel';
import { Flex, Button, Space, Stack, Divider } from '@mantine/core';
import Article from '@/components/elements/Article';
import { Fragment } from 'react';
import { apiClient } from '@/libs/apiClient';
import { BlogListResponseApi, BlogDetail, Tag } from '@/types/Blog/blog';
import { BiNotepad } from "react-icons/bi";
import { css } from '../../../styled-system/css';

const breadclumbsLinks: BreadcrumbItems[] = [
  { label: 'TOP', href: '/' },
  { label: 'ブログ', href: '/blog' },
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
      <Flex px={'8vw'} m={0} justify={'space-between'}>
        <Stack w={'20%'}>
          <TopicLabel icon={<BiNotepad />}>ブログ</TopicLabel>
          <Divider my={'md'} />
          {uniqueTags && uniqueTags.length > 0 && uniqueTags.map((tag, index) => (
            <Button w={'fit-content'} fz={'14px'} radius={'50px'} bg={'#404C96'} key={index} className={css({ _hover: {backgroundColor: '#fff !important', color: '#404C96 !important', border: '1px solid #404C96 !important'} })}>
              {tag.label}
            </Button>
          ))}
        </Stack>
        <Stack w={'65%'} mb={60}>
          {
            articles && articles.list.length > 0 &&
            articles.list.map((article, index) => (
              <Fragment key={index}>
                <Article items={article} />
                {articles.list.length > index && <Space h={16} />}
              </Fragment>
            ))
          }
        </Stack>
      </Flex>
    </>
  );
}