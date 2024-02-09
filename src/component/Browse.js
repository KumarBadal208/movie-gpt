import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import MovieGpt from "./MovieGpt";
import SecondaryContainer from "./SecondaryContainer";

const Browse = ()=>{
    useNowPlayingMovies();
    const openMovieGpt = useSelector(store=> store.movieGpt.openMovieGpt);
    return (
        <div className="w-screen bg-black h-800">
            <Header parentPage="browse"/>
            {
                openMovieGpt ? <MovieGpt/> : 
                    <>
                        <MainContainer/>
                        <SecondaryContainer/>
                    </>
            }
            
        </div>
    )
};

export default Browse;