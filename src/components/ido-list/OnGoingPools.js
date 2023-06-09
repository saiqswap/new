import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { ImgTitleBox, TitleBox, TypographyGradient } from 'components/home-v2/HomeStyles';
import useResponsive from 'hooks/useResponsive';
const img = '/images/pools/pools-4.jpg';
const imgComing = '/images/comingsoon/coming-1.png';

export default function OnGoingPools() {
    const isMobile = useResponsive('down', 'sm')
    const isDesktop = useResponsive('up', 'md')
    return (
        <Box mb={20} mt={10} position="relative">
            {/* <Link to="/"> */}
            <ImgTitleBox component={'img'} src="/images/home/shape.png" alt="" />
            <TitleBox>
                <Typography>On-going</Typography>
                <TypographyGradient>Pools</TypographyGradient>
            </TitleBox>
            <Box
                sx={{
                    background:
                        'linear-gradient(128.67deg, rgba(104, 230, 184, 0.2) 10.81%, rgba(109, 133, 218, 0.2) 75.48%)',
                    boxShadow: 'inset 0px 0px 20px rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(25px)',
                    borderRadius: isMobile ? '20px' : '50px',
                    p: 4,
                    mt: 5,
                    '&:hover': {
                        background:
                            'linear-gradient(128.67deg, rgba(104, 230, 184, 0.5) 10.81%, rgba(109, 133, 218, 0.5) 75.48%)',
                    },
                }}
            >
                <Grid container alignItems={'center'} spacing={5}>
                    <Grid item md={3} xs={12} sx={{ position: 'relative' }}>
                        <img
                            src={img}
                            style={{ borderRadius: '10px', width: '100%', height: '100%', }}
                            alt=""
                        />
                        {/* <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 4,
                                    right: 4,
                                    padding: '4px 16px ',
                                    borderRadius: '9px',
                                    background:
                                        'linear-gradient(255.34deg, #207BBF 21.95%, #4A94CB 48.78%, #5CBAF2 79.27%)',
                                }}
                            >
                                <TextTypography variant="body1" fontSize={'0.9rem'}>
                                    Coming Soon
                                </TextTypography>
                            </Box> */}
                    </Grid>
                    <Grid item md={9} xs={12}>
                        <Stack justifyContent={'center'} alignItems={'center'}>
                            <img
                                src={imgComing}
                                style={{ borderRadius: '10px', width: 'min(70%,600px)' }}
                                alt=""
                            />
                        </Stack>
                        {/* <Typography variant="h5">Coming soon</Typography>
                        <Typography></Typography>
                        <Box
                            sx={{
                                background:
                                    'linear-gradient(302.19deg, rgba(67, 38, 137, 0.3) 19.32%, rgba(16, 67, 96, 0.3) 80.68%);',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                borderRadius: '15px',
                                p: 2,
                                mt: 2,
                            }}
                        >
                            <Grid container justifyContent="space-between" alignItems={'center'}>
                                <Grid item xs={8}>
                                    <Stack direction="row" justifyContent={'space-between'}>
                                        <Typography>Min Allocation</Typography>
                                        <Typography>--</Typography>
                                    </Stack>
                                    <Stack direction="row" justifyContent={'space-between'} my={2}>
                                        <Typography>Max</Typography>
                                        <Typography>--</Typography>
                                    </Stack>
                                    <Stack direction="row" justifyContent={'space-between'}>
                                        <Typography>Access</Typography>
                                        <Typography>--</Typography>
                                    </Stack>
                                </Grid>
                                <Divider flexItem orientation="vertical" />
                                <Grid item xs={3}>
                                    <Button
                                        sx={{
                                            background:
                                                'linear-gradient(255.34deg, #207BBF 21.95%, #4A94CB 39.94%, #5CBAF2 79.27%)',
                                            borderRadius: '50px',
                                            color: 'white',
                                        }}
                                        fullWidth
                                    >
                                        Coming soon
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>*/}
                    </Grid>
                </Grid>
            </Box>
            {/* </Link> */}
        </Box>
    );
}
