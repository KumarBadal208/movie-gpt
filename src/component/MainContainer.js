import {useSelector} from "react-redux";
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovie);
  if(!movies) return;
  const mainMovie = movies[0];
  const {original_title, overview} = mainMovie;
  console.log(mainMovie);
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground/>
    </div>
  )
}

export default MainContainer;