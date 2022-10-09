import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

const baseURL = "https://users-crud1.herokuapp.com"

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [formIsClosed, setFormIsClosed] = useState(true)
  const [openDelete, setOpenDelete] = useState(true)

  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }

  
  useEffect(() => {
    getAllUsers()
  }, [])

  const createNewUser = data => {
    const URL = `${baseURL}/users/`
    axios.post(URL, data)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
  }

  const deleteUserById = id => {
    const URL = `${baseURL}/users/${id}/`
    axios.delete(URL)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
  }

  const updateUserById = (id, data) => {
    const URL = `${baseURL}/users/${id}/`
    axios.patch(URL, data)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
  }

  const handleOpenForm = () => {
    setFormIsClosed(false)
  }

  const handleOpenDelete = () => {
    setOpenDelete(true)
  }
  
  return (
    <div className="App">
      <div className={`del-container ${openDelete && 'disable__del'}`}>
        <div className='del'>
          <i onClick={handleOpenDelete} className='del__x bx bx-x'></i>
          <h2>Delete User</h2>
          <p>User has been succesfully deleted</p>
          <button onClick={handleOpenDelete} className='del__btn'>Accept</button>
        </div>
      </div>
      <div className='App__container-title'>
        <h1 className='App__title'>Users CRUD</h1>
        <button onClick={handleOpenForm} className='App__btn'>Create New User</button>
      </div>
      <div className={`form-container ${formIsClosed && 'disable__form'}`}>
        <FormUsers
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        setFormIsClosed={setFormIsClosed}
        />
      </div>
      <div className='users-container'>
      {
        users?.map(user => (
          <UserCard 
          key={user.id}
          user={user}
          deleteUserById={deleteUserById}
          setUpdateInfo={setUpdateInfo}
          setFormIsClosed={setFormIsClosed}
          />
          )
        )
      }
      </div>      
    </div>
  )
}

export default App
