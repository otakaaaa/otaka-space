import { styles } from './page.module';
import Breadcrumbs, { BreadcrumbItems } from '@/components/elements/breadclumbs';
import { Flex, Stack, Divider } from '@mantine/core';
import ServiceCard from '@/components/elements/ServiceCard';
import TopicLabel from '@/components/elements/TopicLabel';
import { apiClient } from "@/libs/apiClient";
import { ServiceListResponseApi, ServiceDetails } from '@/types/Service/Service';
import { FcServices } from "react-icons/fc";

const breadclumbsLinks: BreadcrumbItems[] = [
  { label: 'TOP', href: '/' },
  { label: 'サービス一覧', href: '/services' },
];

export default async function Services() {
  const services: ServiceListResponseApi = await apiClient.get('/rcms-api/1/services/list', {})
    .then((response) => response.data)
    .catch((error) => console.error('Error:', error));

  return (
    <>
      <Breadcrumbs items={breadclumbsLinks} />
      <Flex m={0} className={styles.container}>
        <Stack className={styles.topicWrap}>
          <TopicLabel icon={<FcServices />}>サービス</TopicLabel>
          <Divider my={'md'} />
        </Stack>
        <Flex
          mb={60}
          gap="md"
          align="start"
          direction="row"
          wrap="wrap"
          className={styles.workCardWrap}
        >
          {services.list.length > 0 &&
          services.list.map((work: ServiceDetails, index: number) => (
            <ServiceCard items={work} key={index} />
          ))}
        </Flex>
      </Flex>
    </>
  );
}