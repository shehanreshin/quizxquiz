import { CSSProperties } from 'react';
import ProfilePic from './../../../assets/general/pfp.jpeg';
import styles from './ProfileButton.module.css';

interface Props {
    style?: CSSProperties;
}

function ProfileButton({ style }: Props) {
    return (
        <>
            <div style={style}>
                <img className={`${styles.img} rounded-circle`} src={ProfilePic} />
            </div>
        </>
    );
}

export default ProfileButton;