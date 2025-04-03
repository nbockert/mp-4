'use client';

import { useState } from 'react';
import FilterBar from './Filter';
import RecipesDisplay from '../display/RecipeDisplay';
import type { Recipe } from '@/app/types';

export default function RecipeSearchPage() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    const handleSearch = async (filters: { cuisine: string;  diet: string; dish:string}) => {
        try {
            const res = await fetch(
                `/api/recipes?cuisineOptions=${filters.cuisine}&dietOptions=${filters.diet}&dishOptions=${filters.dish}`
            );

            const data = await res.json();
            setRecipes(data.results);
        } catch (err) {
            console.error('Error fetching recipes:', err);
        }
    };


    return (
        <div>
            <FilterBar onSearchAction={handleSearch} />
            <RecipesDisplay inputRecipes={recipes} />
        </div>
    );
}
