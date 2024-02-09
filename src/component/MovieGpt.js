import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addSuggestedMovies } from '../utils/movieGptSlice';
import openai from '../utils/openai';
import MovieList from './MovieList';

const MovieGpt = () => {
  const movieInputRef = useRef();
  const dispatch = useDispatch();
  const gptSuggesteMovies = useSelector(store => store.movieGpt?.suggestedMovies);

  const searchMovie = async (movieName)=>{
    const movie = await fetch("https://api.themoviedb.org/3/search/movie?query="+movieName+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await movie.json();
    console.log("movie->",json);
    return json.results;
  }

  const submitMovieInput = async ()=>{
    console.log(movieInputRef.current.value);
    const gptQuery = movieInputRef.current.value;
    const prompt = "You are a movie recommender system who gives the output of movie list on the given input" +gptQuery+ `. give only 5 movie name recommendation in the given example format, only give movie name comma separated, Example: sholay, golmaal, krish, fukrey, avenger `;
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'gpt-3.5-turbo',
    });
    console.log(chatCompletion.choices[0].message.content);
    const suggestedMovieList = chatCompletion.choices[0].message.content.split(",");
    console.log("sugg->",suggestedMovieList);
    const gptMovies =  suggestedMovieList.map(res=>{
        return searchMovie(res);
    });
    Promise.all(gptMovies).then(res=> {
        console.log(res);
        dispatch(addSuggestedMovies({suggestedMovieList : suggestedMovieList, suggestedMovies: res}))
    })
  }
  return (
    <div className="flex justify-center h-screen opacity-95 bg-black">
        <form className='p-4 m-2' onSubmit={(e)=> e.preventDefault()}>
            <input ref={movieInputRef} className='border-gray-900 rounded-lg p-4 m-2 w-96' placeholder='What do you like to see today'></input>
            <button onClick={submitMovieInput} className='bg-red-900 p-4 m-2 text-white rounded-lg '>Search</button>
        </form>
        {
            gptSuggesteMovies && gptSuggesteMovies.map((res, index)=> <MovieList key={index} movieTitle="Suggested Movies" movies={res} />)
        }
    </div>
  );
}

export default MovieGpt;