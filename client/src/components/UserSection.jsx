import s from './UserSection.module.css';

const UserSection = ({ user }) => {
    return (
        <div className={s.userSection}>
            <div className={s.userSectionImg}>
                <img src={user.picture} />
            </div>
            <div className={s.userSectionInfo}>
                <p>First name: {user.first}</p>
                <p>Last name: {user.last}</p>
                <p>Gender: {user.gender}</p>
                <p>Age: {user.age}</p>
                <p>Date of birth: {user.dob}</p>
                <p>City: {user.city}</p>
                <p>Country: {user.country}</p>
                <p>Full address: {user.fullAddress}</p>
            </div>
        </div>
    )
}

export default UserSection