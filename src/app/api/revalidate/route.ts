import { NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

interface dataProps {
  model: string;
  entry: {
    slug: number;
  };
}

export async function POST(request: Request) {
  try {
    const authorization = request.headers.get('authorization');

    if (authorization !== process.env.AUTHENTICATION_KEY) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const data = (await request.json()) as dataProps;

    switch (data.model) {
      case 'categoria': {
        revalidateTag('categorias');
        revalidatePath('/categorias');
        revalidatePath('/categorias/' + data.entry.slug);
        return NextResponse.json({
          revaldocumentIdated: true,
          now: new Date().toISOString(),
        });
      }
      case 'artigo': {
        revalidateTag('artigos');
        revalidatePath(`/artigo/${data.entry.slug}`);
        return NextResponse.json({
          revalidated: true,
          now: new Date().toISOString(),
        });
      }
    }

    return NextResponse.json({
      revalidated: false,
      now: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating', error: err },
      { status: 500 },
    );
  }
}
