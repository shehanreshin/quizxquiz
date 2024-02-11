import { BsSearch } from "react-icons/bs";
import styles from './SearchBar.module.css';
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function SearchBar() {
    const [searchText, setSearchText] = useState('');

    return (
        <>
            <div className={`${styles['input-container']} pt-1 pb-1 ps-2 pe-2 rounded-3 d-flex align-items-center`}>
                <BsSearch className='me-1' style={{ color: 'var(--dark)' }} />
                <div className="w-100">
                    <input className={`${styles['input-field']} border-0 w-100`} type="text" placeholder="Search presentations, quizzes and folders" onChange={(event) => setSearchText(event.target.value)} value={searchText} />
                </div>
                {searchText.length > 0 && <IoMdClose onClick={() => setSearchText('')} style={{ cursor: 'pointer', color: 'var(--dark)' }} />}
            </div>
        </>
    );
}

export default SearchBar;