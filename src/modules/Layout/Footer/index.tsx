import { Email, Instagram, Public, Room, WhatsApp } from '@mui/icons-material';
import { Box, Divider, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { Avatar } from './component/Avatar';

export const Footer = () => {
  return (
    <Stack py={4} px={2} justifyContent={'center'} direction={'column'}>
      <Divider />
      <Stack alignItems={'center'}>
        <Stack width={'100%'} maxWidth={1200}>
          <Stack
            marginTop={4}
            direction={{
              xs: 'column',
              md: 'row',
            }}
            justifyContent={'space-between'}
            gap={4}
          >
            <Stack>
              <Stack direction={'row'} gap={2}>
                <Avatar src="/oria2.webp">AM</Avatar>
                <Stack justifyContent={'center'}>
                  <Typography
                    fontSize={26}
                    fontFamily={'Bree Serif, serif'}
                    fontWeight={400}
                  >
                    Ariane Miranda
                  </Typography>
                  <Typography
                    fontSize={{
                      xs: 16,
                      md: 18,
                    }}
                    color="#858881"
                    fontStyle={'italic'}
                  >
                    Psicóloga Perinatal e Parental
                  </Typography>
                  <Typography
                    fontSize={{
                      xs: 16,
                      md: 18,
                    }}
                    color="#858881"
                    fontStyle={'italic'}
                  >
                    CRP: 04/67556
                  </Typography>
                </Stack>
              </Stack>
              <Stack spacing={1.5}>
                <Typography
                  fontWeight={700}
                  fontSize={{
                    md: 32,
                    xs: 28,
                  }}
                  color={'#001f3f'}
                >
                  Fale comigo
                </Typography>
                <Stack gap={1}>
                  <Link
                    id="whatsapp"
                    href={'https://wa.me/message/WFTAHMJVVAHKI1'}
                    target="_blank"
                  >
                    <Stack direction={'row'} gap={2}>
                      <WhatsApp
                        sx={{
                          color: '#001f3f',
                        }}
                      />
                      <Typography color={'#001f3f'}>
                        +55 32 9 9965-8169
                      </Typography>
                    </Stack>
                  </Link>

                  <Link
                    href={'https://www.instagram.com/arianemirandapsi/'}
                    target="_blank"
                  >
                    <Stack direction={'row'} gap={2}>
                      <Instagram
                        sx={{
                          color: '#001f3f',
                        }}
                      />
                      <Typography color={'#001f3f'}>
                        @arianemirandapsi
                      </Typography>
                    </Stack>
                  </Link>

                  <Stack direction={'row'} gap={2}>
                    <Email
                      sx={{
                        color: '#001f3f',
                      }}
                    />
                    <Typography color={'#001f3f'}>
                      arianemirandapsicologa@gmail.com
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack>
              <Typography
                fontSize={{
                  md: 28,
                  xs: 24,
                }}
                fontWeight={600}
                textAlign={{
                  xs: 'left',
                  md: 'right',
                }}
              >
                Saúde mental pelo mundo
              </Typography>
              <Stack marginTop={2} spacing={4}>
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  gap={4}
                >
                  <Room
                    fontSize="large"
                    sx={{
                      display: {
                        xs: 'none',
                        md: 'block',
                      },
                    }}
                  />
                  <Stack>
                    <Typography
                      textAlign={'right'}
                      fontStyle={'italic'}
                      fontSize={18}
                    >
                      Av. Prefeito Corrado Roberti, 444, ​
                    </Typography>
                    <Typography
                      textAlign={{
                        xs: 'left',
                        md: 'right',
                      }}
                      fontStyle={'italic'}
                      fontSize={18}
                    >
                      ​centro, Tocantins-MG 36512-000.​​
                    </Typography>
                    <Typography
                      textAlign={{
                        xs: 'left',
                        md: 'right',
                      }}
                      component={'strong'}
                      fontSize={18}
                      color={'#001f3f'}
                    >
                      <Box
                        component={'strong'}
                        color={'#001f3f'}
                        fontStyle={'italic'}
                      >
                        Clinica Estetic Med​
                      </Box>{' '}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Public
                    fontSize="large"
                    sx={{
                      display: {
                        xs: 'none',
                        md: 'block',
                      },
                    }}
                  />
                  <Stack
                    sx={{
                      display: {
                        xs: 'block',
                        md: 'none',
                      },
                    }}
                  >
                    <Typography
                      textAlign={'center'}
                      fontStyle={'italic'}
                      alignItems={'center'}
                      fontSize={18}
                    >
                      Atendimento Online para{' '}
                      <Box component={'strong'} color={'#001f3f'}>
                        Brasileiras
                      </Box>{' '}
                      em qualquer ​lugar no{' '}
                      <Box component={'strong'} color={'#001f3f'}>
                        mundo
                      </Box>{' '}
                      .
                    </Typography>
                  </Stack>
                  <Stack
                    display={{
                      xs: 'none',
                      md: 'block',
                    }}
                  >
                    <Typography
                      textAlign={{
                        xs: 'left',
                        md: 'right',
                      }}
                      fontStyle={'italic'}
                      alignItems={'center'}
                      fontSize={18}
                    >
                      Atendimento Online para ​
                    </Typography>
                    <Typography
                      textAlign={{
                        xs: 'left',
                        md: 'right',
                      }}
                      fontStyle={'italic'}
                      fontSize={18}
                    >
                      <Box component={'strong'} color={'#001f3f'}>
                        Brasileiras
                      </Box>{' '}
                      em qualquer ​​​
                    </Typography>
                    <Typography
                      textAlign={{
                        xs: 'left',
                        md: 'right',
                      }}
                      fontStyle={'italic'}
                      fontSize={18}
                    >
                      lugar no{' '}
                      <Box component={'strong'} color={'#001f3f'}>
                        mundo
                      </Box>
                      .​
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack alignItems={'center'}>
            <Stack marginTop={8} maxWidth={750}>
              <Typography
                textAlign={'center'}
                bgcolor={'#fff'}
                fontWeight={600}
                fontSize={{
                  md: 16,
                  xs: 12,
                }}
              >
                Atenção: Se você estiver em crise, com ideação ou planejamento
                suicida, ligue para o Centro de ​Valorização da Vida - CVV
                (188). Em caso de emergência, procure o hospital mais próximo.
                Havendo ​risco de morte, ligue imediatamente para o SAMU (192),
                ou para o Corpo de Bombeiros (193).
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
