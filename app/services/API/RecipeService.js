import {APP_ID, APP_KEY} from "../config/secret";
import axios from 'axios';

export async function recipeSearch(ingredients) {
    try {
        const response = await axios.get('https://api.edamam.com/search?q=' + ingredients + '&app_id=' + APP_ID + '&app_key=' + APP_KEY);
        return response.data?.hits.slice(0, 50);
    } catch (error) {
        console.error(error);
    }
}