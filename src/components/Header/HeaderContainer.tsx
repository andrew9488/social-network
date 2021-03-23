import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DataType, setUserData} from "../../redux/authReducer";
import axios from "axios";

type MapStatePropsType = {
    data: DataType
    isAuth: boolean
}

type MapDispatchPropsType = {
    setUserData: (userId: number, login: string, email: string) => void
}

type HeaderContainerPropsType = {
    data: DataType
    setUserData: (userId: number, login: string, email: string) => void
    isAuth: boolean
}

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setUserData(id, login, email);
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        data: state.auth.data,
        isAuth: state.auth.isAuth
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
(mapStateToProps, {setUserData})(HeaderContainer)
