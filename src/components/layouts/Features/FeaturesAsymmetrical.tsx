import { Text, SimpleGrid, Container } from '@mantine/core';
import classes from './FeaturesAsymmetrical.module.css';
import { BsCreditCard } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa6";
import parse from 'html-react-parser';

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
    icon: JSX.Element;
    title: string;
    description: string;
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
                <Text c="dimmed" fz="sm">
                    {parse(description)}
                </Text>
            </div>
        </div>
    );
}

const mockdata = [
    {
        icon: <BsCreditCard fontSize={'38px'} color='#404C96' />,
        title: '資格',
        description: 'Coming Soon...',
    },
    {
        icon: <FaGraduationCap fontSize={'38px'} color='#404C96' />,
        title: '略歴',
        description: '1998年　宮崎県都城市生まれ<br/>2022年　宮崎大学工学部電気システム工学科 卒業<br/>2022年　日本情報クリエイト株式会社でWebエンジニアとしてキャリアをスタート<br/>2024年　株式会社はばたーくでWebエンジニアとして従事',
    },
];

export function FeaturesAsymmetrical() {
    const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

    return (
        <Container mt={30} mb={30} size="lg">
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
                {items}
            </SimpleGrid>
        </Container>
    );
}