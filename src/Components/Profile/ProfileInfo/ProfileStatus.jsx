import React from 'react'

class ProfileStatus extends React.Component  {
    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActiveEditMode = () => {
        this.setState({
            editMode: false, 
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
        
    }

    render() {
        return (
            <>
            { !this.state.editMode && 
            <div>
                 <span onDoubleClick={ this.activeEditMode } >{this.props.status || 'нет статуса'  }</span>
            </div>
            }
            { this.state.editMode && 
            <div>
                <input autoFocus onBlur={this.deActiveEditMode} type="text" onChange={this.onStatusChange} value={this.state.status}/>
            </div>
            }
            </>
        )
    }
    
}

export default ProfileStatus