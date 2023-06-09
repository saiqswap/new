import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { alpha, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AssetCard } from './AssetCard';
import { TierInformation } from './TierInformation';
import useResponsive from 'hooks/useResponsive';
import { TabContext, TabList } from '@mui/lab';
import { Color } from 'constant/styled';
import { TitleSection } from './TitleSection';

const CustomTabList = styled(TabList)(({ theme }) => ({
    transition: '1s',
    '& button': {
        padding: '1.75rem',
        zIndex: '1',
        textShadow: '0 0 10px rgb(255,255,255,0.7)',
        color: alpha('#fff', 0.5),
        fontWeight: 700,
        opacity: 1,
        fontSize: '1.25rem',
        '& span': {
            background: 'linear-gradient(0deg, #8CC0CC 0%, rgb(41,31,65,0) 20%);',
        },
    },
    '& .MuiTabs-flexContainer': {
        justifyContent: { md: 'center', xs: 'flex-start' },
        overflowX: { md: 'hidden', xs: 'auto' },
        '::-webkit-scrollbar': {
            display: 'none',
        },
    },
    '& button.Mui-selected': {
        color: alpha('#fff', 1),
        '& span': {
            background: 'linear-gradient(0deg, #8CC0CC 0%, rgb(90,111,134,0.5) 50%, transparent 100%);',
            zIndex: -1,
        },
    },
    '& .MuiTypography-body1': {
        fontSize: '0.95rem',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
    },
    '& .MuiTypography-body2': {
        fontSize: '0.8rem',
    },
    [theme.breakpoints.down('md')]: {
        '& button': {
            padding: '0.5rem 1rem',
        },

        '& .MuiTabs-scrollButtons': {
            color: Color.primary,
        },
        '& .MuiTabs-scrollButtons.Mui-disabled ': {
            opacity: '0.3',
        },
    },
}));
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const isDesktop = useResponsive('up', 'md');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <CustomTabList
                        onChange={handleChange}
                        indicatorColor="none"
                        variant={isDesktop ? 'fullWidth' : 'scrollable'}
                        scrollButtons="auto"
                    >
                        <Tab label="OVERVIEW" {...a11yProps(0)} />
                        <Tab label="MY STAKING" {...a11yProps(1)} />
                    </CustomTabList>
                </Box>
                <TabPanel value={value} index={0}>
                    <TitleSection title="MY WALLETS BALANCES" />
                    <Stack direction="row" justifyContent="space-between" sx={{ marginBottom: 4, flexWrap: 'wrap' }}>
                        <AssetCard balance={'0'} currency="$XUI" />
                        <AssetCard balance={'0'} currency="USDT" />
                        <AssetCard balance={'0'} currency="SUI" />
                    </Stack>

                    <TitleSection title="TIER INFORMATION" />
                    <TierInformation
                        tierMedal="/images/sui-tier/tier5.png"
                        level="TIER 5"
                        idoApp="2% of Total Pool"
                    />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Stack>
                        <TitleSection title="COMING SOON" />
                    </Stack>
                </TabPanel>
            </TabContext>
        </Box>
    );
}
