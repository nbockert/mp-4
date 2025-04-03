"use client"
import { useState } from 'react';
import { Select, MenuItem, Button } from '@mui/material';

import styled from "styled-components";

const cuisineOptions = ["African", "Asian", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"];

const dishOptions = ["main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage", "sauce", "marinade", "fingerfood", "snack", "drink"];

const dietOptions = ["Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30"];



type FilterBarProps = {
    onSearchAction: (filters: { cuisine: string; diet: string; dish: string }) => void;
};
const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  max-width: 100%;
`;


export default function FilterBar({onSearchAction}: FilterBarProps) {

    const [cuisine, setCuisine] = useState('');
    const [dish, setDish] = useState('');
    const [diet, setDiet] = useState('');
    const handleSearch = () => {
        onSearchAction({ cuisine, diet, dish});
    };
    return (
        <FilterWrapper>
            <div className="flex-col">
                <Select
                    fullWidth
                    displayEmpty
                    value={cuisine}
                    sx={{backgroundColor: "#F7DCB9", color: "#914F1E"}}
                    onChange={(e) => setCuisine(e.target.value)}
                >
                    <MenuItem value="">Select Cuisine Type</MenuItem>
                    {cuisineOptions.map((option) => (
                        <MenuItem key={option} value={option.toLowerCase()}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </div>
            <div className="flex-col">
                <Select
                    fullWidth
                    displayEmpty
                    value={dish}
                    sx={{backgroundColor: "#F7DCB9", color: "#914F1E"}}
                    onChange={(e) => setDish(e.target.value)}
                >
                    <MenuItem value="">Select Dish Type</MenuItem>
                    {dishOptions.map((option) => (
                        <MenuItem key={option} value={option.toLowerCase()}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </div>
            <div>
                <Select
                    fullWidth
                    displayEmpty
                    value={diet}
                    sx={{backgroundColor: "#F7DCB9", color: "#914F1E"}}
                    onChange={(e) => setDiet(e.target.value)}
                >
                    <MenuItem value="">Add Dietary Restrictions (optional)</MenuItem>
                    {dietOptions.map((option) => (
                        <MenuItem key={option} value={option.toLowerCase()}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </div>
            <div>
                <Button
                    sx={{width:"80px",
                        backgroundColor:"#508D4E"
                }}
                    variant="contained"
                    type="submit"
                    onClick={handleSearch}>
                    Search
                </Button>
            </div>
        </FilterWrapper>
    );

}