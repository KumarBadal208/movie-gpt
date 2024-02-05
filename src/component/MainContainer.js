import {useSelector} from "react-redux";
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovie);
  if(!movies) return;
  const mainMovie = movies[0];
  const {original_title, overview, id} = mainMovie;
  console.log(mainMovie);
  return (
    <div className="w-screen bg-slate-900">
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;