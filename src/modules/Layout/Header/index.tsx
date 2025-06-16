import { AppBar, Button, IconButton, Stack, Toolbar } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { SearchTextField } from '../SearchTextField';

import { categoryTypes } from '@/modules/types/category';
import React from 'react';
import { Category } from '../Category';
import Link from 'next/link';
import Image from 'next/image';

const items = [
  {
    text: 'Mães',
    url: process.env.NEXT_PUBLIC_MAIN_WEBSITE!,
  },

  {
    text: 'Blog',
    url: '/',
  },
];

export const Header = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_CMS_ENDPOINT + '/api/categorias',
    {
      cache: 'force-cache',
      next: {
        tags: ['categorias'],
      },
    },
  );
  const categorias = (await response.json()) as {
    data: categoryTypes[];
  };

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Stack
            flex={1}
            zIndex={1200}
            paddingY={{
              xs: 0,
              md: 1,
            }}
            alignItems={'center'}
          >
            <Stack width={'100%'} maxWidth={1200}>
              <Stack
                flex={1}
                direction={{
                  xs: 'row-reverse',
                  md: 'row',
                }}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Link href={process.env.NEXT_PUBLIC_MAIN_WEBSITE!}>
                  <Stack>
                    <Image
                      src={'/logo.png'}
                      width={130}
                      height={30}
                      alt="Ariane Miranda Logo"
                    />
                  </Stack>
                </Link>

                <Stack
                  sx={{
                    display: {
                      xs: 'block',
                      md: 'none',
                    },
                  }}
                >
                  <Stack>
                    <IconButton>
                      <Menu
                        sx={{
                          color: 'secondary.contrastText',
                        }}
                      />
                    </IconButton>
                  </Stack>
                </Stack>
                <Stack
                  component={'nav'}
                  sx={{
                    display: {
                      xs: 'none',
                      md: 'flex',
                    },
                  }}
                  direction={'row'}
                >
                  {items.map((item) => {
                    return (
                      <Stack key={item.url}>
                        <Link href={item.url} key={item.url}>
                          <Button
                            variant="text"
                            sx={{
                              fontSize: 16,
                              fontFamily: 'Bree Serif, serif',
                              fontWeight: 400,
                              color: 'primary.contrastText',
                            }}
                          >
                            {item.text}
                          </Button>
                        </Link>
                      </Stack>
                    );
                  })}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Stack alignItems={'center'} width={'100%'} paddingY={2} paddingX={2}>
        <Stack
          maxWidth={940}
          width={'100%'}
          direction={{ xs: 'column', md: 'row' }}
          gap={2}
        >
          <Stack width={'100%'} direction={'row'} gap={3} alignItems={'center'}>
            <Category text="Todas" link="/" />
            {categorias.data?.map((category) => {
              return (
                <Category
                  text={category.titulo}
                  link={`/categorias/${category.slug}`}
                  key={category.documentId}
                />
              );
            })}
          </Stack>
          <SearchTextField />
        </Stack>
      </Stack>
    </React.Fragment>
  );
};
