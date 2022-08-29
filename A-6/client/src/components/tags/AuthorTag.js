import { useDispatch } from "react-redux";
import {
  clearAllFilter,
} from "../../features/filter/filterSlice";

export default function AuthorTag({ authorTag }) {
  const dispatch = useDispatch();

  const handleClearAuthor = () => {
    dispatch(clearAllFilter());
  };

  return (
    <div
      className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
      onClick={handleClearAuthor}
    >
      {authorTag}
    </div>
  );
}
