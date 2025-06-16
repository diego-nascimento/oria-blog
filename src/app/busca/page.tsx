import { Box, Chip, Divider, Grid, Stack } from '@mui/material';

import { CardsFeed } from '@/modules/CardsFeed';
import { articleTypes } from '@/modules/types/article';

interface dataTypes {
  data: articleTypes[];
}

interface Props {
  searchParams: Promise<{ q: string }>;
}

export default async function Busca({ searchParams }: Props) {
  const { q } = await searchParams;
  const response = await fetch(
    process.env.NEXT_PUBLIC_CMS_ENDPOINT +
      '/api/artigos?populate[categorias][populate]=*&populate[imagem][populate]=*',
    {
      cache: 'force-cache',
      next: {
        tags: ['artigos'],
      },
    },
  );

  const data = (await response.json()) as dataTypes;

  const articles = data.data;

  const filteredArticles = articles.filter((article) =>
    article.titulo.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <Stack width={'100%'}>
      <Box>
        <Chip
          label={'Termo de busca: ' + q}
          color="primary"
          sx={{ borderRadius: 0 }}
        />
        <Divider sx={{ borderBottomWidth: 4, bgcolor: 'primary.main' }} />
      </Box>
      <Grid container marginTop={2} spacing={2}>
        <Grid size={{ xs: 12 }}>
          <CardsFeed articles={filteredArticles ?? []} showLess={true} />
        </Grid>
      </Grid>
    </Stack>
  );
}
