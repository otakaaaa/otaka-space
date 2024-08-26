import { css } from "../../../styled-system/css"
import { Flex, Stack, Badge, Text, Radio, Checkbox, NativeSelect, Textarea, TextInput } from "@mantine/core"

type FormRowProps = {
    label: string,
    type: 'radio' | 'checkbox' | 'select' | 'textarea' | 'textinput',
    required?: boolean,
    items?: string[],
    placeholder?: string,
}

export default function FormRow(props: FormRowProps) {
    return (
        <Flex>
            <Stack w={'25%'}>
                <Badge variant="outline" color={props.required ? 'orange' : 'gray'} size="lg" radius="lg">
                    {props.required ? '必須' : '任意'}
                </Badge>
                <Text>{props.label}</Text>
            </Stack>
            <Stack w={'75%'} className={styles.right}>
                {props.type === 'radio' &&
                    props.items &&
                    props.items.map((item, index) => (
                        <Radio
                            label={item}
                            color="violet"
                            key={index}
                        />
                    ))}
                {props.type === 'checkbox' &&
                    props.items &&
                    props.items.map((item, index) => (
                        <Checkbox
                            label={item}
                            color="violet"
                            key={index}
                        />
                    ))}
                {props.type === 'select' &&
                    props.items &&
                    <NativeSelect
                        description="1つ選択してください。"
                        data={props.items}
                    />}
                {props.type === 'textarea' &&
                    <Textarea
                        placeholder={props.placeholder}
                        autosize
                        minRows={3}
                    />}
                {props.type === 'textinput' &&
                    <TextInput
                        placeholder={props.placeholder}
                    />}
            </Stack>
        </Flex>
    )
}

const styles = {
    right: css({
        alignSelf: 'end'
    })
}