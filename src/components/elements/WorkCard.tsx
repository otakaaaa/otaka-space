'use client';

import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { css } from '../../../styled-system/css';
import { Fragment } from 'react';
import { useRouter } from 'next/navigation';
import { WorkDetails } from '@/types/Works/Works';

interface MyCardType {
    items: WorkDetails;
}

export default function WorkCard(props: MyCardType) {
    const router = useRouter();
    const handleClick = (id: number) => {
        router.push(`/works/detail/${id}`);
    }

    return (
        <Card className={css({width: '32%'})} shadow="sm" padding="lg" radius="md" withBorder mb={30}>
            <Card.Section>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    alt="Norway"
                    className={css({width: '30%', height: '12.5vw'})}
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{props.items.subject}</Text>
                {/* {props.items.categories &&
                props.items.categories.map((category, index) => (
                    <Fragment key={index}>
                        <Badge color="pink">{category}</Badge>
                    </Fragment>
                ))} */}
            </Group>

            {
                props.items.contents &&
                <Text size="sm" c="dimmed">
                    {props.items.contents}
                </Text>
            }

            <Button onClick={() => handleClick(props.items.topics_id)} color="blue" fullWidth mt="md" radius="md">
                詳細を見る
            </Button>
        </Card>
    );
}