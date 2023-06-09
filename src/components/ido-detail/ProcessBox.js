import { Box, LinearProgress, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';

const StyledProcessBox = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(178.73deg, rgba(104, 229, 184, 0.2) 0%, rgba(109, 133, 218, 0.2) 100%)',
    padding: 40,
    color: 'white',
    borderRadius: 10,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 30px rgba(255, 255, 255, 0.25)',
    position: 'relative',
}));

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
    background: 'linear-gradient(178.73deg, rgba(0, 197, 211, 1) 0%, rgba(66, 238, 207, 1) 100%)',
    borderRadius: 32,
    height: 32,
    boxShadow: 'rgba(152, 255, 230, 0.7)',
}));

const StyledExchangeRate = styled(Box)(({ theme }) => ({
    position: 'absolute',
    background:
        'linear-gradient(178.73deg, rgba(32, 123, 191, 1) 2.08%, rgba(74, 148, 203, 1)  32.81%, rgba(92, 186, 242, 1) 100%)',
    color: 'white',
    fontSize: 20,
    borderRadius: 10,
    padding: '7px 18px',
    fontWeight: 'bold',
    top: -16,
    right: 16,
}));

export const ProcessBox = () => {
    return (
        <StyledProcessBox>
            <StyledExchangeRate>1 BNB = 0,017 ATK</StyledExchangeRate>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
                <Typography sx={{ fontSize: 16, lineHeight: '24px', color: 'white' }}>Process</Typography>
                <Typography sx={{ fontSize: 16, lineHeight: '24px', color: 'white' }}>
                    Max Participants: 4527
                </Typography>
            </Box>

            <StyledLinearProgress variant="determinate" component="p"/>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 1 }}>
                <Typography sx={{ fontSize: 16, lineHeight: '24px', color: 'white' }}>100.00%</Typography>
                <Typography sx={{ fontSize: 16, lineHeight: '24px', color: 'white' }}>
                    9499897.78/9500000 ATK
                </Typography>
            </Box>
        </StyledProcessBox>
    );
};
