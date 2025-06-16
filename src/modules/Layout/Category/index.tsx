'use client';
import Link from 'next/link';

import { Typography } from '@mui/material';
import { usePathname } from 'next/navigation';

interface Props {
  link: string;
  text: string;
}

export const Category = ({ link, text }: Props) => {
  const pathname = usePathname();

  return (
    <Link href={link}>
      <Typography fontWeight={pathname === link ? 600 : 400} fontSize={16}>
        {text}
      </Typography>
    </Link>
  );
};
