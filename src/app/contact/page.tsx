import { styles } from './page.module';
import Breadcrumbs, { BreadcrumbItemsType } from '@/components/elements/breadclumbs';
import { Box, Container, Space, Button, Center } from '@mantine/core';
import TopicLabel from '@/components/elements/TopicLabel';
import FormRow from '@/components/elements/FormRow';

const breadclumbsLinks: BreadcrumbItemsType[] = [
  { label: 'TOP', href: '/' },
  { label: 'お問い合わせ', href: '/contact' },
];

export default function Contact() {
  return (
    <>
      <Breadcrumbs items={breadclumbsLinks} />
      <Box px={130} m={0}>
        <TopicLabel>お問い合わせ</TopicLabel>
        <Container fluid mt={60} mb={100}>
          <FormRow required label='ご用件' type='select' items={['WEBアプリ開発について', 'CMS構築について', 'その他、ご質問・お問い合わせ']} />
          <Space h={'xl'} />
          <FormRow required label='会社名' type='textinput' placeholder='会社名' />
          <Space h={'xl'} />
          <FormRow required label='お名前' type='textinput' placeholder='お名前' />
          <Space h={'xl'} />
          <FormRow label='電話番号' type='textinput' placeholder='電話番号（半角）' />
          <Space h={'xl'} />
          <FormRow required label='メールアドレス' type='textinput' placeholder='メールアドレス（半角）' />
          <Space h={'xl'} />
          <FormRow required label='お問い合わせ内容' type='textarea' placeholder='お問い合わせ内容' />
          <Center mt={50}>
            <Button h={40} w={'30%'} color={'orange.5'} fw={'600'}>送信</Button>
          </Center>
        </Container>
      </Box>
    </>
  );
}