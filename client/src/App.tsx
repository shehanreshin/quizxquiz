import Navbar from './components/general/navbar/Navbar';
import { BsSearch } from "react-icons/bs";
import SearchBar from './components/general/search-bar/SearchBar';
import ParticipantStatsBar from './components/general/participant-stats-bar/ParticipantStatsBar';
import ProfileButton from './components/general/profile-button/ProfileButton';

function App() {
  return (
    <>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Navbar />
          <div className='col pt-4'>
            <div className='d-flex justify-content-end'>
              <SearchBar style={{ marginRight: '3rem' }} />
              <ParticipantStatsBar style={{ marginRight: '1rem' }} />
              <ProfileButton style={{ marginRight: '1rem' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;