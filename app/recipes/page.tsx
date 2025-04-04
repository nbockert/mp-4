

import RecipeDetailPage from "@/app/recipes/RecipeDetail";

export default async function Page({ searchParams }: { searchParams: { id: string } }) {
    const param = await searchParams
    const id = await param.id
    return <RecipeDetailPage id={id} />;
}

