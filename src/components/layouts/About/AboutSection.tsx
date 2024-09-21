import { Flex, Title, Box } from "@mantine/core";
import { FcSms } from "react-icons/fc";
import { FeaturesAsymmetrical } from "../Features/FeaturesAsymmetrical";
import { styles } from "./AboutSection.module";

export default function AboutSection() {
    return (
        <Box m={0} className={styles.section}>
            <Flex align={'center'} mb={28}>
                <Box mr={8}>
                    <FcSms size={'34px'} />
                </Box>
                <Title order={1} display={'flex'}>ABOUT ME</Title>
            </Flex>
            <Title order={3} mb={20}>大髙　智司</Title>
            <FeaturesAsymmetrical />
        </Box>
    )
}