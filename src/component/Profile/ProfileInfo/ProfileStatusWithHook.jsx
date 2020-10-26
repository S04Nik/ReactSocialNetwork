import React, { useEffect, useState } from 'react';

const ProfileStatusWithHook=(props)=>{
// useState вернул массив 
    let[editMode,setEditMode]=useState(false);
// react помнит что компонента перерисовалась для этого случая поэтому 
// он не берет false , а возьмет новое значение и присвоит editMode
    let[status,setStatus]=useState(props.status);   

    useEffect(()=>{
        setStatus(props.status);
    },[props.status])

    const activateEditMode=()=>{
        setEditMode(true);
    }
    const deactivateEditMode=()=>{
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange=(e)=>{
        setStatus(e.currentTarget.value);
    }
    return<>
    <div>
            {!editMode&&
            <div>
            <span onClick={activateEditMode}>{props.status|| 'NO STATUS'}</span>
            </div>
            }
            {editMode &&
                <div>
                <input onChange={onStatusChange}
                 autoFocus={true}
                  onBlur={deactivateEditMode}
                      value={status}
                  />
                </div>
            }
    </div>
    </>

}


export default ProfileStatusWithHook;