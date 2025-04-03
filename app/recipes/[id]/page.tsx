
import { Box, Typography,Link } from '@mui/material';
import IngredientDisplay from "@/app/recipes/[id]/IngredientDisplay";
import WineDisplay from "@/app/recipes/[id]/WinePairing";

export default async function RecipeDetailPage({ params }: { params: { id: string } }) {
    try{
        const res = await fetch(
            `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.API_KEY}&addWinePairing=true`,
            { next: { revalidate: 60 } }
        );
        if (res.status === 402) {
            throw new Error('API quota exceeded');
        }
        if (!res.ok) {
            throw new Error(`Failed to fetch recipe: ${res.statusText}`);
        }
        const recipe = await res.json();
        console.log(recipe);
        return (
            <>
            <Link href='/'>
                <Typography variant="h4" sx={{textAlign: 'left', mb: 4, fontSize: '1.25rem',color:'#508D4E',m:2,fontWeight: 300}}>Home</Typography>

            </Link>
            <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
                <Typography variant="h4" sx={{textAlign: 'center', mb: 4, color:'#914F1E', fontWeight: 600 }}>{recipe.title}</Typography>
                <Box
                    component="img"
                    src={recipe.image}
                    alt={recipe.title}
                    sx={{ width: '100%', borderRadius: 2, mb: 4 }}
                />
                <Typography variant="body1">
                    {recipe.summary?.replace(/<[^>]+>/g, '')}
                </Typography>
                <Typography variant="h4" sx={{textAlign: 'center', mb: 4, fontSize: '1.25rem', fontStyle:'italic',color:'#508D4E',m:2,fontWeight: 400}}>Ingredients</Typography>
               <IngredientDisplay inputIngredients={recipe.extendedIngredients} />
                <Typography variant="h4" sx={{textAlign: 'center', mb: 4, fontSize: '1.25rem', fontStyle:'italic',color:'#508D4E',m:2,fontWeight: 400}}>Directions</Typography>
                <Typography variant="body1">
                    {recipe.instructions?.replace(/<[^>]+>/g, '')}
                </Typography>
                <Typography variant="h4" sx={{textAlign: 'center', mb: 4, fontSize: '1.25rem', fontStyle:'italic',color:'#508D4E',m:2,fontWeight: 400}}>Wine Pairing</Typography>
                <WineDisplay inputWines={recipe.winePairing.productMatches} />



            </Box>
            </>
        );

    }catch(error: unknown){
        if (error instanceof Error) {
            return (
                <Box sx={{p: 4, maxWidth: 800, mx: 'auto', textAlign: 'center'}}>
                    <Typography variant="h5" color="error">
                        Oops! Something went wrong.
                    </Typography>
                    <Typography variant="body1">
                        {error.message === 'API quota exceeded'
                            ? 'You’ve exceeded the Spoonacular daily API limit. Try again later.'
                            : 'We couldn’t load the recipe details. Please check back soon.'}
                    </Typography>
                </Box>
            );
        }
        return (
            <Box>
                <Typography variant="body1">Something went wrong.</Typography>
            </Box>
        );

    }

}