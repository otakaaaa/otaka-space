'use client';

import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, useMantineTheme, rem } from '@mantine/core';
import classes from './CardsCarousel.module.css';
import '@mantine/carousel/styles.css';

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}

const data = [
  {
    image: '/top/nature.jpg',
    title: '海、山、花など自然に触れることが好きです。',
    category: '自然',
  },
  {
    image: '/top/clothes.jpg',
    title: '服が好きで、お気に入りのセレクトショップや古着など見に行きます。',
    category: '服',
  },
  {
    image: '/top/art.jpg',
    title: '詳しくないですが、観賞するのが好きです。',
    category: 'アート',
  },
  {
    image: '/top/eat.jpg',
    title: '美味しいものを食べることが大好きです。',
    category: '食',
  },
];

export default function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '100%' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      align="start"
      slidesToScroll={1}
    >
      {slides}
    </Carousel>
  );
}