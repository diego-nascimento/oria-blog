import { articleTypes } from './article';

export type categoryTypes = {
  id: 14;
  documentId: string;
  titulo: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  descricao: string;
  tag: string;
  artigos: articleTypes[];
  slug: string;
};
