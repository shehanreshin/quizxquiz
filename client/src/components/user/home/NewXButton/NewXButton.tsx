import { CSSProperties } from "react";
import { FaPlus } from "react-icons/fa6";
import styles from './NewXButton.module.css';

interface Props {
    active?: boolean;
    text: string;
    style?: CSSProperties;
}

function NewXButton({ active = false, text, style }: Props) {
    return (
        <>
            <button className={`${[active && styles.active, styles['btn-x']].join(' ')} rounded-5 d-flex justify-content-center align-items-center fw-semibold`} style={style}>
                <FaPlus className="me-1" style={{ color: active ? 'var(--white)' : 'var(--dark)' }} />
                <div style={{ color: active ? 'var(--white)' : 'var(--dark)' }}>{text}</div>
            </button >
        </>
    );
}

export default NewXButton;