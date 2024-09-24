'use client';

import { Text, SimpleGrid, Container, Box, Table } from '@mantine/core';
import classes from './FeaturesAsymmetrical.module.css';
import { BsController } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa6";
import CardsCarousel from '@/components/elements/CardsCarousel';

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
    icon: JSX.Element;
    title: string;
    description: React.ReactNode;
}

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
    return (
        <div className={classes.feature} {...others}>
            <div className={classes.overlay} />
            <div className={classes.content}>
                {Icon}
                <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
                    {title}
                </Text>
                <Box>
                    {description}
                </Box>
            </div>
        </div>
    );
}

const tableData = {
    body: [
        { ym: '1998年12月', detail: '宮崎県都城市生まれ' },
        { ym: '2022年3月', detail: '宮崎大学工学部電気システム工学科 卒業' },
        { ym: '2022年4月', detail: '日本情報クリエイト株式会社でWebエンジニアとしてキャリアをスタート' },
        { ym: '2024年7月', detail: '株式会社はばたーくでWebエンジニアとして従事' },
    ],
};

const mockdata = [
    {
        icon: <BsController fontSize={'38px'} color='#404C96' />,
        title: '趣味',
        description: <CardsCarousel />,
    },
    {
        icon: <FaGraduationCap fontSize={'38px'} color='#404C96' />,
        title: '略歴',
        description: (
            <Table verticalSpacing={'sm'}>
                <Table.Tbody>
                    {tableData.body && tableData.body.map((data, index) => 
                        <Table.Tr key={index}>
                            <Table.Td className={classes.td1}>{data.ym}</Table.Td>
                            <Table.Td>{data.detail}</Table.Td>
                        </Table.Tr>
                    )}
                </Table.Tbody>
            </Table>
        ),
    },
];

export function FeaturesAsymmetrical() {
    const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

    return (
        <Container mt={30} mb={30} size="100%" p={0}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
                {items}
            </SimpleGrid>
        </Container>
    );
}