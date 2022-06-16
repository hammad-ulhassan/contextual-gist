import { Button, Menu } from "antd";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const MenuItems = ({credentialState, handleLogout}) => {

  
  
  const menuItems = [
    {
      label: (
        <>
          <Link to={`/user/${credentialState?.username}`} reloadDocument={true}>
            <h5>Signed in as</h5>
            <h3>{credentialState?.username}</h3>
          </Link>
        </>
      ),
    },
    {
      label: <hr />,
      disabled: true,
    },
    {
      label: <Link to={`/user/${credentialState?.username}`}>Your Gists</Link>,
    },
    {
      label: <Link to={`/user/${credentialState?.username}`}>Your Starred Gists</Link>,
    },
    {
      label: <Link to={`/user/${credentialState?.username}`}>Help</Link>,
    },
    {
      label: <hr />,
      disabled: true,
    },
    {
      label: <Link to={`/user/${credentialState?.username}`}>Your Github Profile</Link>,
    },
    {
      label: (
        <Button onClick={handleLogout} type="link">
          Sign Out
        </Button>
      ),
    },
  ];

  return <Menu items={[...menuItems]} />;
};

export default MenuItems;
