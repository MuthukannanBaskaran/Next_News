import styles from './Home.module.css'
import type { NewsArticle } from '../../type/types';
import { Slider } from '../../components/slider/Slider';
import { Spinner } from '../../components/spinner/Spinner';
import { NewsCard } from '../../components/newsCard/NewsCard';
import { ChangeTheme } from '../../components/theme/ChangeTheme';
import useNews from '../../hooks/useNews';

export const Home = () => {
    const { news, loading, theme } = useNews("", "us");
    const darkMode = theme.state.darkMode;

    const sliderNews: NewsArticle[] = news?.slice(0, 3);

    return (
        <>
            <ChangeTheme />
            <div className={styles.container} style={{ backgroundColor: darkMode ? "orange" : "white" }}>
                <div className={styles.slider}>
                    <Slider sliderNews={sliderNews} />
                </div>
                <div className={styles.news}>
                    {loading && <Spinner />}
                    {news?.map((item, index) => {
                        return <NewsCard key={index} {...item} />
                    })}
                </div>
            </div>
        </>
    )
}
