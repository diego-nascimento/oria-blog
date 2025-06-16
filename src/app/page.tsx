import { Box, Chip, Divider, Grid, Stack } from '@mui/material';

import { CardsFeed } from '@/modules/CardsFeed';
import { articleTypes } from '@/modules/types/article';
import { Metadata } from 'next';

const getArticles = async () => {
  return await fetch(
    process.env.NEXT_PUBLIC_CMS_ENDPOINT +
      '/api/artigos?populate[categorias][populate]=*&populate[imagem][populate]=*',
    {
      cache: 'force-cache',
      next: {
        tags: ['artigos'],
      },
    },
  );
};

export const metadata: Metadata = {
  title: 'Blog - Psicóloga Ariane Miranda  ',
  description: 'Blog da psicologa Ariane Miranda',
  icons: '/favicon.ico',
};

export default async function Home() {
  const response = await getArticles();

  const data = (await response.json()) as { data: articleTypes[] };

  return (
    <Stack width={'100%'}>
      <Box>
        <Chip
          label="Últimos Artigos"
          color="primary"
          sx={{ borderRadius: 0 }}
        />
        <Divider sx={{ borderBottomWidth: 4, bgcolor: 'primary.main' }} />
      </Box>

      <Grid container marginTop={2} spacing={2}>
        <Grid size={{ xs: 12 }}>
          <CardsFeed articles={data.data ?? []} showLess={true} />
        </Grid>
      </Grid>
    </Stack>
  );
}
