'use client';
import type {WineProduct} from '@/app/types';
import {Box, Typography} from '@mui/material';

type WineDisplayProps = {
    inputWines: WineProduct[];
};
export default function WineDisplay({inputWines}: WineDisplayProps) {

    if (!inputWines) {
        return (
            <Typography sx={{ fontWeight: 600, color: '#914F1E', textAlign: 'center' }}>
                No Wines Found
            </Typography>
            );
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {inputWines.map((wine,index) => (
                <Box
                    key={index}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        backgroundColor: '#fef6ee',
                        borderRadius: 2,
                        p: 2,
                        boxShadow: 1,
                    }}
                >
                    <Box
                        component="img"
                        src={wine.imageUrl}
                        alt={wine.title}
                        sx={{ width: 50, height: 50, borderRadius: 1 }}
                    />
                    <Box>
                        <Typography sx={{ fontWeight: 600, color: '#914F1E' }}>
                            {wine.title} - {wine.price}
                        </Typography>
                        <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'gray' }}>
                            {wine.description}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}