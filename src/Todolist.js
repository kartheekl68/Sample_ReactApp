import React from 'react';
import { getTodoList, getUser, removeUserSession } from './Utils/Common';

function TodoList(props) {
  const user = getUser();
  const todoListItems = getTodoList();
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (
    <div>
      Welcome {user}! to Todo List<br /><br />
      <div className="container">
      <ul>
      {todoListItems.map((value, index) => {
        return <li key={index}>{value}</li>
      })}
    </ul>
      </div>
      {/* <input type="button" onClick={handleLogout} value="Logout" /> */}
    </div>
  );
}

export default TodoList;
