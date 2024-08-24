'use client';

import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { css } from '../../../styled-system/css';
import { Fragment } from 'react';

type MyCardType = {
    title: string;
    categories: string[];
    detail?: string;
}

export default function MyCard(props: MyCardType) {
    return (
        <Card className={css({width: '32%'})} shadow="sm" padding="lg" radius="md" withBorder mb={30}>
            <Card.Section>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    alt="Norway"
                    className={css({width: '30%', height: '160px'})}
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{props.title}</Text>
                {props.categories &&
                props.categories.map((category, index) => (
                    <Fragment key={index}>
                        <Badge color="pink">{category}</Badge>
                    </Fragment>
                ))}
            </Group>

            {
                props.detail &&
                <Text size="sm" c="dimmed">
                    {props.detail}
                </Text>
            }

            <Button color="blue" fullWidth mt="md" radius="md">
                詳細を見る
            </Button>
        </Card>
    );
}