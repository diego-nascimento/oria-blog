import { articleTypes } from '@/modules/types/article';
import { Chip, Stack, Typography } from '@mui/material';
import {
  BlocksRenderer,
  type BlocksContent,
} from '@strapi/blocks-react-renderer';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Image from 'next/image';

import { redirect } from 'next/navigation';

export async function generateStaticParams() {
  const artigos = await fetch(
    process.env.NEXT_PUBLIC_CMS_ENDPOINT + '/api/artigos',
  ).then((res) => res.json());

  return artigos.data.map((artigo: { documentId: string }) => ({
    slug: artigo.documentId,
  }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Artigos({ params }: Props) {
  const { id } = await params;

  const data = await fetch(
    process.env.NEXT_PUBLIC_CMS_ENDPOINT +
      `/api/artigos?filters[slug][$eq]=${id}&populate=*`,
  );

  if (!data.ok) return redirect('/404');

  const response = (await data.json()) as { data: articleTypes[] };
  const article = response.data[0];
  if (!article) return redirect('/404');

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
          md: 'start',
        }}
        fontWeight={600}
      >
        {article.titulo}
      </Typography>
      <Typography
        marginTop={1}
        fontSize={{
          xs: 16,
          md: 19,
        }}
      >
        {article.descricao}
      </Typography>
      <Stack position={'relative'} width={'100%'} marginTop={2}>
        <Image
          src={
            process.env.NEXT_PUBLIC_CMS_ENDPOINT +
            article.imagem.formats.large.url
          }
          alt={article.titulo}
          layout="responsive"
          width={940} // use actual image width
          height={800} // use actual image height
        />
        <Stack
          position={'absolute'}
          bottom={15}
          left={15}
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
                size="medium"
              />
            );
          })}
        </Stack>
      </Stack>
      <Typography fontSize={14}>
        Publicado em{' '}
        {format(article.updatedAt, "d 'de' MMMM 'de' yyyy 'às' HH:mm", {
          locale: ptBR,
        })}
      </Typography>

      {article.conteudo && (
        <BlocksRenderer content={article.conteudo as BlocksContent} />
      )}
    </Stack>
  );
}
