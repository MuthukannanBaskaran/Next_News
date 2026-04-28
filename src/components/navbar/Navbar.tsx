import React from 'react'
import styles from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <ul className={styles.topUl}>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <p>Categories</p>
                    <ul className={styles.bottomUl}>
                        <li onClick={() => navigate("/categories", { state: { categories: "business" } })}>Business</li>
                        <li onClick={() => navigate("/categories", { state: { categories: "general" } })}>General</li>
                        <li onClick={() => navigate("/categories", { state: { categories: "health" } })}>Health</li>
                        <li onClick={() => navigate("/categories", { state: { categories: "science" } })}>Science</li>
                        <li onClick={() => navigate("/categories", { state: { categories: "sports" } })}>Sports</li>
                    </ul>
                </li>
            </ul>
        </>
    )
}
