function ParticipantStatsBar() {
    return (
        <>
            <div className="d-flex flex-column">
                <div>
                    Participants this month <span className="fw-semibold ms-3">31</span>
                </div>
                <div className="progress" role="progressbar" style={{ height: '.3rem' }}>
                    <div className='progress-bar' style={{ width: '31%', backgroundColor: 'var(--primary)' }} />
                </div>
            </div>
        </>
    );
}

export default ParticipantStatsBar;