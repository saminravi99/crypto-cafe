import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <SearchBar />
      <Blogs />
      <Modal/>
    </div>
  );
}

export default App;
