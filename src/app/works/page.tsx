import './page.module.css';
import Breadcrumbs, { BreadcrumbItems } from '@/components/elements/breadclumbs';
import { Flex, Stack, Divider } from '@mantine/core';
import WorkCard from '@/components/elements/WorkCard';
import TopicLabel from '@/components/elements/TopicLabel';
import { apiClient } from "@/libs/apiClient";
import { WorksListResponseApi, WorkDetails } from '@/types/Works/Works';
import { FaTrophy } from "react-icons/fa";

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
      <Flex px={'8vw'} m={0} justify={'space-between'}>
        <Stack w={'20%'}>
          <TopicLabel icon={<FaTrophy />}>実績</TopicLabel>
          <Divider my={'md'} />
        </Stack>
        <Flex
          w={'75%'}
          mb={60}
          gap="md"
          align="start"
          direction="row"
          wrap="wrap"
        >
          {works.list.length > 0 &&
          works.list.map((work: WorkDetails, index: number) => (
            <WorkCard items={work} key={index} />
          ))}
        </Flex>
      </Flex>
    </>
  );
}