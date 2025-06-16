import { BlocksContent } from '@strapi/blocks-react-renderer';
import { categoryTypes } from './category';

export type articleTypes = {
  id: string;
  documentId: string;
  titulo: string;
  descricao: string;
  categorias: categoryTypes[];
  imagem: { url: string };
  updatedAt: string;
  conteudo: BlocksContent;
  slug: string;
};
