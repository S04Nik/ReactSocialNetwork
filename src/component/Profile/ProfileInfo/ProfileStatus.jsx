import React from 'react';

class ProfileStatus extends React.Component{
    state={
        editMode:false,
        status:this.props.status 
        // status пришел единожды при формирование
        // status может быть ''
        //рассинхрон 
    }
    componentDidUpdate(prevProps,prevState){
        //опасный момент зацикливания 
        //использовать setState с условием 
        if(prevProps.status!==this.props.status){
        this.setState({
            status:this.props.status
        })
        }
    }
    activateEditMode=()=>{
        this.setState({editMode:true}); // async
    }
    deactivateEditMode=()=>{
        this.setState({editMode:false});
        this.props.updateStatus(this.state.status); 
        // можно повесить ref на новый сатус (это не хорошо)
        // после того как убрали focus перерисов glob s (крутилка)
    }
    onStatusChange=(e)=>{
        this.setState({status:e.currentTarget.value});
    }
    render(){
        return(<>
        <div>
            {!this.state.editMode &&
                <div>
                    <span onClick={this.activateEditMode}>{this.props.status|| 'NO STATUS'}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                 value={this.state.status}></input> 
                </div>
            }
        </div>
        </>)
    }
}


export default ProfileStatus;