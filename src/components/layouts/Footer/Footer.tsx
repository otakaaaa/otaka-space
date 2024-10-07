'use client';

import { Anchor, Group, ActionIcon, rem, Center, Text, Image } from '@mantine/core';
import { IconBrandX, IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react';
import classes from './Footer.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Fragment } from 'react';

const links = [
  { link: '#contact', label: 'お問い合わせ' },
  { link: '/privacy', label: 'プライバシーポリシー' },
  { link: '/services', label: 'サービス' },
  { link: '/blog', label: 'ブログ' },
];

const social = [
  { Icon: IconBrandX, link: 'https://x.com/satoshi_otaka12' },
  { Icon: IconBrandGithub, link: 'https://github.com/htk-otaka' },
  { Icon: IconBrandInstagram, link: 'https://www.instagram.com/satoshi_otaka1203/?utm_source=web_redirect_test&ig_mid=24D3DC17-8086-4716-B7BC-C8194DB2195D&fall_back_to_web=true' }
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

  const icons = social.map((item, index) => (
    <Fragment key={index}>
      <Link href={item.link} target='_blank'>
        <ActionIcon size="lg" variant="default" radius="xl">
          <item.Icon style={{ width: rem(18), height: rem(18) }} color='#404C96' stroke={1.5} />
        </ActionIcon>
      </Link>
    </Fragment>
));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Link href='/'>
          <Image src='/common/otaka-space.gif' alt='otaka space' className={classes.logo} />
        </Link>

        <Group className={classes.links}>
          {items}
        </Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          {icons}
        </Group>
      </div>
      <Center pt={20} pb={40}>
        <Text fz={'12px'}>&copy; 2024 OTAKA SPACE. All rights reserved.</Text>
      </Center>
    </div>
  );
}