import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api' ,
    params:{
        key: '506a778b2f834f299e739124e7445fe6'
    }
})