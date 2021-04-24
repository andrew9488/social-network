import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus: React.FC<ProfileStatusPropsType> = (props) => {

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const [editableMode, setEditableMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    const activateEditableMode = () => {
        setEditableMode(true)
    }

    const deactivateEditableMode = () => {
        setEditableMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editableMode
                ? <span onDoubleClick={activateEditableMode}>Status: {props.status}</span>
                : <input onBlur={deactivateEditableMode}
                         autoFocus
                         value={status}
                         onChange={onStatusChange}
                />
            }
        </div>
    );
}
