'use client';

import type { Recipe } from '@/app/types';
import RecipePreview from './RecipePreview';
import {Box, Typography} from '@mui/material';

type RecipesDisplayProps = {
    inputRecipes: Recipe[];
};

export default function RecipesDisplay({ inputRecipes }: RecipesDisplayProps) {
    if (inputRecipes.length === 0) {
        return (
            <Typography sx={{ fontWeight: 600, color: '#914F1E', textAlign: 'center', m:3 }}>
                No Recipes Found
            </Typography>
        );
    }
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '960px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 3,
                mx: 'auto',
                my: 4,
            }}
        >
            {inputRecipes.map((recipe, index) => (
                <RecipePreview key={index} recipe={recipe} />
            ))}
        </Box>
    );
}
