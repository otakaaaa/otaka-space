'use client';

import { Card, Group, Text, Menu, ActionIcon, Image, SimpleGrid, rem } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import { css } from '../../../styled-system/css';
import { ServiceDetails } from '@/types/Service/Service';
import Link from 'next/link';
import parse from 'html-react-parser';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

interface MyCardType {
    items: ServiceDetails;
}

export default function ServiceCard(props: MyCardType) {
    return (
        <Card withBorder shadow="sm" radius="md" className={css({width: '100%', md: { minWidth: '230px', width: '48%' }})}>
            <Card.Section withBorder inheritPadding py="xs">
                <Group justify="space-between">
                    <Text fw={500}>{props.items.subject}</Text>
                    <Menu withinPortal position="bottom-end" shadow="sm">
                        <ActionIcon variant="subtle" color="#404C96" bg={'#DADCF1'} radius={'4px'} className={css({ _hover: {opacity: 0.8} })}>
                            <Link href={props.items.link} target='_blank'>
                                <IconExternalLink className={css({ width: '16px', height: '16px' })} />
                            </Link>
                        </ActionIcon>
                    </Menu>
                </Group>
            </Card.Section>

            <Text mt="md" c="dimmed" size="sm">
                {parse(props.items.contents)}
            </Text>

            <Card.Section mt="md">
                <Carousel
                    slideSize={{ base: '100%', sm: '100%' }}
                    slideGap={{ base: rem(2), sm: 'xl' }}
                    align="start"
                    slidesToScroll={1}
                >
                        {props.items.images.length > 0 &&
                        props.items.images.map((image, index) => (
                            <Carousel.Slide key={index} >
                                <Image src={image.url_org} alt={image.desc} w={'100%'} h={'100%'} fit='contain' />
                            </Carousel.Slide>
                        ))}
                </Carousel>
            </Card.Section>
        </Card>
    );
}