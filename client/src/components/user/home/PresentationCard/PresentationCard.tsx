export default function PresentationCard() {
    return (
        <>
            <div className="border border-2 w-100 h-100 rounded-2 p-2" style={{ borderColor: 'var(--dark-light)' }}>
                <div className="d-flex justify-content-end">
                    <img className="img mb-2" src="/img/general/logo.svg" style={{ width: '15%' }} />
                </div>
                <div className="fw-medium fs-6">Which one of these characters does not have conqueror's haki?</div>
                <div>

                </div>
                <div className="d-flex justify-content-between">
                    <div>
                        <div className="fw-medium">Untitled presentation</div>
                        <div>Edited Jan 3, 2024</div>
                    </div>
                    <div>
                        Hello
                    </div>
                </div>
            </div>
        </>
    );
}