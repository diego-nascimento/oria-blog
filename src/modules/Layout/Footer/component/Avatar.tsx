'use client';
import { Avatar as MuiAvatar, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

interface Props {
  src?: string;
}

export const Avatar = ({ children, src }: PropsWithChildren<Props>) => {
  const theme = useTheme();
  return (
    <MuiAvatar
      sx={{
        width: '170px',
        height: '170px',
        display: 'flex',

        [theme.breakpoints.down('md')]: {
          width: 130,
          height: 130,
        },
      }}
      src={src}
    >
      {children}
    </MuiAvatar>
  );
};
