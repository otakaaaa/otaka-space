'use client';

import { Anchor, Group, ActionIcon, rem, Divider, Center, Text, Stack } from '@mantine/core';
import { IconBrandX, IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react';
import classes from './Footer.module.css';
import { useRouter } from 'next/navigation';

const links = [
  { link: '#contact', label: 'お問い合わせ' },
  { link: '#', label: 'プライバシーポリシー' },
  { link: '/services', label: 'サービス' },
  { link: '/blog', label: 'ブログ' },
];

export default function Footer() {
  const router = useRouter();

  const handleClick = (event: any, link: string) => {
    event.preventDefault();
    router.push(link);
  }

  const items = links.map((link) => (
    <Anchor
      c="#fff"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => handleClick(event, link.link)}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <div>OTAKA SPACE</div>
        {/* <MantineLogo size={28} /> */}

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandX style={{ width: rem(18), height: rem(18) }} color='#404C96' stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} color='#404C96' stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} color='#404C96' stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
      <Center py={10}>
        <Text fz={'12px'}>&copy; 2024 OTAKA SPACE. All rights reserved.</Text>
      </Center>
    </div>
  );
}