import React, { useEffect, useState } from 'react';

import { Button, Modal, ModalHeader,ModalFooter } from 'reactstrap';
const EditTaskPopup = ({modal, toggle, updateTask,taskObj}) => {

const [taskName, setTaskName]=useState('');
const [description,setDescription] = useState('');
const handleChange = (e) =>{
const  {name, value}=e.target
if(name==="taskName"){
  setTaskName(value)
}else{
  setDescription(value)
}
}

useEffect(()=> {
    setTaskName(taskObj.Name)
    setDescription(taskObj.Description)
},[taskObj.Description, taskObj.Name])
    

    const handleUpdate=(e)=>{
        e.preventDefault()
        let tampObj = {}
        tampObj["Name"] = taskName
        tampObj["Description"] = description
        updateTask(tampObj)
    }
 return (
   <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Update Task</ModalHeader>
    
        <form>
          
            <div className="form-group">
              <label>Task Name</label>
              <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName"/>
            </div>

            <div className="from-group">
              <label>Description</label>
              <textarea rows= "5" className="form-control" value={description} onChange={handleChange}name="description"></textarea>

            </div>

</form>
       
      
    
  <ModalFooter>
    <Button color="primary" onClick={handleUpdate}>Update</Button>{''}
    <Button color="secondary" onClick={toggle}>Cancel</Button>

  </ModalFooter>
   </Modal>
  )
}

export default EditTaskPopup;