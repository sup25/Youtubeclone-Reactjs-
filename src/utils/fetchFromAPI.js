import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const options = {
//     params: {
//         maxResults: 50,
//     },
//     headers: {
//         'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//     },
// };


const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/captions',
    params: { part: 'snippet', videoId: 'M7FIvfx5J10' },
    headers: {
        'X-RapidAPI-Key': '335a2017e7msh490283778d0fe1ap1d2d2ejsnbe3a7cdd0b5a',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});



/* This is the function that allows to call the API, pass some dynamic url
and then call it from with any component in our application*/

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};



