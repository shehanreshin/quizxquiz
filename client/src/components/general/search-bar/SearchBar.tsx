import { BsSearch } from "react-icons/bs";
import styles from './SearchBar.module.css';
import { IoMdClose } from "react-icons/io";
import { CSSProperties, useState } from "react";

interface Props {
    style?: CSSProperties;
}

function SearchBar({ style }: Props) {
    const [searchText, setSearchText] = useState('');

    return (
        <>
            <div className={`${styles['input-container']} pt-1 pb-1 ps-2 pe-2 rounded-3 d-flex align-items-center`} style={style}>
                <BsSearch className='me-1' style={{ color: 'var(--dark)' }} />
                <div className="w-100">
                    <input className={`${styles['input-field']} border-0 w-100`} type="text" placeholder="Search presentations, quizzes and folders" onChange={(event) => setSearchText(event.target.value)} value={searchText} />
                </div>
                {searchText.length > 0 && <IoMdClose className={styles['btn-clear']} onClick={() => setSearchText('')} />}
            </div>
        </>
    );
}

export default SearchBar;