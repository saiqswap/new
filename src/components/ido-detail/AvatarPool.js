import { Box, Avatar } from '@mui/material';
export const AvatarPool = () => {
    return (
        <Box sx={{ width: 386, height: 386, flexShrink: 0 }}>
            <Avatar src="/ido/pool.png" variant="rounded" sx={{ width: '100%', height: '100%' }} />
        </Box>
    );
};
