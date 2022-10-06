export const search = async (query) => {

    const apiUrl = `https://api.artic.edu/api/v1/artworks/search?q=${query}`;
    const res = await fetch(apiUrl);
    if(!res.ok) {
        throw new Error(`error loading results (${res.status})`)
    }

    return res.json();

}