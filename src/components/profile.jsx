import styles from "./Profile.module.css"
import { getUser } from './state';

export const Profile = (props) => {
    let user = props.function()
    console.log(user)
    return (
    
    

        < div className = "row" >
            <div className="col-md-4">
                <img src={user.avatar} 
                alt="" 
                width = "100%"/>
            </div>
            <div className="col-md-8">
                <h2 className={styles.header}>Фамилия и имя: <span>{user.surnane} {user.name}</span></h2>
                <p className={styles.about}> О себе: </p>
                <p className={styles.id}>ID: <span>{user.id}</span></p>
                <p style ={{padding : "10px", border: "1px solid red", borderRadius: "4px"}}> {/* инлайновый стиль реаакт */}
                    Email: <span>{user.email}</span>{/* инлайновые стили, глобальные стили, нативные css, реативыне css модули */}
                    
                </p>
            </div>
        </div >
    )
};

