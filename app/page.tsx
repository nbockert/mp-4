'use client';

import { Box, Typography } from '@mui/material';
import RecipeSearchPage from './components/search/RecipeSearchPage';

export default function Home() {
    return (
        <Box
            component="main"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 5,
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#914F1E',
                }}
            >
                Forkast
            </Typography>

            <Typography
                variant="h6"
                sx={{
                    fontStyle: 'italic',
                    textAlign: 'center',
                    color: '#508D4E',
                }}
            >
                Your Personal Meal Predictor
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    fontStyle: 'italic',
                    fontSize: '1.25rem',
                    textAlign: 'center',
                    color: '#3F4F44',

                }}
            >
                Click on Search Results to See Recipe Details.
            </Typography>

            <RecipeSearchPage />
        </Box>
    );
}
