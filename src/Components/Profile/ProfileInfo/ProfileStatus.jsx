import React from 'react'

class ProfileStatus extends React.Component  {

    state = {
        editMode: false
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActiveEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
            { !this.state.editMode && 
            <div>
                 <span onDoubleClick={ this.activeEditMode } >{this.props.spatus}</span>
            </div>
            }
            { this.state.editMode && 
            <div>
                <input autoFocus onBlur={this.deActiveEditMode} type="text" value={this.props.spatus}/>
            </div>
            }
            </>
        )
    }
    
}

export default ProfileStatus