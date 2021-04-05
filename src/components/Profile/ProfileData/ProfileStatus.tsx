import React from "react";

type ProfileStatusPropsType = {
    aboutMe: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editableMode: false
    }

    activateEditableMode() {
        this.setState({
                editableMode: true
            }
        )
    }

    deactivateEditableMode() {
        this.setState({
                editableMode: false
            }
        )
    }

    render() {
        return (
            <div>
                {!this.state.editableMode
                    ? <span onDoubleClick={this.activateEditableMode.bind(this)}>About me : {this.props.aboutMe}</span>
                    : <input onBlur={this.deactivateEditableMode.bind(this)}
                             autoFocus
                             value={this.props.aboutMe}/>
                }
            </div>
        )
    }
}

export default ProfileStatus;