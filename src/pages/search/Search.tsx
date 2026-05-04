import React, { useEffect, useState } from 'react'
import styles from './Search.module.css'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { NewsCard } from '../../components/newsCard/NewsCard';
import type { NewsArticle } from '../../type/types';

export const Search = () => {
    const { state } = useLocation();
    const [news, setNews] = useState<NewsArticle[] | []>([]);
    console.log(state);
    const apiURL = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `${apiURL}?q=${state}&apiKey=${apiKey}`;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(url);

                console.log('response.data', response.data);
                console.log('response.data.articles', response.data.articles);
                setNews(response.data.articles);
                console.log('news', news)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchNews();
    }, [url]);

    return (
        <>
            <div className={styles.searchPage}>
                <h1>
                    News About: <span>{state.toUpperCase()}</span>
                </h1>
                <div className={styles.searchNews}>
                    {!news && <h1>The search word didn't match.</h1>}
                    {
                        news.map((item, index) => {
                            return <NewsCard key={index} {...item} />;
                        })
                    }
                </div>
            </div>
        </>
    )
}
