import { useState } from 'react';
import {
    IconInputCheck,
    IconEyeCheck,
    IconSend,
    IconCircleCheck,
} from '@tabler/icons-react';
import { Stepper, rem, Text, Container, Button, Box, Title, Center, useMantineTheme } from '@mantine/core';
import { css } from '../../../../styled-system/css';
import { apiClient } from '@/libs/apiClient';
import { useMediaQuery } from '@mantine/hooks';

interface ContactConfirmationProps {
    formData: ContactFormData,
}

interface ContactFormData {
    email: string;
    name: string;
    body: string;
}

export default function ContactConfirmation(props: ContactConfirmationProps) {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const [active, setActive] = useState(1);
    const [hasError, setHasError] = useState(false);

    const handleSubmit = () => {
        let isError = false;
        setActive(2);
        apiClient.post('/rcms-api/1/contact', { ...props.formData })
            .then((response) => {
                console.log('Contact form submitted successfully');
            })
            .catch((error) => {
                isError = true;
                console.error('Error:', error);
            })
            .finally(() => {
                if (isError) {
                    setHasError(true);
                } else {
                    setActive(3);
                }
            });
    }

    return (
        <>
            <Stepper
                active={active}
                completedIcon={<IconCircleCheck style={{ width: rem(18), height: rem(18) }} />}
                orientation={mobile ? 'vertical': 'horizontal'}
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
                <Center py={24} px={6}>
                    <Text fz={'lg'}>
                        送信完了しました。<br/>
                        お問い合わせありがとうございます。
                    </Text>
                </Center>
            ) : (
                <>
                    {
                        hasError ? (
                            <Center py={24} px={6}>
                                <Text fz={'lg'}>
                                    エラーが発生し、送信することができませんでした。<br/>
                                    お手数ですが、以下メールアドレスへ直接ご連絡のほどよろしくお願いいたします。<br/>
                                    sotaka3104@gmail.com
                                </Text>
                            </Center>
                        ) : (
                            <Container p={'24px 6px'}>
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
                        )
                    }
                </>
            )}
        </>
    );
}