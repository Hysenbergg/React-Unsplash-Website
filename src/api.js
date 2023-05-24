import axios from 'axios';

const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID {Paste the access key you obtained from Unsplash here}',
        },
        params: {
            query: term,
        },
    });
    debugger;
    return response.data.results;
}

export default searchImages;