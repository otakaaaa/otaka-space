'use client';

import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
    Modal,
    useMantineTheme,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconBrandX, IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react';
import { ContactIconsList } from './ContactIcons';
import classes from './ContactSection.module.css';
import { useForm } from '@mantine/form';
import ContactConfirmation from './ContactConfirmation';
import Link from 'next/link';
import { Fragment } from 'react';

const social = [
    { Icon: IconBrandX, link: 'https://x.com/satoshi_otaka12' },
    { Icon: IconBrandGithub, link: 'https://github.com/htk-otaka' },
    { Icon: IconBrandInstagram, link: 'https://www.instagram.com/satoshi_otaka1203/?utm_source=web_redirect_test&ig_mid=24D3DC17-8086-4716-B7BC-C8194DB2195D&fall_back_to_web=true' }
];

export default function ContactSection() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const icons = social.map((item, index) => (
        <Fragment key={index}>
            <Link href={item.link} target='_blank'>
                <ActionIcon size={28} className={classes.social} variant="transparent">
                    <item.Icon size="1.4rem" stroke={1.5} />
                </ActionIcon>
            </Link>
        </Fragment>
    ));
    const [opened, { open, close }] = useDisclosure(false);
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            name: '',
            body: '',
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'メールアドレスが正しくありません。'),
            name: (value) => (value.length < 50 ? null : '50文字以内で入力してください。'),
            body: (value) => (value.length > 0 ? null : 'お問い合わせ内容は必須入力です。') || (value.length < 400 ? null : '400文字以内で入力してください。'),
        }
    });

    const handleSubmit = () => {
        form.validate();
        if (form.isValid()) {
            open();
        }
    }

    return (
        <div id='contact' className={classes.wrapper}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
                <div>
                    <Title className={classes.title}>Contact me</Title>
                    <Text className={classes.description} mt="sm" mb={30}>
                        当サイトについては、お問い合わせフォームもしくはメールでお問い合わせが可能です。<br/>通常平日の３営業日以内に返信いたします。
                    </Text>
                    <ContactIconsList />
                    <Group mt="xl">{icons}</Group>
                </div>
                <form className={classes.form}>
                    <TextInput
                        label="メールアドレス"
                        placeholder="your@email.com"
                        required
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                        key={form.key('email')}
                        {...form.getInputProps('email')}
                    />
                    <TextInput
                        label="お名前"
                        placeholder="John Doe"
                        mt="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                        key={form.key('name')}
                        {...form.getInputProps('name')}
                    />
                    <Textarea
                        required
                        label="お問い合わせ内容"
                        placeholder="WEBサイト制作のご依頼をしたい"
                        minRows={4}
                        mt="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                        key={form.key('body')}
                        {...form.getInputProps('body')}
                    />
                    <Group justify="flex-end" mt="md">
                        <Button onClick={handleSubmit} className={classes.control}>確認</Button>
                    </Group>
                </form>
            </SimpleGrid>
            <Modal
                opened={opened}
                onClose={close}
                title={<Text fw={'bold'}>お問い合わせ内容確認</Text>}
                overlayProps={{
                    backgroundOpacity: 0.55,
                    blur: 3,
                }}
                size={mobile ? '90%' : '60%'}
            >
                <ContactConfirmation formData={form.getValues()} />
            </Modal>
        </div>
    );
}