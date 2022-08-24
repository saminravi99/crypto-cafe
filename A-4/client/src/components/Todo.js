import { faFloppyDisk, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import cancelImage from "../assets/images/cancel.png";
import deleteTodo from "../redux/todos/thunk/deleteTodo";
import updateColor from "../redux/todos/thunk/updateColor";
import updateStatus from "../redux/todos/thunk/updateStatus";
import updateTextThunk from "../redux/todos/thunk/updateTextThunk";
import toast from "react-hot-toast";

export default function Todo({ todo, completedTask }) {
  //Redux hook to dispatch actions
  const dispatch = useDispatch();

  //destructuring the todo object
  const { text, id, completed, color } = todo;

  // to focus the input field when the edit button is clicked
  const textInputRef = useRef(null);

  //to toggle between edit and display mode
  const [isEditing, setIsEditing] = useState(false);

  //to store the updated text
  const [textInput, setTextInput] = useState(text);

  //function to change the status of the todo asynchronously
  const handleStatusChange = (todoId) => {
    dispatch(updateStatus(todoId, completed));
    if (!completed) {
      toast("Good Job! You Have Completed The Task Succesfully", {
        icon: "👏",
      });
    } else {
      toast.error("Task Incomplete!");
    }
  };

  //toggle between color options asynchronously
  const handleColorChange = (todoId, color, completed) => {
    if (!completed) {
      dispatch(updateColor(todoId, color));
    }
    if (completed) {
      toast.error("You Can't Change The Priority Of A Completed Task!");
    }
    if (color === "red" && !completed) {
      toast.error("This Task Has The Highest Priority!");
    }
    if (color === "yellow" && !completed) {
      toast.success("This Task Has Medium Priority!");
    }
    if (color === "green" && !completed) {
      toast.success("This Task Has The Lowest Priority!");
    }
  };

  //to update the text of the todo asynchronously
  const handleUpdateText = (todoId) => {
    dispatch(updateTextThunk(todoId, textInput));
  };

  //function to edit the todo asynchronously
  const handleEditing = (id) => {
    //when edit mode is opened then if the user toggle edit button again then it will close the edit mode and also the text will be updated in display mode
    if (isEditing) {
      handleUpdateText(id);
      toast.success("Todo Updated Successfully");
      setIsEditing(false);
    }
    //when edit mode is closed then if the user toggle edit button the edit mode will open and input field will be focused so that the user can edit the text
    if (!isEditing) {
      return new Promise((resolve, reject) => {
        setIsEditing(true);
        resolve();
      }).then(() => {
        textInputRef.current.focus();
      });
    }
  };

  //function to delete the todo asynchronously
  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
    toast.error("Task Deleted Successfully");
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleStatusChange(id)}
          className="opacity-0 absolute rounded-full cursor-pointer"
        />
        {completed && (
          <svg
            className="fill-current w-3 h-3 text-green-500 pointer-events-none cursor-pointer"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      {isEditing ? (
        <label className="select-none flex-1">
          <input
            onBlur={() => isEditing && setIsEditing(false)}
            onChange={(e) => setTextInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEditing(id);
              }
            }}
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-1 pl-1 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="text"
            value={textInput}
            ref={textInputRef}
            name="text"
          />
        </label>
      ) : (
        <div className={`select-none flex-1 ${completed && "line-through"}`}>
          {textInput}
        </div>
      )}

      {!completedTask && (
        <div onClick={() => handleEditing(id)}>
          {isEditing ? (
            <FontAwesomeIcon icon={faFloppyDisk} />
          ) : (
            <FontAwesomeIcon icon={faPenToSquare} />
          )}
        </div>
      )}

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto ${
          !completed && "cursor-pointer hover:bg-green-500"
        }
         border-green-500 ${color === "green" && "bg-green-500"}`}
        onClick={() => handleColorChange(id, "green", completed)}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto ${
          !completed && "cursor-pointer hover:bg-yellow-500"
        } border-yellow-500 ${color === "yellow" && "bg-yellow-500"}`}
        onClick={() => handleColorChange(id, "yellow", completed)}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto ${
          !completed && "cursor-pointer hover:bg-red-500"
        } border-red-500 ${color === "red" && "bg-red-500"}`}
        onClick={() => handleColorChange(id, "red", completed)}
      ></div>

      <img
        src={cancelImage}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
}
