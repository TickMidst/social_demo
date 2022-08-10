import {useEffect, useRef, useState} from "react";

const ProfileStatus = (props) => {

    let [profileStatus, setProfileStatus] = useState(props.status)
    let [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setProfileStatus(props.status)
    }, [props.status])


    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(profileStatus);
    }

    return <div>

        {!editMode &&
            <div>
        <span onDoubleClick={() => setEditMode(true)}>
            {props.status || '-----'}
        </span>
            </div>
        }

        {editMode &&
            <div>
                <input
                    onChange={(e) => setProfileStatus(e.target.value)}
                    onMouseLeave={() => deactivateEditMode()}
                    value={profileStatus}
                    autoFocus={true}/>
            </div>
        }
    </div>
}


export default ProfileStatus;