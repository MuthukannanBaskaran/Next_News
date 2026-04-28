import React, { useState } from 'react'
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../navbar/Navbar';

export const Header = () => {
    const [search, setSearch] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/search", { state: search });
        setSearch("");
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h1>Next News</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <input className={styles.search}
                            placeholder='Search for a news'
                            type="text" id="input_search" value={search}
                            onChange={(e) => setSearch(e.target.value)} />
                        <button type='submit'>SEARCH</button>
                    </form>
                </div>
                <Navbar />
            </div>
        </>
    )
}
