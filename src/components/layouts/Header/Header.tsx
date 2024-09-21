'use client';

import { useState } from 'react';
import { Container, Anchor, Group, Box, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FcHome, FcServices, FcFeedback, FcNews } from "react-icons/fc";

const mainLinks = [
  { link: '/', labelSP: <FcHome size={32} />, labelPC: 'TOP' },
  { link: '/services', labelSP: <FcServices size={32} />, labelPC: 'サービス' },
  { link: '#contact', labelSP: <FcFeedback size={32} />, labelPC: 'お問い合わせ' },
  { link: '/blog', labelSP: <FcNews size={32} />, labelPC: 'ブログ' },
];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);
  const router = useRouter();

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={index}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
        router.push(item.link);
      }}
    >
      {item.labelPC}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <Link href='/'>OTAKA SPACE</Link>
        <Box className={classes.links} visibleFrom="sm">
          <Group gap={0} justify="flex-end" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </Box>
        <Box className={classes.smMenu} hiddenFrom="sm">
          <div className={classes.headerInner}>
            <Flex>
              {mainLinks.map((link, index) => (
                <Link href={link.link} key={index} onClick={toggle} className={classes.link}>
                  {link.labelSP}
                </Link>
              ))}
            </Flex>
          </div>
        </Box>
      </Container>
    </header>
  );
}