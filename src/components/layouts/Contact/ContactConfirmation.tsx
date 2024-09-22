import { useState } from 'react';
import {
    IconInputCheck,
    IconEyeCheck,
    IconSend,
    IconCircleCheck,
} from '@tabler/icons-react';
import { Stepper, rem, Text, Container, Button, Box, Title, Center } from '@mantine/core';
import { css } from '../../../../styled-system/css';
import { apiClient } from '@/libs/apiClient';

interface ContactConfirmationProps {
    formData: ContactFormData,
}

interface ContactFormData {
    email: string;
    name: string;
    body: string;
}

export default function ContactConfirmation(props: ContactConfirmationProps) {
    const [active, setActive] = useState(1);
    const handleSubmit = () => {
        setActive(2);
        apiClient.post('/rcms-api/1/contact', { ...props.formData })
            .then((response) => {
                console.log('Contact form submitted successfully');
            })
            .catch((error) => {
                console.error('Error:', error)
            })
            .finally(() => {
                setActive(3);
            });
    }

    return (
        <>
            <Stepper
                active={active}
                completedIcon={<IconCircleCheck style={{ width: rem(18), height: rem(18) }} />}
            >
                <Stepper.Step
                    icon={<IconInputCheck style={{ width: rem(18), height: rem(18) }} />}
                    label="Step 1"
                    description="フォーム入力"
                />
                <Stepper.Step
                    icon={<IconEyeCheck style={{ width: rem(18), height: rem(18) }} />}
                    label="Step 2"
                    description="お問い合わせ内容の確認"
                />
                <Stepper.Step
                    icon={<IconSend style={{ width: rem(18), height: rem(18) }} />}
                    label="Step 3"
                    description="送信完了"
                />
            </Stepper>
            {active === 3 ? (
                <Center p={64}>
                    <Title order={3}>送信完了しました。</Title>
                </Center>
            ) : (
                <Container p={'24px 0px'}>
                    <Text>以下内容で送信します。</Text>
                    <Text mb={32}>問題なければ、送信ボタンを押してください。</Text>
                    <Box ml={20}>
                        <Text mb={16}>メールアドレス：{props.formData.email}</Text>
                        <Text mb={16}>お名前：{props.formData.name}</Text>
                        <Text mb={32}>お問い合わせ内容：{props.formData.body}</Text>
                    </Box>
                    <Button
                        className={css({
                            float: 'right',
                            marginBottom: '32px',
                            marginRight: '20px',
                        })}
                        onClick={handleSubmit}
                    >
                        送信
                    </Button>
                </Container>
            )}
        </>
    );
}