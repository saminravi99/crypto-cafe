import { useDispatch, useSelector } from "react-redux";
import { colorChanged} from "../redux/filters/actions";

export default function FooterIncompleteTask({ filterByIncomplete }) {
  // to get the todos filtering factors from the redux store
  const filters = useSelector((state) => state.filters);

  // redux hook to dispatch actions
  const dispatch = useDispatch();

  //destructuring the filters to get the color
  const { colors } = filters;

  // function to toggle the color
  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, "removed"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  };

  return (
    <div
      className={`mt-4 flex justify-between text-sm font-bold text-red-600
     `}
    >
      <p>
        {filterByIncomplete.length > 1
          ? `${filterByIncomplete.length} Tasks Left`
          : filterByIncomplete.length === 1
          ? `${filterByIncomplete.length} Task Left`
          : "No Tasks Left"}
      </p>
      <ul className="flex space-x-1 items-center text-xs">
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => handleColorChange("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleColorChange("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleColorChange("yellow")}
        ></li>
      </ul>
    </div>
  );
}
