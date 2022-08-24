import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { allCompleted } from "../redux/todos/actions";
import addTodo from "../redux/todos/thunk/addTodo";
import toast from "react-hot-toast";

export default function Header() {
  //Redux hook to get the todos
  const todos = useSelector((state) => state.todos);
  //Redux hook to dispatch actions
  const dispatch = useDispatch();

  //to get the incomplete todos from the todos
  const filterByIncomplete = todos.filter((todo) => !todo?.completed);

  // local state for saving the todo text
  const [input, setInput] = useState("");

  //  handler for setting the todo text input onChange
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  //sumbit handler for adding the todo asynchronously
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    toast.success("Todo Added Successfully");
    setInput("");
  };

  // function to complete all the todos
  const completeHandler = () => {
    dispatch(allCompleted());
  };

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={submitHandler}
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handleInput}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-sm text-black-500">
        <li className="flex space-x-1 ">
          <img className="w-4 h-4" src={tickImage} alt="Inomplete" />
          <span className="font-bold  ">Incomplete Tasks </span>
        </li>
        {filterByIncomplete.length > 0 && (
          <li className="cursor-pointer" onClick={completeHandler}>
            Complete All Tasks
          </li>
        )}
      </ul>
    </div>
  );
}
