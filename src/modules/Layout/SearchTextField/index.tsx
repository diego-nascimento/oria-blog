'use client';
import React, { Suspense, useState } from 'react';
import {
  Box,
  IconButton,
  InputBase,
  ClickAwayListener,
  Stack,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter, useSearchParams } from 'next/navigation';

export const SearchTextField = () => {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
};

const Search = () => {
  const [expanded, setExpanded] = useState(false);
  const [search, setSearch] = React.useState('');
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get('q');
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setExpanded(false);
      setSearch('');
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search === '' || q === search) return;
    push('/busca' + `?q=${search}`);
    setSearch('');
  };

  return (
    <ClickAwayListener onClickAway={() => setExpanded(false)}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          width: expanded ? { xs: '100%', md: 300 } : 40,
          transition: 'width 0.3s ease-in-out',
          border: expanded ? '1px solid #ccc' : 'none',
          borderRadius: 1,
          padding: expanded ? '0 8px' : 0,
          backgroundColor: expanded ? '#f1f1f1' : 'transparent',
        }}
      >
        <Stack
          width={{
            xs: '100%',
            md: 300,
          }}
          component={'form'}
          onSubmit={handleSearch}
        >
          <Stack
            direction="row"
            width={'100%'}
            justifyContent={'space-between'}
          >
            {expanded && (
              <InputBase
                placeholder="Busca..."
                onKeyDown={handleKeyDown}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            )}
            <IconButton
              onClick={
                expanded ? undefined : () => setExpanded((prev) => !prev)
              }
              size="small"
              type={expanded ? 'submit' : 'button'}
            >
              <SearchIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </ClickAwayListener>
  );
};
