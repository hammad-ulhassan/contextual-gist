import { Button, Menu } from "antd"
import { Link } from "react-router-dom";


const ourMenu = (items) => <Menu items={[...items]} />;

const MenuItems = [
    {
      label: (
        <>
          <Link to="/me">
            <h5>Signed in as</h5>
            {/* <h4>{store.getState().logins.token.username}</h4> */}
          </Link>
        </>
      ),
    },
    {
      label: <hr />,
      disabled: true,
    },
    {
      label: <Link to="/me">Your Gists</Link>,
    },
    {
      label: <Link to="/me">Your Starred Gists</Link>,
    },
    {
      label: <Link to="/me">Help</Link>,
    },
    {
      label: <hr />,
      disabled: true,
    },
    {
      label: <Link to="/me">Your Github Profile</Link>,
    },
    {
      label: <Button onClick={null} type="link">Sign Out</Button>,
    },
  ];

  export default ourMenu(MenuItems);