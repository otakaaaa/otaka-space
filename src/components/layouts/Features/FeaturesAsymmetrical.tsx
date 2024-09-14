import { Text, SimpleGrid, Container } from '@mantine/core';
import classes from './FeaturesAsymmetrical.module.css';
import { FaRegWindowRestore } from "react-icons/fa";
import { TbBrowser } from "react-icons/tb";
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
        icon: <FaRegWindowRestore fontSize={'38px'} color='#404C96' />,
        title: 'WEBサイト制作',
        description: 'ホームページ、LP、ECサイトなどの新規構築からリニューアルまで幅広く対応いたします。<br/><br>・ユーザビリティの優れたUI/UX<br>・レスポンシブ対応<br>・マーケティング、導線設計、SEOなど<br><br>以上の観点から総合力の高いHPを目指します。',
    },
    {
        icon: <TbBrowser fontSize={'38px'} color='#404C96' />,
        title: 'WEBアプリ開発',
        description: '要件定義、設計から構築、テスト、保守まで幅広くスピーディーに対応いたします。<br><br>日々新しい技術が生まれる中で、キャッチアップを行いながら高品質なアプリ開発を提供いたします。',
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