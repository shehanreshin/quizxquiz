import ParticipantStatsBar from "../../general/participant-stats-bar/ParticipantStatsBar";
import ProfileButton from "../../general/profile-button/ProfileButton";
import SearchBar from "../../general/search-bar/SearchBar";
import NewXButton from "./NewXButton/NewXButton";

function Home() {
    return (
        <>
            <div className="w-100 h-100">
                <div className='d-flex justify-content-end mb-4'>
                    <SearchBar style={{ marginRight: '3rem' }} />
                    <ParticipantStatsBar style={{ marginRight: '1.5rem' }} />
                    <ProfileButton style={{ marginRight: '1rem' }} />
                </div>
                <div className="fs-2 pt-4 mb-4">Welcome, Shehan Reshin</div>
                <div className="d-flex w-100">
                    <NewXButton text="New quiz" active={true} style={{ marginRight: '1rem' }} />
                    <NewXButton text="New presentation" />
                </div>
            </div>
        </>
    );
}

export default Home;