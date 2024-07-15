
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { playPause, } from "../store";
import { RootState } from '../store';

const PlayPause = () => {
    const dispatch = useDispatch();
    const isPlaying = useSelector((state: RootState) => state.game.playing);

    return (
        <div>
            <button onClick={() => dispatch(playPause())}>
                {isPlaying ? "Pause" : "Reprendre"}
            </button>

        </div>
    );
};

export default PlayPause;
