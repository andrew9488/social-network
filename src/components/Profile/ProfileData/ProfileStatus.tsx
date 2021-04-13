import React, {ChangeEvent} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editableMode: false,
        status: this.props.status
    }

    activateEditableMode = () => {
        this.setState({
                editableMode: true
            }
        )
    }

    deactivateEditableMode = () => {
        this.setState({
                editableMode: false
            }
        )
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editableMode
                    ? <span onDoubleClick={this.activateEditableMode}>Status :{this.props.status}</span>
                    : <input onBlur={this.deactivateEditableMode}
                             autoFocus
                             value={this.state.status}
                             onChange={this.onStatusChange}
                    />
                }
            </div>
        );
    }
}

export default ProfileStatus;