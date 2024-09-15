import Link from "next/link"
import { Flex } from "@mantine/core"
import { Fragment } from "react"
import { css } from "../../../styled-system/css"

type BreadcrumbsType = {
    items: BreadcrumbItems[]
}

export type BreadcrumbItems = {
    label: string;
    href: string;
}

export default function Breadcrumbs(props: BreadcrumbsType) {
    return (
        <Flex my={'md'} px={'8vw'}>
            {props.items.map((item, index) => (
                <Fragment key={index}>
                    <Link href={item.href} className={styles.link}>
                        {item.label}
                        {(props.items.length !== index + 1) &&
                        <span>{'　>　'}</span>}
                    </Link>
                </Fragment>
            ))}
        </Flex>
    )
}

const styles = {
    link: css({
        fontSize: '12px',
        _hover: {
            cursor: 'pointer',
            opacity: 0.7,
        }
    })
}