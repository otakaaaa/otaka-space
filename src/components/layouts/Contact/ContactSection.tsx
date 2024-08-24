import { Center, Text, Box, Stack, Button } from "@mantine/core"
import { css } from "../../../../styled-system/css"

export default function ContactSection() {
    return (
        <Center bg={'#dadcf1'}>
            <Stack align='center'>
                <Text size="xs" mt={50} mb={15}>お問い合わせ</Text>
                <Text mb={10} className={styles.textWid}>WEBサイト制作・アプリ開発のご相談などお問い合わせはこちら</Text>
                <Button bg={'#333'} fw={500} fullWidth className={styles.button}>メールでお問い合わせ</Button>
                <Button bg={'#333'} fw={500} mb={50} fullWidth className={styles.button}>電話でお問い合わせ</Button>
            </Stack>
        </Center>
    )
}

const styles = {
    textWid: css({
        maxWidth: '240px',
    }),
    button: css({
        minHeight: '50px',
    })
}