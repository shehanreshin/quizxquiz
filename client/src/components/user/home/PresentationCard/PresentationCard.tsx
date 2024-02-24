import { SlOptions } from "react-icons/sl";

export default function PresentationCard() {
    return (
        <>
            <div className="w-100 h-100">
                <div className="h-75 border border-2 rounded-2 p-1 mb-3" style={{
                    borderColor: 'var(--dark-light)'
                }}>
                    <div className="d-flex justify-content-end">
                        <img className="img mb-2" src="/img/general/logo.svg" style={{ width: '15%' }} />
                    </div>
                    <div className="fw-medium fs-6">Which one of these characters does not have conqueror's haki?</div>
                    <div className="rounded-2" style={{ height: '20.5vh' }}>
                        <img src="src/assets/user/home/chart.svg" className="img w-100 h-100 object-fit-cover" />
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="w-100 me-2">
                        <div className="rounded-2">Untitled presentation</div>
                        <div className="rounded-2" style={{ color: 'var(--dark-light)' }}>Edited Jan 3, 2024</div>
                    </div>
                    <div>
                        <SlOptions className="fs-5" />
                    </div>
                </div>
            </div >
        </>
    );
}