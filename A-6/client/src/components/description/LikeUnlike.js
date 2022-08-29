import { useDispatch } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import {
  postVideoLike,
  postVideoUnlike,
} from "../../features/video/videoSlice";

export default function LikeUnlike({ likes, unlikes, id }) {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(postVideoLike({ id, likes }));
  };

  const handleUnlike = () => {
    dispatch(postVideoUnlike({ id, unlikes }));
  };

  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <img
            onClick={handleLike}
            className="w-5 block cursor-pointer"
            src={likeImage}
            alt="Like"
          />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likes ? likes : 0}
        </div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <img
            onClick={handleUnlike}
            className="w-5 block cursor-pointer"
            src={unlikeImage}
            alt="Unlike"
          />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {unlikes ? unlikes : 0}
        </div>
      </div>
    </div>
  );
}
