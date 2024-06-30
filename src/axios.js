import axios from 'axios' // library to make request to a server across the internet

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3",
});
export default instance;
