'use client';
import type {ExtendedIngredient} from '@/app/types';
import {Box, Typography} from '@mui/material';

type IngredientDisplayProps = {
    inputIngredients: ExtendedIngredient[];
};
export default function IngredientDisplay({inputIngredients}: IngredientDisplayProps) {

    return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {inputIngredients.map((ingredient,index) => (
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
                    src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                    alt={ingredient.name}
                    sx={{ width: 50, height: 50, borderRadius: 1 }}
                />
                <Box>
                    <Typography sx={{ fontWeight: 600, color: '#914F1E' }}>
                        {ingredient.original}
                    </Typography>
                    <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'gray' }}>
                        {ingredient.measures.us.amount} {ingredient.measures.us.unitShort} (US) / {ingredient.measures.metric.amount} {ingredient.measures.metric.unitShort} (Metric)
                    </Typography>
                </Box>
            </Box>
        ))}
    </Box>
)
}