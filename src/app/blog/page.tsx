import './page.module.css';
import Breadcrumbs, { BreadcrumbItems } from '@/components/elements/breadclumbs';
import TopicLabel from '@/components/elements/TopicLabel';
import { Box, Space } from '@mantine/core';
import Article, { ArticleItem } from '@/components/elements/Article';
import { Fragment } from 'react';

const breadclumbsLinks: BreadcrumbItems[] = [
  { label: 'TOP', href: '/' },
  { label: 'おたかのブログ 記事一覧', href: '/blog' },
];

const articles: ArticleItem[] = [
  {
    avatar: '/top/dummy-mainview.png',
    userName: 'satoshi otaka',
    createdAt: '2024/08/01',
    title: 'タイトル1タイトル1タイトル1タイトル1タイトル1タイトル1タイトル1タイトル1タイトル1タイトル1',
    tags: ['タグ1', 'タグ2'],
    pageView: 1,
  },
  {
    avatar: '/top/dummy-mainview.png',
    userName: 'satoshi otaka',
    createdAt: '2024/08/02',
    title: 'タイトル2',
    tags: ['タグ2'],
    pageView: 99,
  },
  {
    avatar: '/top/dummy-mainview.png',
    userName: 'satoshi otaka',
    createdAt: '2024/08/03',
    title: 'タイトル3',
    tags: ['タグ3'],
    pageView: 3,
  },
  {
    avatar: '/top/dummy-mainview.png',
    userName: 'satoshi otaka',
    createdAt: '2024/08/04',
    title: 'タイトル4',
    tags: ['タグ4'],
    pageView: 4,
  },
]

export default function Blog() {
  return (
    <>
      <Breadcrumbs items={breadclumbsLinks} />
      <Box px={130} m={0}>
        <TopicLabel>おたかのブログ 記事一覧</TopicLabel>
        <Box my={60}>
          {
            articles && articles.length > 0 &&
            articles.map((article, index) => (
              <Fragment key={index}>
                <Article items={article} />
                {articles.length > index && <Space h={16} />}
              </Fragment>
            ))
          }
        </Box>
      </Box>
    </>
  );
}