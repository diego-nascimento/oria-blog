'use client';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { articleTypes } from '../types/article';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React from 'react';

interface Props {
  articles: articleTypes[];
  showLess: boolean;
}
export const CardsFeed = ({ articles, showLess }: Props) => {
  const [showMore, setShowMore] = React.useState(false);
  const amountToShow = 12;
  const articlesToRender =
    !showMore && showLess ? articles.slice(0, amountToShow) : articles;

  return (
    <Grid container spacing={2} width={'100%'} marginTop={2}>
      {articlesToRender?.reverse().map((article, index) => {
        return (
          <Grid
            key={article.id}
            size={{
              xs: 12,
            }}
          >
            <Card
              style={{
                display: 'flex',
              }}
              variant="elevation"
              elevation={0}
            >
              <CardActionArea
                LinkComponent={Link}
                href={`/artigo/${article.slug}`}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    '&:hover #card-image': {
                      transform: 'scale(1.05)',
                      transition: '.3s',
                    },

                    '&:not(hover) #card-image': {
                      transform: 'scale(1)',
                      transition: '.3s',
                    },
                    padding: 0,
                  }}
                >
                  <Stack
                    width={'100%'}
                    direction={{
                      xs: 'column',
                      md: 'row',
                    }}
                    gap={2}
                  >
                    {article.imagem && (
                      <Stack
                        width={'100%'}
                        maxWidth={{
                          xs: '100%',
                          md: 240,
                        }}
                        height={160}
                        overflow={'hidden'}
                        position={'relative'}
                      >
                        <Image
                          src={
                            process.env.NEXT_PUBLIC_CMS_ENDPOINT +
                            article.imagem.url
                          }
                          fill
                          id={'card-image'}
                          alt={article.titulo}
                          style={{ objectFit: 'cover' }}
                        />
                        <Stack
                          position={'absolute'}
                          bottom={10}
                          right={10}
                          direction={'row'}
                          gap={1}
                        >
                          {article.categorias?.map((category) => {
                            return (
                              <Chip
                                label={category.tag}
                                key={category.documentId}
                                variant="filled"
                                color="primary"
                                sx={{
                                  borderRadius: 1,
                                }}
                                size="small"
                              />
                            );
                          })}
                        </Stack>
                      </Stack>
                    )}

                    <Stack justifyContent={'space-between'}>
                      <Stack gap={1}>
                        <Typography
                          fontWeight={500}
                          fontSize={20}
                          textAlign={{
                            xs: 'center',
                            md: 'left',
                          }}
                        >
                          {article.titulo}
                        </Typography>
                        <Typography
                          fontWeight={400}
                          fontSize={14}
                          textAlign={{
                            xs: 'center',
                            md: 'left',
                          }}
                        >
                          {article.descricao}
                        </Typography>
                      </Stack>
                      <Typography fontSize={12} color="text.secondary">
                        Em{' '}
                        {format(
                          article.updatedAt,
                          "d 'de' MMMM 'de' yyyy 'às' HH:mm",
                          {
                            locale: ptBR,
                          },
                        )}
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
            {articlesToRender.length - 1 !== index && (
              <Divider sx={{ marginTop: 2 }} />
            )}
          </Grid>
        );
      })}
      {showLess && !showMore && amountToShow < articles.length && (
        <Stack width={'100%'} marginTop={2}>
          <Button onClick={() => setShowMore(true)}>Mostrar mais...</Button>
        </Stack>
      )}
    </Grid>
  );
};
