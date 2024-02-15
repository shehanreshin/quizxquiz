import ParticipantStatsBar from "../../general/participant-stats-bar/ParticipantStatsBar";
import ProfileButton from "../../general/profile-button/ProfileButton";
import SearchBar from "../../general/search-bar/SearchBar";

function Home() {
    return (
        <>
            <div className="w-100 h-100">
                <div className='d-flex justify-content-end'>
                    <SearchBar style={{ marginRight: '3rem' }} />
                    <ParticipantStatsBar style={{ marginRight: '1.5rem' }} />
                    <ProfileButton style={{ marginRight: '1rem' }} />
                </div>
            </div>
        </>
    );
}

export default Home;