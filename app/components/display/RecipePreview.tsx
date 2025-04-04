'use client';


import type { Recipe } from '@/app/types.ts';
import { useRouter } from 'next/navigation';

import {
    Card,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material';

type RecipeCardProps = {
    recipe: Recipe;
};

export default function RecipePreview({ recipe }: RecipeCardProps) {
    const router = useRouter();




    return (
        <Card sx={{ maxWidth: 600, width: '100%', mx: 'auto',cursor: 'pointer' }}   onClick={() => router.push(`/recipes?id=${recipe.id}`)}>
            <CardMedia component="img" height="200" image={recipe.image} alt={recipe.title} />
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: '#F7DCB9',
                    color: '#914F1E',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{ color: '#914F1E', fontWeight: 600 }}
                >
                    {recipe.title}
                </Typography>


            </CardContent>
        </Card>
    );
}
