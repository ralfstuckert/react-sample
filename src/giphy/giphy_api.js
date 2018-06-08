import axios from 'axios';

/**
 * Do not use for production, see https://giphy.api-docs.io/1.0/welcome/access-and-api-keys
 */
const PUBLIC_BETA_API_KEY = 'dc6zaTOxFJmzC';

const GIPHY_SEARCH = 'http://api.giphy.com/v1/gifs/search';

const giphyUrl = (term) => `${GIPHY_SEARCH}?q=${term}&limit=7&api_key=${PUBLIC_BETA_API_KEY}`;

export const giphySearch = (term) => axios.get(giphyUrl(term)).then((result) => result.data.data );
