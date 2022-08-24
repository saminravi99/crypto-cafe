import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import CompleteTodoList from "./components/CompleteTodoList";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="grid place-items-center min-h-screen bg-blue-100  px-6 font-sans">
        <Navbar />

        <div className="w-full max-w-3xl mt-24 mb-12 shadow-lg rounded-lg p-6 bg-white">
          <Header />

          <hr className="mt-4" />

          <TodoList />

          <hr className="mt-4" />

          <CompleteTodoList />
        </div>
      </div>
      <Toaster />
    </Provider>
  );
}

export default App;
