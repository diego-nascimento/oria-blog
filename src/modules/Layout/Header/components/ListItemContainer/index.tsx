'use client';
import { ListItem } from '@mui/material';
import { PropsWithChildren } from 'react';

import Link from 'next/link';
import { useMobileDrawerState } from '@/stores/useMobileDrawerState';

interface Props {
  url: string;
}

export const ListItemContainer = ({
  children,
  url,
}: PropsWithChildren<Props>) => {
  const { toggle } = useMobileDrawerState();
  return (
    <ListItem disablePadding onClick={toggle} component={Link} href={url}>
      {children}
    </ListItem>
  );
};
