'use client';
import { useMobileDrawerState } from '@/stores/useMobileDrawerState';
import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const MenuButton = () => {
  const { toggle } = useMobileDrawerState();
  return (
    <IconButton>
      <Menu
        onClick={toggle}
        sx={{
          color: 'secondary.contrastText',
        }}
      />
    </IconButton>
  );
};
