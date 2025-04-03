export type SpoonacularResponse = {
    results: Recipe[];
};

export type Recipe = {
    id: number;
    title: string;
    image: string;
};

export type ExtendedIngredient = {
    id: number;
    name: string;
    amount: number;
    unit: string;
    original: string;
    consistency: string;
    image: string;
    meta: string[];
    measures: {
        metric: Measure;
        us: Measure;
    };
};

export type Measure = {
    amount: number;
    unitShort: string;
    unitLong: string;
};

export type WinePairing = {
    pairedWines: string[];
    pairingText: string;
    productMatches: WineProduct[];
};

export type WineProduct = {
    id: number;
    title: string;
    description: string;
    price: string;
    imageUrl: string;
    averageRating: number;
    ratingCount: number;
    score: number;
    link: string;
};