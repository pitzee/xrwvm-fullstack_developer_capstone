import React, { useEffect, useState } from 'react';

import Header from '../Header/Header';

const Logout = ({ onClose }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const logoutUser = async () => {
      let logout_url = window.location.origin + "/djangoapp/logout";
      const res = await fetch(logout_url, {
        method: "GET",
      });
      const json = await res.json();
      if (json.userName) {
        let username = sessionStorage.getItem('username');
        sessionStorage.removeItem('username');
        alert("Logging out " + username + "...");
        setOpen(false);
      } else {
        alert("The user could not be logged out.");
      }
    };
    logoutUser();
  }, []);

  if (!open) {
    window.location.href = "/";
  }

  return (
    <div>
      <Header />
      <div onClick={onClose}>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'
        >
          <div className="login_panel">
            <h1>Logging out...</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
