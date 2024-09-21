'use client';

import { Title, Flex, Text, Stack, Image, Box } from '@mantine/core';
import { useState } from 'react';
import { css } from '../../../styled-system/css';

interface SkillCollapse {
    items: SkillItem[],
    label: string,
}

interface SkillItem {
    src: string,
    name: string,
}

export default function SkillCollapse(props: SkillCollapse) {
    const [isOpen, setIsOpen] = useState(true);

    const styles = {
        labelWrap: css({
            backgroundColor: 'var(--site-accent-color-2)',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '10px',
            height: '50px',
            cursor: 'pointer',
        }),
        iconPanel: css({
            display: 'grid !important',
            transition: 'grid-template-rows 0.5s',
            gridTemplateRows: '0fr',
        }),
        icon: css({
            marginRight: '20px',
            md: {
                marginRight: '60px'
            },
        }),
    }

    return (
        <>
            <Flex className={styles.labelWrap} onClick={() => setIsOpen(!isOpen)}>
                <Title order={4} ml={'20px'}>
                    {props.label}
                </Title>
                <Title order={4} mr={'20px'}>
                    {isOpen ? 'ー' : '＋'}
                </Title>
            </Flex>
            <Box className={styles.iconPanel} style={isOpen ? {gridTemplateRows: '1fr'} : {}}>
                <Flex wrap={'wrap'} ml={'20px'} className={css({overflow: 'hidden'})}>
                    {props.items.map((item, index) =>
                        <Stack mb={30} align="center" key={index} className={styles.icon}>
                            <Image src={item.src} alt={item.name} w={40} h={40} />
                            <Text size="xs">{item.name}</Text>
                        </Stack>
                    )}
                </Flex>
            </Box>
        </>
    );
}