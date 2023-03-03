import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { StyledInputUpload, UploadBtn } from 'components/create-profile';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { UploadAvatar } from 'components/upload-avatar';
import { Typography } from '@mui/material';
import IcVerify from 'components/asset/icon/IcVerify';
import IcCopy from 'components/asset/icon/IcCopy';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import IcPeople from 'components/asset/icon/IcPeople';
import IcSex from 'components/asset/icon/IcSex';

const WrapperAreaInformation = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(270deg, rgba(234, 204, 248, 0.2) 0%, rgba(150, 224, 218, 0.2) 100%)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 30px rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(25px)',
    borderRadius: '15px',
    height: '100%',
    padding: '40px',
}));

const DATA_DEFAULT = [
    { titleName: '012jf5684464...dh6845eer2598', icon: <IcCopy /> },
    { titleName: 'Email', title: 'john_br.son@gmail.com', icon: <MailOutlineIcon color="inherit" /> },
    {
        titleName: 'Day of Birth',
        title: '20.05.1998',
        icon: <IcPeople />,
    },
    { titleName: 'Sex', title: 'john_br.son@gmail.com', icon: <IcSex /> },
];

export default function AreaInformation() {
    const onUploadAvatar = () => {};

    return (
        <WrapperAreaInformation>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                }}
            >
                <UploadAvatar avatarUrl="" percent={''} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Typography color={'#ffffff'} variant="h5" align="center">
                        GateKeeper
                    </Typography>
                    <IcVerify />
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {DATA_DEFAULT.map((el, i) => (
                    <Box sx={{ display: 'flex', gap: '8px', color: '#ffffff' }}>
                        <span>{el.icon}</span>
                        {el.titleName && (
                            <Typography color={'#ffffff'} component={'span'} variant="subtitle2" align="center">
                                {el.titleName}
                            </Typography>
                        )}

                        {el.title && (
                            <Typography
                                sx={{ fontWeight: 400 }}
                                color={'#ffffff'}
                                component={'span'}
                                variant="subtitle2"
                                align="center"
                            >
                                {el.title}
                            </Typography>
                        )}
                    </Box>
                ))}
            </Box>

            <Box sx={{ textAlign: 'center' }}>
                <UploadBtn variant="contained" startIcon={<CloudUploadOutlinedIcon />}>
                    <StyledInputUpload
                        type="file"
                        accept="image/jpeg,image/png,image/svg,image/gif"
                        multiple
                        onChange={onUploadAvatar}
                    />
                    Update profile
                </UploadBtn>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
                <Typography color={'#ffffff'} component={'span'} variant="subtitle2" align="center">
                    Last signed in 15th July 2021
                </Typography>
            </Box>
        </WrapperAreaInformation>
    );
}
