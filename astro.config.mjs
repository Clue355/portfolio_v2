/* eslint-disable turbo/no-undeclared-env-vars */
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/* 
  We are doing some URL mumbo jumbo here to tell Astro what the URL of your website will be.
  In local development, your SEO meta tags will have localhost URL.
  In built production websites, your SEO meta tags should have your website URL.
  So we give our website URL here and the template will know what URL to use 
  for meta tags during build.
  If you don't know your website URL yet, don't worry about this
  and leave it empty or use localhost URL. It won't break anything.
*/

const SERVER_PORT = 4321;
// the url to access your blog during local development
const LOCALHOST_URL = `http://localhost:4321`;
// the url to access your blog after deploying it somewhere (Eg. Netlify)
const LIVE_URL = "https://carlosluevano.netlify.app/";

let BASE_URL = process.env.LOCALHOST_URL ? LOCALHOST_URL : LIVE_URL;

export default defineConfig({
    server: { port: SERVER_PORT },
    site: BASE_URL,
    integrations: [sitemap()],
});
