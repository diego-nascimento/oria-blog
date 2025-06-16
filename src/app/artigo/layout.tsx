import { Stack } from '@mui/material';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack
      width={'100%'}
      height={'100%'}
      alignItems={'center'}
      marginTop={4}
      paddingX={2}
    >
      <Stack width={'100%'} maxWidth={940}>
        {children}
      </Stack>
    </Stack>
  );
}
