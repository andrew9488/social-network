import React from "react";
import style from "./Contacts.module.css"

type ContactsPropsType = {
    contactsKey: string | null
    contactsValue: string | null
}
export const Contacts: React.FC<ContactsPropsType> = (props) => {
    return (
        <>
            <ul>
                {props.contactsValue && props.contactsValue ?
                    <>
                        <span>{props.contactsKey}</span>
                        <li className={style.li}>{props.contactsValue}</li>
                    </> : null}
            </ul>
        </>
    );
}