import React from "react";
import "./styles/userCard.css"


const UserCard = ({ user, deleteUserById, setUpdateInfo, setFormIsClosed, setOpenDelete}) => {
  
  const handleEdit = () => {
    setUpdateInfo(user);
    setFormIsClosed(false)
  };

  const handleDel = (id) => {
    deleteUserById(id)
    setOpenDelete(true)
  }

  return (
    <article className="user">
      <h2 className="user__name">{`${user.first_name} ${user.last_name}`}</h2>
      <ul className="user__list">
        <li className="user__item">
          <span className="user__span">EMAIL</span>
          {user.email}
        </li>
        <li className="user__item">
          <span className="user__span">BIRTHDAY</span>
          <div className="user__item-container">
          <i className="user__gift bx bx-gift"></i>{user.birthday}
          </div>
        </li>
      </ul>
      <footer className="user__footer">
        <button className="user__btn" 
        onClick={() => handleDel(user.id)}>
        <i className="user__trash bx bx-trash"></i>
        </button>
        <button className="user__btn" onClick={handleEdit}>
        <i className="user__ edit bx bx-edit-alt"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
