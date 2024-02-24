import { SlOptions } from "react-icons/sl";
import styles from './PresentationCard.module.css';

interface Props {
    question: string;
    title: string;
    editedDate: string;
}

export default function PresentationCard({ question, title, editedDate }: Props) {
    return (
        <>
            <div className={`${styles['presentation-card']} w-100 h-100`} style={{ cursor: 'pointer' }}>
                <div className={`${styles['top-card']} h-75 border border-2 rounded-2 p-1 mb-3`} style={{
                    borderColor: 'var(--dark-light)'
                }}>
                    <div className="d-flex justify-content-end">
                        <img className="img mb-2" src="/img/general/logo.svg" style={{ width: '15%' }} />
                    </div>
                    <div className="fw-medium fs-6">{question}</div>
                    <div className="rounded-2" style={{ height: '20.5vh' }}>
                        <img src="src/assets/user/home/chart.svg" className="img w-100 h-100 object-fit-cover" />
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="w-100 me-2">
                        <div className={`${styles['presentation-title']} rounded-2`}>{title}</div>
                        <div className={`${styles['presentation-edit-date']} rounded-2`} style={{ color: 'var(--dark-light)' }}>Edited {editedDate}</div>
                    </div>
                    <div className={styles['options-icon']}>
                        <SlOptions className="fs-5" />
                    </div>
                </div>
            </div >
        </>
    );
}