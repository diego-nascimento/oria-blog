import { CardsFeed } from '@/modules/CardsFeed';
import { categoryTypes } from '@/modules/types/category';
import { Box, Chip, Divider, Stack, Typography } from '@mui/material';

import { redirect } from 'next/navigation';

const getCategories = async ({ params }: Props) => {
  const { id } = await params;
  return await fetch(
    process.env.NEXT_PUBLIC_CMS_ENDPOINT +
      `/api/categorias?filters[slug][$eq]=${id}&populate[artigos][populate]=*`,
  );
};

export async function generateStaticParams() {
  const artigos = await fetch(
    process.env.NEXT_PUBLIC_CMS_ENDPOINT + '/api/categorias',
  ).then((res) => res.json());

  return artigos.data.map((artigo: { documentId: string }) => ({
    slug: artigo.documentId,
  }));
}

export async function generateMetadata({ params }: Props) {
  const data = await getCategories({ params });
  const categories = (await data.json()) as { data: categoryTypes[] };
  const category = categories.data[0];

  if (!!!category) return {};
  return {
    title: category.titulo + ' | Blog - Psicóloga Ariane Miranda',
    description: category.descricao,
  };
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Categoria({ params }: Props) {
  const data = await getCategories({ params });

  if (!data.ok) redirect('/404');

  const response = (await data.json()) as { data: categoryTypes[] };
  const category = response.data[0];

  if (!!!category) return redirect('/404');

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
        <CardsFeed
          articles={category.artigos.reverse() ?? []}
          showLess={true}
        />
      </Stack>
    </Stack>
  );
}
