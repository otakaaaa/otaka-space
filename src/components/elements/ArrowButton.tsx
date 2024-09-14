'use client';

import { css } from "../../../styled-system/css"
import { FaLocationArrow } from "react-icons/fa";
import { Button } from "@mantine/core";
import { useRouter } from 'next/navigation';

interface ArrowButtonProps {
    children: string;
    href?: string;
}

export default function ArrowButton(props: ArrowButtonProps) {
    const router = useRouter();
    const ArrowIcon = <FaLocationArrow color="#404C96" size={20} />;
    const buttonStyle = css({
        _hover: {
            borderRadius: '50px !important',
            border: 'solid 1px #404C96 !important'
        }
    });

    const handleClick = () => {
        if (props.href) router.push(props.href);
    }

    return (
        <Button
            justify="center"
            fullWidth
            rightSection={ArrowIcon}
            variant="default"
            c={'#333'}
            bd={'none'}
            bg={'#F7F8FC'}
            className={buttonStyle}
            onClick={handleClick}
        >
            {props.children}
        </Button>
    )
}