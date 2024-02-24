import Navbar from './components/general/navbar/Navbar';
import Home from './components/user/home/Home';

function App() {
  return (
    <>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Navbar />
          <div className='col pt-4'>
            <Home />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;