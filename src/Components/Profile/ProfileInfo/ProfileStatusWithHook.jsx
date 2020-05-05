import React, { useState } from 'react'

const ProfileStatusWithHook = (props) =>  {

    
    let [elitMod, setEditMod ] = useState(false)
    let [status, setStatus ] = useState(props.status)
    // let ststeWithSetState = useState(true)
    // let elitMod = ststeWithSetState[0]
    // let setEditMod = ststeWithSetState[1]

    const activeEditMode = () => {
        setEditMod(true)
    } 

    const deActiveEditMode = () => {
        setEditMod(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


        return (
            <>
            { !elitMod &&
            <div>
                 <span onDoubleClick={ activeEditMode } >{props.status || 'нет статуса'  }</span>
            </div>
            }
            { elitMod && 
            <div>
                <input autoFocus onBlur={deActiveEditMode} type="text" onChange={onStatusChange} value={status}/>
            </div>
            }
            </>
        )
    
    
}

export default ProfileStatusWithHook