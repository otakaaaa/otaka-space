'use client';

import { Card, Image, Text, Button, Stack, Box } from '@mantine/core';
import { css } from '../../../styled-system/css';
import { useRouter } from 'next/navigation';
import { ServiceDetails } from '@/types/Service/Service';
import parse from 'html-react-parser';

interface MyCardType {
    items: ServiceDetails;
}

export default function ServiceCard(props: MyCardType) {
    const router = useRouter();
    const handleClick = (id: number) => {
        router.push(`/services/detail/${id}`);
    }

    return (
        <Card className={css({width: '100%', md: { minWidth: '280px' }})} shadow="sm" padding="lg" radius="md" withBorder mb={30}>
            <Card.Section>
                <Image
                    src={props.items.image.url_org}
                    alt={props.items.image.desc}
                    className={css({width: '100%', height: 'auto'})}
                />
            </Card.Section>


            <Stack mt="md" mb="xs" gap={'3px'}>
                <Text fz={'14px'}>{props.items.ymd}</Text>
                <Text fw={'bold'}>{props.items.subject}</Text>
            </Stack>

            {
                props.items.contents &&
                <Box fz={'sm'} c={'dimmed'}>
                    {parse(props.items.contents)}
                </Box>
            }

            <Button onClick={() => handleClick(props.items.topics_id)} color="#404C96" fullWidth mt="md" radius="md">
                詳細を見る
            </Button>
        </Card>
    );
}