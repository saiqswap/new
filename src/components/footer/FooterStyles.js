
import {
    Box,
    Button,
    Menu,
} from "@mui/material";
import { alpha, styled } from "@mui/system";

export const Footer = styled(Box)(({ theme }) => ({
    // backgroundColor: "linear-gradient(to right, #41B0A7 0%, #C583E4 50%, #8068EF 100%)",
    backgroundImage: "url('/images/background/footerbg.jpg')",
    backgroundSize: "100% 100%",
    backgroundPosition: 'center',

    padding: "4rem 0 0",
    color: 'white',
    "& a": {
        paddingBottom: '0.25rem'
    },
    "& a:hover": {
        borderBottom: "2px solid #00E5FF",
        fontWeight: 700,
    },
}));

export const UlCustom = styled(Box)(({ theme }) => ({
    color: "white",
    "& li": {
        listStyle: 'none',
        paddingBottom: '10px',
        fontSize: '0.9rem',

    },
    [theme.breakpoints.down("sm")]: {
        "& li": {
            fontSize: '0.8rem',

        },
    },
}));

export const FooterTitle = styled(Box)(({ theme }) => ({
    color: "white",
    fontSize: '1.25rem',
    paddingBottom: '0.75rem',
    fontFamily: "SVN-Gilroy-semi-bold",
    [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
    },
}));

export const SocialBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    "& img": {
        width: '90%',
    },
    "& a:hover": {
        borderBottom: '0px',
        "& img": {
            boxShadow: '0 0 10px white',
            borderRadius: '14px',
        }
    },
    [theme.breakpoints.down("md")]: {
        justifyContent: 'center',
    },
}));


export const EndBox = styled(Box)(() => ({
    color: "white",
    background: 'rgba(0,0,0,.5)',
    textAlign: 'center',
    padding: '1.5rem 1rem 1rem',
    marginTop: '3rem',
    "& p": {
        fontSize: '0.85rem',
        fontWeight: 500,
        fontFamily: "SVN-Gilroy-regular",
    },
}));



export const MenuCustom = styled(Menu)(() => ({
    "&.MuiPopover-root": {
        border: 'none',
    },
    "& .MuiPaper-root": {
        background: '#0a0a0a!important',
        boxShadow: "none",
        border: "1px solid #98cafe",
        color: "white",
    }
}));

export const WhitePaperButton = styled(Button)(() => ({
    color: "white",
    lineHeight: "1",
    marginRight: "2rem",
    background: 'transparent',
    fontFamily: "SVN-Gilroy-regular",
    fontSize: '1rem',
    fontWeight: 500,
    "&:hover": {
        borderBottom: "1px solid #00E5FF",
        borderRadius: '0px',
        color: "#00E5FF",
        background: 'transparent',
        fontWeight: 700,
    },
}));

export const GetIntoButton = styled(Button)(({ theme }) => ({
    color: "white",
    lineHeight: "1",
    background: alpha('#fff', 0.3),
    fontFamily: "SVN-Gilroy-regular",
    padding: '0.75rem 1.5rem',
    borderRadius: '20px',
    fontSize: '1rem',
    fontWeight: 500,
    border: "1px solid white",
    boxShadow: '0 0 10px 2px rgba(255,255,255,.5), inset 0 0 10px 2px rgba(255,255,255,.5)',
    "&:hover": {
        border: "1px solid #00E5FF",
        color: "#00E5FF",
        background: 'transparent',
        fontWeight: 700,
    },
    [theme.breakpoints.down("md")]: {
        justifyContent: 'center',
    },
}));