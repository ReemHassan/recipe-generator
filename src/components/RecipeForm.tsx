/** @format */

'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { SelectChangeEvent, TextField } from '@mui/material';
import SimpleSelect from './SimpleSelect';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

type RecipeFormData = {
    recipeName: string;
    category: string;
    diet: string;
    preference: string;
    duration: number;
    effort: string;
    includedProducts: string[];
    excludedProducts: string[];
    recipeTipps: string;
    nutritionData: string;
    photo: string;
};

interface RecipeFormProps {
    onSubmit: (recipeFormData: RecipeFormData) => void;
    initialRecipeName?: string;
    initialCategory?: string;
    initialDiet?: string;
    initialPreference?: string;
    initialDuration?: number;
    initialEffort?: string;
    initialIncludedProducts?: string[];
    initialExcludedProducts?: string[];
    initialRecipeTipps?: string;
    initialNutritionData?: string;
    initialPhoto?: string;
}

export default function RecipeForm({
    onSubmit,
    initialRecipeName = '',
    initialCategory = '',
    initialDiet = '',
    initialPreference = 'no_preference',
    initialDuration = 20,
    initialEffort = 'no_preference',
    initialIncludedProducts = [],
    initialExcludedProducts = [],
    initialRecipeTipps = 'yes',
    initialNutritionData = 'yes',
    initialPhoto = 'yes',
}: RecipeFormProps) {
    const [recipeName, setRecipeName] = useState<string>(initialRecipeName);
    const [category, setCategory] = useState<string>(initialCategory);
    const [diet, setDiet] = useState<string>(initialDiet);
    const [preference, setPreference] = useState<string>(initialPreference);
    const [duration, setDuration] = useState<number>(initialDuration);
    const [effort, setEffort] = useState<string>(initialEffort);
    const [includedProducts, setIncludedProducts] = useState<string[]>(
        initialIncludedProducts
    );
    const [excludedProducts, setExcludedProducts] = useState<string[]>(
        initialExcludedProducts
    );
    const [recipeTipps, setRecipeTipps] = useState<string>(initialRecipeTipps);
    const [nutritionData, setNutritionData] =
        useState<string>(initialNutritionData);
    const [photo, setPhoto] = useState<string>(initialPhoto);

    const handleRecipeNameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRecipeName((event.target as HTMLInputElement).value);
    };

    const handleCategoryChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };

    const handleDietChange = (event: SelectChangeEvent) => {
        setDiet(event.target.value as string);
    };

    const handlePreferenceChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPreference((event.target as HTMLInputElement).value);
    };

    const handleDurationChange = (
        event: Event,
        value: number | number[],
        activeThumb: number
    ) => {
        setDuration(value as number);
    };

    const handleEffortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEffort((event.target as HTMLInputElement).value);
    };

    const handleIncludedProductsChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setIncludedProducts(
            event.target.value.split(',').map((product) => product.trim())
        );
    };

    const handleExcludedProductsChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setExcludedProducts(
            event.target.value.split(',').map((product) => product.trim())
        );
    };

    const handleRecipeTippsChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRecipeTipps(event.target.checked ? 'yes' : 'no');
    };

    const handleNutritionDataChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNutritionData(event.target.checked ? 'yes' : 'no');
    };

    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoto((event.target as HTMLInputElement).value);
    };

    const handleFormSubmit = () => {
        const formData: RecipeFormData = {
            recipeName,
            category,
            diet,
            preference,
            duration,
            effort,
            includedProducts,
            excludedProducts,
            recipeTipps,
            nutritionData,
            photo,
        };

        console.log(formData);
        onSubmit(formData);
    };

    const marks = [
        { value: 0, label: '<15 Min' },
        { value: 20, label: '15 Min' },
        { value: 40, label: '30 Min' },
        { value: 60, label: '45 Min' },
        { value: 80, label: '60 Min' },
        { value: 100, label: '>60 Min' },
    ];

    return (
        <Stack spacing={4}>
            <FormControl>
                <FormLabel id="recipe-name-label">
                    Was möchtest Du heute kochen?
                </FormLabel>
                <TextField
                    id="recipe_name"
                    label="Rezept"
                    variant="filled"
                    value={recipeName}
                    onChange={handleRecipeNameChange}
                    sx={{ mt: 1 }}
                />
            </FormControl>
            <SimpleSelect
                id="category-select"
                label="Kategorie"
                value={category}
                onChange={handleCategoryChange}
                selectItems={[
                    { key: 'soup', value: 'Suppen & Eintöpfe' },
                    { key: 'pasta', value: 'Nudeln & Pasta' },
                    { key: 'grill', value: 'Grill & Burger' },
                    { key: 'fix', value: 'Fix oder Feritg' },
                    { key: 'everyday', value: 'Alltagsküche' },
                    { key: 'bake', value: 'Backen & Dessert' },
                    { key: 'brunch', value: 'Frühstuck & Brunch' },
                    { key: 'party', value: 'Fest- & Feiertage' },
                    { key: 'fingerfood', value: 'Party & Fingerfood' },
                    { key: 'salad', value: 'Salate & Bowls' },
                    { key: 'kids', value: 'Hits für Kids' },
                    { key: 'snack', value: 'Snack & unterwegs' },
                    { key: 'drinks', value: 'Drinks & Smoothies' },
                    {
                        key: 'influencer',
                        value: 'Influencer- & Foocreator-Rezepte',
                    },
                    { key: 'christmas', value: 'Weinachten' },
                    { key: 'easter', value: 'Ostern ' },
                    { key: 'veganuary', value: 'Veganuary' },
                    { key: 'haloween', value: 'Haloween' },
                    { key: 'superbowl', value: 'Superbowl' },
                    { key: 'karneval', value: 'Karneval' },
                    { key: 'fasting', value: 'Fastenzeit' },
                    { key: 'motherday', value: 'Muttertag' },
                    { key: 'fatherday', value: 'Vatertag' },
                    { key: 'oktoberfest', value: 'Oktoberfest' },
                    { key: 'nicolaus', value: 'Nikolaus' },
                    { key: 'nye', value: 'Silvester' },
                ]}
            />
            <SimpleSelect
                id="diet-select"
                label="Ernährung"
                value={diet}
                onChange={handleDietChange}
                selectItems={[
                    { key: 'vegetarian', value: 'vegetarisch' },
                    { key: 'vegan', value: 'Vegan' },
                    { key: 'lactosefree', value: 'laktosefrei' },
                    { key: 'glutenfree', value: 'glutenfrei' },
                    { key: 'fish', value: 'Fisch' },
                    { key: 'meat', value: 'Fleisch' },
                    { key: 'lowcarb', value: 'Lowcarb' },
                    { key: 'lowsugar', value: 'Wenig Zucker' },
                    { key: 'nopreference', value: 'Keine Präferenz' },
                ]}
            />
            <FormControl>
                <FormLabel id="preference-radio-buttons-group-label">
                    Preference
                </FormLabel>
                <RadioGroup
                    aria-labelledby="preference-radio-buttons-group-label"
                    name="preference-radio-buttons-group"
                    value={preference}
                    onChange={handlePreferenceChange}
                >
                    <FormControlLabel
                        value="savoury"
                        control={<Radio />}
                        label="herzhaft"
                    />
                    <FormControlLabel
                        value="sweet"
                        control={<Radio />}
                        label="süß"
                    />
                    <FormControlLabel
                        value="no_preference"
                        control={<Radio />}
                        label="keine Präferenz"
                    />
                </RadioGroup>
            </FormControl>
            <Box>
                <FormLabel id="duration-label">Duration</FormLabel>
                <Slider
                    aria-label="Custom marks"
                    defaultValue={20}
                    step={20}
                    valueLabelDisplay="off"
                    marks={marks}
                    value={duration}
                    onChange={handleDurationChange}
                />
            </Box>
            <FormControl>
                <FormLabel id="efforts-radio-buttons-group-label">
                    Effort
                </FormLabel>
                <RadioGroup
                    aria-labelledby="efforts-radio-buttons-group-label"
                    name="efforts-radio-buttons-group"
                    value={effort}
                    onChange={handleEffortChange}
                >
                    <FormControlLabel
                        value="low"
                        control={<Radio />}
                        label="gering"
                    />
                    <FormControlLabel
                        value="medium"
                        control={<Radio />}
                        label="mittel"
                    />
                    <FormControlLabel
                        value="high"
                        control={<Radio />}
                        label="hoch"
                    />
                    <FormControlLabel
                        value="no_preference"
                        control={<Radio />}
                        label="Keine Präferenz"
                    />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <TextField
                    id="included_products"
                    label="Enthaltene Produkte (optional)"
                    variant="filled"
                    value={includedProducts.join(', ')}
                    onChange={handleIncludedProductsChange}
                />
            </FormControl>
            <FormControl>
                <TextField
                    id="excluded_products"
                    label="Ausgeschlossene Produkte (optional)"
                    variant="filled"
                    value={excludedProducts.join(', ')}
                    onChange={handleExcludedProductsChange}
                />
            </FormControl>
            <Box>
                <Box>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={recipeTipps === 'yes'}
                                onChange={handleRecipeTippsChange}
                            />
                        }
                        label="Tipps für dieses Rezept anzeigen"
                    />
                </Box>
                <Box>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={nutritionData === 'yes'}
                                onChange={handleNutritionDataChange}
                            />
                        }
                        label="Nährwerte anzeigen"
                    />
                </Box>
            </Box>
            <FormControl>
                <FormLabel id="photos-radio-buttons-group-label">
                    Möchtest Du ein Rezeptphoto generieren?
                </FormLabel>
                <RadioGroup
                    aria-labelledby="photos-radio-buttons-group-label"
                    name="photos-radio-buttons-group"
                    value={photo}
                    onChange={handlePhotoChange}
                >
                    <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="ja"
                    />
                    <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="nein"
                    />
                </RadioGroup>
            </FormControl>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button
                    variant="contained"
                    size="large"
                    onClick={handleFormSubmit}
                >
                    Generate recipe
                </Button>
            </Box>
        </Stack>
    );
}
