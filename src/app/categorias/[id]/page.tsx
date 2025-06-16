import { CardsFeed } from '@/modules/CardsFeed';
import { Box, Chip, Divider, Stack, Typography } from '@mui/material';

import { redirect } from 'next/navigation';

export async function generateStaticParams() {
  const artigos = await fetch(
    process.env.NEXT_PUBLIC_CMS_ENDPOINT + '/api/categorias',
  ).then((res) => res.json());

  return artigos.data.map((artigo: { documentId: string }) => ({
    slug: artigo.documentId,
  }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Categoria({ params }: Props) {
  const { id } = await params;

  const data = await fetch(
    process.env.NEXT_PUBLIC_CMS_ENDPOINT +
      `/api/categorias?filters[slug][$eq]=${id}&populate[artigos][populate]=*`,
  );

  if (!data.ok) redirect('/404');

  const response = await data.json();
  const category = response.data[0] ?? [];

  return (
    <Stack>
      <Typography
        fontSize={{
          xs: 25,
          md: 38,
        }}
        lineHeight={1.2}
        textAlign={{
          xs: 'center',
        }}
        fontWeight={600}
      >
        {category.titulo}
      </Typography>
      <Typography
        marginTop={1}
        textAlign={'center'}
        fontSize={{
          xs: 16,
        }}
      >
        {category.descricao}
      </Typography>

      <Stack
        paddingX={{
          xs: 0,
          md: 14,
        }}
        marginTop={4}
      >
        <Box>
          <Chip
            label="Últimos Artigos"
            color="primary"
            sx={{ borderRadius: 0 }}
          />
          <Divider sx={{ borderBottomWidth: 4, bgcolor: 'primary.main' }} />
        </Box>
        <CardsFeed articles={category.artigos ?? []} showLess={true} />
      </Stack>
    </Stack>
  );
}
