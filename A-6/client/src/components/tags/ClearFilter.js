import { useDispatch, useSelector } from "react-redux";
import { clearAllFilter } from "../../features/filter/filterSlice";

export default function ClearFilter() {
  const dispatch = useDispatch();
  const { tags: selectedTags, authorTag, search} = useSelector((state) => state.filter);

  const allCleared = selectedTags.length === 0 && authorTag === "" && search === "" ? true : false;

  const style = "bg-red-600 text-white px-4 py-1 rounded-full cursor-pointer"

  const handleClearFilter = () => {
    dispatch(clearAllFilter())
  };

  return (
    <div className={
        allCleared ? "hidden" : style
    }
     onClick={handleClearFilter}>
        Clear All Filter
    </div>
  );
}
