import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

export const register =async ({username, email, password})=> {
    try{
        const newUser = { username, email, password};
        const registered = await axios.post(`${API_BASE_URL}/api/register`, newUser);
        return registered.data.message;
        //alert("User Registered");
    }catch(err){
        return err;
    }
}


export const verify = async({verificationToken}) => {
    try{
        const url = `${API_BASE_URL}/api/verify/${verificationToken}`;
        const response = await axios.get(url);
        console.log(response);
        return response;
    }catch(err){
        return err;

    }
}


export const getNews = async (data) => {
    //get - news
    try{
        const url = `${API_BASE_URL}/api/get-news/data?country=in&category=${data.category}`;
        const response = await axios.get(url);
        console.log(response);
        return response?.data?.articles;
    }catch(err){
        return err;

    }
}
