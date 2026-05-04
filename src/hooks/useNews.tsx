import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import type { NewsArticle } from "../type/types";

const useNews = (initialCategory = "", initialCountry = "us") => {
    const [news, setNews] = useState<NewsArticle[] | []>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>("");
    const [category, setCategory] = useState<string>(initialCategory);
    const [country, setCountry] = useState(initialCountry);

    const apiURL = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    const theme = useContext(ThemeContext);
    const url = `${apiURL}?country=us&category=${category}&apiKey=${apiKey}`;
    const filterUrl = `${apiURL}?country=${filter}&category=${category}&apiKey=${apiKey}`;

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        getNews(filterUrl);
        setFilter("");
    };

    const getNews = async (API: string) => {
        setLoading(true);
        try {
            const { data } = await axios(API);
            setNews(data.articles);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getNews(url);
    }, [url, theme.state.darkMode]);

    useEffect(() => {
        setCategory(initialCategory);
        setCountry(initialCountry);
    }, [initialCategory, initialCountry]);
    return {
        news,
        loading,
        filter,
        setFilter,
        setCountry,
        country,
        theme,
        category,
        setCategory,
        handleSubmit,
    };

};
export default useNews;