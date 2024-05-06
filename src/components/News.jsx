import React, { useEffect, useState } from 'react';
import './News.css';

import NewsList from './NewsList';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { getNews } from '../api-component/Api';



const News = () => {
    const location = useLocation();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getData(location.pathname);
    }, [location.pathname])

    const modifyData = (data) => {
        const chunkedArray = [];
        for (let i = 0; i < data.length; i += 2) {
            chunkedArray.push(data.slice(i, i + 2));
          }
          
          console.log(chunkedArray);
          return chunkedArray;
    }

    const getData = async () => {
        const path = location?.pathname?.split("/")[2];
        const data = await getNews({ category: path.toLowerCase(), country: "IN" });
    
        setData(modifyData(data));
        navigate(location.pathname)
    }

    return (
        <>
            <div className='content'>
                <NewsList data={data} />
            </div>
        </>


    )

}

export default News;