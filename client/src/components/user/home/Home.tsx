import ParticipantStatsBar from "../../general/participant-stats-bar/ParticipantStatsBar";
import ProfileButton from "../../general/profile-button/ProfileButton";
import SearchBar from "../../general/search-bar/SearchBar";
import NewXButton from "./NewXButton/NewXButton";
import PresentationCard from "./PresentationCard/PresentationCard";

function Home() {
    return (
        <>
            <div className="w-100 h-100">
                <div className='d-flex justify-content-end' style={{ marginBottom: '3rem' }}>
                    <SearchBar style={{ marginRight: '3rem' }} />
                    <ParticipantStatsBar style={{ marginRight: '1.5rem' }} />
                    <ProfileButton style={{ marginRight: '1rem' }} />
                </div>
                <div className="fs-2 pt-4 mb-4">Welcome, Shehan Reshin</div>
                <div className="d-flex w-100" style={{ marginBottom: '4rem' }}>
                    <NewXButton text="New quiz" active={true} style={{ marginRight: '1rem' }} />
                    <NewXButton text="New presentation" />
                </div>
                <div className="fs-6 fw-medium mb-4">Recently viewed</div>
                <div className="row w-100">
                    <div className="col-4" style={{ height: '35vh' }}>
                        <PresentationCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;