import { Flex, Stack, Image, Center } from "@mantine/core"
import styles from "./HeroSection.module.css"
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function HeroSection() {
    return (
        <Flex w={'100%'} justify={'center'}>
            <Stack className={styles.snsIcons}>
                <BsTwitterX color="#404C96" cursor={'pointer'} />
                <BsInstagram color="#404C96" cursor={'pointer'} />
                <BsGithub color="#404C96" cursor={'pointer'} />
            </Stack>
            <Image src={'/top/dummy-mainview.png'} alt="メイン画像" className={styles.mainView} />
            <Center w={'40px'} className={styles.scrollGuide}>
                <span className={styles.text}>SCROLL</span>
                <div className={styles.chevron}></div>
                <div className={styles.chevron}></div>
                <div className={styles.chevron}></div>
            </Center>
        </Flex>
    )
}