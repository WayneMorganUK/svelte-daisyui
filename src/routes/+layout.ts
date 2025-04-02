import { browser } from '$app/environment';
import { theme } from '$lib/runes/localStorage.svelte.js';
import { daisyuiThemes } from '$lib/runes/daisyuiThemes.js';

export const load = async ({ data }) => {
    theme.value = data.theme
    if (browser) {

        const dataTheme = document.documentElement.getAttribute('data-theme') || ``
        if (daisyuiThemes.includes(dataTheme)) {
            theme.value = dataTheme;
        }
        return {
            theme: dataTheme
        }
    }
    return {
        theme: data.theme
    };
}

