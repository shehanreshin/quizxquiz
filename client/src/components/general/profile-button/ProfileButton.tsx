import ProfilePic from './../../../assets/general/pfp.jpeg';
import styles from './ProfileButton.module.css';

function ProfileButton() {
    return (
        <>
            <div>
                <img className={`${styles.img} rounded-circle`} src={ProfilePic} />
            </div>
        </>
    );
}

export default ProfileButton;