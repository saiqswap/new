import { Box, Container, Grid, Typography } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import { ButtonTitleBox, FrameButton, TitleTypography, TextTypography, SectionBox } from "./HomeStyles";
import { Link } from "react-router-dom";


const Title = [
  <>Become <span>an early investor</span> </>,
  <>in the scalable Launchpad</>,
  <>to participate in <span>all Games</span>,</>,
  <><span>NFTs and Metaverse</span> in the world.</>
]
const SubTitle = [
  'Gatekeeper works with projects with a high probability of success',
  'with enhanced Due Diligence and Regulation.',
]


export default function Intro() {
  const isDesktop = useResponsive("up", "md");
  const isTablet = useResponsive("down", "md");
  const isMobile = useResponsive("down", "sm");

  return (
    <SectionBox
      sx={{
        backgroundImage: isDesktop ? "url('/images/background/homebg1.jpg')" : "url('/images/background/homebg1-mobile.jpg')",
        minHeight: '100vh',
        paddingTop: !isDesktop && 5
      }}

    >
      <Container maxWidth={'lg'}>
        <Grid container>
          <Grid item
            xs={12}
            md={8}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              zIndex: 1,
              '& .MuiBox-root': {
                justifyContent: isMobile && 'center',
                textAlign: isMobile && 'center'
              }
            }}>
            <Box mt={12}>
              {Title.map((item, i) => (
                <TitleTypography key={i}
                  variant="h1"
                >
                  {item}<br />
                </TitleTypography>
              ))}

            </Box>
            <Box sx={{
              margin: "1rem 0"
            }}>

              <TextTypography
                variant={'body1'}
                fontSize={isMobile && '0.9rem'}
                fontWeight='bold'
                maxWidth={500}>
                Gatekeeper works with projects with a high probability of success with enhanced Due Diligence and Regulation.

              </TextTypography>
            </Box>

            <ButtonTitleBox>
              <Link to={'/coming-soon'}>
                <FrameButton>
                  Buy Gatekeeper
                </FrameButton></Link>
              <Link to={'/coming-soon'}>
                <FrameButton>
                  Apply for Launchpad
                </FrameButton></Link>
              <Link to={'/whitepaper'}>
                <FrameButton>
                  Whitepaper
                </FrameButton>
              </Link>
            </ButtonTitleBox>

            <Box mt={2}
              sx={{
                color: 'white',
              }}>
              <Typography variant="body1" mr={2} fontSize={isMobile && '0.9rem'}> Backed by </Typography>
              <Box mt={1}
                sx={{
                  display: 'flex',
                  alignItems: 'center',

                }}>
                <img alt="gatekeeper" src="/images/home/gatechain.png" height={isMobile ? 40 : 60} />
                <img alt="gatekeeper" src="/images/home/gateio.png" height={isMobile ? 40 : 60} />
              </Box>
            </Box>
            <Box mt={2}
              sx={{
                color: 'white',
              }}>
              <Typography variant="body1" mr={2} fontSize={isMobile && '0.9rem'}> Featured by </Typography>
              <Box mt={1}
                sx={{
                  display: 'flex',
                  alignItems: 'center',

                }}>
                <img alt="gatekeeper" src="/images/home/feature1.png" height={isMobile ? 40 : 60} />
                <img alt="gatekeeper" src="/images/home/feature2.png" height={isMobile ? 40 : 60} />
              </Box>
            </Box>
          </Grid>
          <Grid item md={4}>
            {isMobile && <Box>
              <img alt="gatekeeper" src="/images/home/gatekeeper.png"
                style={{
                }} />
              <img alt="gatekeeper" src="/images/home/base.png"
                style={{
                  marginTop: '-2rem',
                }} />
            </Box>}

          </Grid>
        </Grid>
      </Container>
      <img alt="gatekeeper" src="/images/home/home-bg-coins.png"
        style={{
          position: 'absolute',
          width: '40%',
          right: 0,
          display: isTablet && 'none'
        }} />
      <img alt="gatekeeper" src="/images/home/home-coins.png"
        style={{
          position: 'absolute',
          width: '40%',
          right: 0,
          display: isTablet && 'none'
        }} />
      <img alt="gatekeeper" src="/images/home/base.png"
        style={{
          position: 'absolute',
          width: '40%',
          right: 0,
          top: '75%',
          display: isTablet && 'none'
        }} />

    </SectionBox >
  );
}