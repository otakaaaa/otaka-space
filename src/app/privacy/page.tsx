import Breadcrumbs, { BreadcrumbItems } from "@/components/elements/breadclumbs";
import { Flex, Stack, Divider, Title, Text } from "@mantine/core";
import TopicLabel from "@/components/elements/TopicLabel";
import { styles } from "./page.module";
import { FcDataProtection } from "react-icons/fc";

const breadclumbsLinks: BreadcrumbItems[] = [
    { label: 'TOP', href: '/' },
    { label: 'プライバシーポリシー', href: '/privacy' },
];

export default function Privacy() {
    return (
        <>
            <Breadcrumbs items={breadclumbsLinks} />
            <Flex m={0} className={styles.container}>
                <Stack className={styles.topicWrap}>
                    <TopicLabel icon={<FcDataProtection />}>プライバシーポリシー</TopicLabel>
                    <Divider my={'md'} />
                </Stack>
                <Stack className={styles.contentsWrap}>
                    <Title order={3}>1. はじめに</Title>
                    <Text>
                        「Otaka Space」（以下、「当サイト」）では、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。<br/>
                        本プライバシーポリシーは、当サイトが収集する情報の種類、その利用方法、ユーザーの権利について説明しています。
                    </Text>

                    <Title order={3}>2. 収集する情報について</Title>
                    <Text>
                        当サイトでは、以下の情報を収集することがあります。<br/>
                        <br/>
                        <strong>・自動収集される情報</strong>: ユーザーが当サイトにアクセスする際に、クッキーやログデータ、IPアドレスなどの情報が自動的に収集されることがあります。<br/>
                        <br/>
                        <strong>・お問い合わせ情報</strong>: ユーザーが当サイトを通じて問い合わせを行った際、名前やメールアドレスなどの個人情報を収集することがあります。
                    </Text>

                    <Title order={3}>3. 個人情報の利用目的</Title>
                    <Text>
                        当サイトで収集した情報は、以下の目的で使用されます。<br/>
                        <br/>
                        ・サイトのパフォーマンス向上およびユーザーエクスペリエンスの最適化<br/>
                        ・お問い合わせに対する対応<br/>
                        ・セキュリティの維持および不正利用の防止<br/>
                    </Text>

                    <Title order={3}>4. クッキーの使用</Title>
                    <Text>
                        当サイトは、ユーザーの利便性向上を目的としてクッキーを使用しています。<br/>
                        クッキーは、ユーザーのデバイスに保存される小さなテキストファイルで、ブラウジングのパーソナライズに役立ちます。<br/>
                        クッキーの使用を希望しない場合、ブラウザの設定で無効にすることが可能です。
                    </Text>

                    <Title order={3}>5. 第三者への提供</Title>
                    <Text>
                        当サイトは、ユーザーの個人情報を第三者に販売、貸与、または提供することはありません。<br/>
                        ただし、法律に基づく要請があった場合や、ユーザーの安全を守るために必要と判断された場合には、適切な範囲で情報を共有することがあります。
                    </Text>

                    <Title order={3}>6. ユーザーの権利</Title>
                    <Text>
                        ユーザーは、当サイトが保持する自身の個人情報の確認、修正、削除を要求する権利があります。<br/>
                        これらのリクエストがあれば、適切に対応いたします。
                    </Text>

                    <Title order={3}>7. セキュリティ対策</Title>
                    <Text>
                        当サイトは、ユーザーの個人情報を保護するために適切な技術的および組織的な対策を講じています。<br/>
                        ただし、インターネット上での完全な安全性は保証できないため、個人情報の提供には十分ご注意ください。
                    </Text>

                    <Title order={3}>8. プライバシーポリシーの変更</Title>
                    <Text>
                        当サイトは、本プライバシーポリシーを随時更新することがあります。<br/>
                        変更があった場合、サイト上にて告知いたします。ユーザーは定期的にこのページをご確認ください。
                    </Text>

                    <Title order={3}>9. お問い合わせ</Title>
                    <Text>
                        プライバシーポリシーに関する質問やお問い合わせは、以下の連絡先までご連絡ください。<br/>
                        メールアドレス: sotaka3104@gmail.com
                    </Text>
                </Stack>
            </Flex>
        </>
    );
}