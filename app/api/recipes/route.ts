
"use server"
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const cuisine = searchParams.get('cuisineOptions') || '';
    const dish = searchParams.get('dishOptions') || '';
    const diet = searchParams.get('dietOptions') || '';


    const apiKey = process.env.API_KEY;

    try {
        let apiUrl = '';

        if (diet === '') {
            apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${cuisine}&type=${dish}`;
        } else {
            apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${cuisine}&diet=${diet}&type=${dish}`;
        }
        const response = await fetch(apiUrl);
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: `Failed to fetch data: ${error}` }, { status: 500 });
    }
}
