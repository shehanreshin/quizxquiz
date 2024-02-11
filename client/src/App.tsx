import Navbar from './components/general/navbar/Navbar';
import { BsSearch } from "react-icons/bs";
import SearchBar from './components/general/search-bar/SearchBar';

function App() {
  return (
    <>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Navbar />
          <div className='col pt-4'>
            <div className='d-flex justify-content-end'>
              <SearchBar />
              <div>Hello</div>
              <div>Hello</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;