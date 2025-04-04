

import RecipeDetailPage from "@/app/recipes/RecipeDetail";

export default async function Page(props: { searchParams: Promise<{ id: string }>} ) {
    const { id } = await props.searchParams;
    return <RecipeDetailPage id={id} />;
}

