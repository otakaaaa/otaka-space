import './page.module.css';
import Breadcrumbs, { BreadcrumbItems } from '@/components/elements/breadclumbs';
import { Box, Flex } from '@mantine/core';
import WorkCard from '@/components/elements/WorkCard';
import TopicLabel from '@/components/elements/TopicLabel';
import { apiClient } from "@/libs/apiClient";
import { WorksListResponseApi, WorkDetails } from '@/types/Works/Works';

const breadclumbsLinks: BreadcrumbItems[] = [
  { label: 'TOP', href: '/' },
  { label: '実績一覧', href: '/works' },
];

export default async function Works() {
  const works: WorksListResponseApi = await apiClient.get('/rcms-api/1/works/list', {})
    .then((response) => response.data)
    .catch((error) => console.error('Error:', error));

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
          {works.list.length > 0 &&
          works.list.map((work: WorkDetails, index: number) => (
            <WorkCard items={work} key={index} />
          ))}
        </Flex>
      </Box>
    </>
  );
}