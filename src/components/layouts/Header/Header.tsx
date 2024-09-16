'use client';

import { useState } from 'react';
import { Container, Anchor, Group, Burger, Box, Flex, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const mainLinks = [
  { link: '/', label: 'TOP' },
  { link: '/works', label: '実績' },
  { link: '/#service', label: '事業内容' },
  { link: '/#contact', label: 'お問い合わせ' },
  { link: '/blog', label: 'ブログ' },
];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);
  const router = useRouter();

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
        router.push(item.link);
      }}
    >
      {item.label}
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
        <Burger
          opened={opened}
          onClick={toggle}
          style={{ zIndex: opened ? 901 : 0 }}
          className={classes.burger}
          size="sm"
          hiddenFrom="sm"
          color='#404C96'
        />
        {opened && (
          <Box className={classes.smMenu} hiddenFrom="sm">
            <div className={classes.headerInner}>
              <Link href={'/'} className={classes.headerLogo} onClick={toggle}>OTAKA SPACE</Link>
              <Flex>
                <Stack miw={'50%'}>
                  {mainLinks.map(link => (
                    <Link href={link.link} key={link.label} onClick={toggle}>
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Flex>
            </div>
          </Box>
        )}
      </Container>
    </header>
  );
}