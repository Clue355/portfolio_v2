// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Clue355";
export const SITE_DESCRIPTION = "Welcome to my blog where I write about my adventures in software development";
export const TWITTER_HANDLE = "@clue355";
export const LINKEDIN_PROFILE = "carlos-luevano";
export const MY_NAME = "Carlos";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
