import { Text, SimpleGrid, Container, Box } from '@mantine/core';
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

const mockdata = [
    {
        icon: <BsController fontSize={'38px'} color='#404C96' />,
        title: '趣味',
        description: <CardsCarousel />,
    },
    {
        icon: <FaGraduationCap fontSize={'38px'} color='#404C96' />,
        title: '略歴',
        description: <>1998年12月　宮崎県都城市生まれ<br/>2022年3月　宮崎大学工学部電気システム工学科 卒業<br/>2022年4月　日本情報クリエイト株式会社でWebエンジニアとしてキャリアをスタート<br/>2024年7月　株式会社はばたーくでWebエンジニアとして従事</>,
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