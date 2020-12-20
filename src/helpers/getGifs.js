

export const getGifs = async( category ) => {

    const url =  `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=k5KJI7OLWRTk5xlp26jNGpM8M3TyjsE3`;
    const resp = await fetch( url ); // await to the other instructions to be completed
    const {data} = await resp.json(); // fetch the json object from the url

    const gifs = data.map( img => { // run through the properties of the { data } prop from the json obj as img and access to each prop
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs; // returns a promise that resolves the image collection
}