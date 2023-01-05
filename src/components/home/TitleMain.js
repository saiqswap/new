import { Box, Container, Grid, Typography } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import { ButtonTitleBox, TypographyGradient, ApplyButton, AppButton } from "./HomeStyles";

const Title = [
  'Unlimited bridge for multi-chain launchpad',
  'on more blockchains',
]
const SubTitle = [
  'Our vision is to remove all barriers, Build a decentralized technology for financial services,',
  'IDO and INO to be accessible to all global users.',
]


export default function TitleMain() {
  const isDesktop = useResponsive("up", "sm");
  const isMaxDesktop = useResponsive("up", "lg");
  const isTablet = useResponsive("down", "md");
  const isMobile = useResponsive("down", "sm");

  return (
    <Box
      sx={{
        background: "url('/images/background/bg-home.jpg')",
        backgroundSize: isDesktop ? "100% 100%" : "cover",
        backgroundPosition: 'center',
        minHeight: isTablet ? 'unset' : "110vh",
      }}
      pt={isDesktop ? 10 : 5}
      pb={isDesktop ? 6 : 3}
    >
      <Container maxWidth={'lg'}>
        <Grid container>
          <Grid item
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
            }}>
            <Box mt={isDesktop ? 5 : 10} textAlign={'center'}>
              {Title.map((item) => (
                <TypographyGradient key={item}
                  fontSize={isDesktop ? "2rem" : '1.5rem'}
                  fontFamily='SVN-Gilroy-semi-bold'
                >
                  {item}<br />
                </TypographyGradient>
              ))}

            </Box>
            <Box sx={{
              margin: "1rem 0"
            }}>
              {SubTitle.map((item) => (
                <Box key={item} component={'p'}
                  sx={{
                    color: 'white',
                    fontSize: isMobile && '14px',
                    textAlign: 'center',
                  }}>
                  {item}
                </Box>
              ))}
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
              mt={-4} >
              <img alt="gatekeeper" src="/images/home/gatekeeper-rotate.gif" width={'30%'} />
            </Box>
            <ButtonTitleBox>
              <AppButton>
                Launchpad App
              </AppButton>
              <ApplyButton>
                Apply for Launchpad
              </ApplyButton>
            </ButtonTitleBox>
            <Box mt={3}
              sx={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <Typography variant="body1" mr={2}> Powered by </Typography>
              <img alt="gatekeeper" src="/images/home/logo-gatechain.png" width={120} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box >
  );
}
