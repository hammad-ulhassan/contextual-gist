import { Avatar, Button, Dropdown } from "antd";
import { useCallback, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CredentialContext } from "../../contexts/credentialContext/CredentialContextProvider";
import { initialState } from "../../contexts/credentialContext/initialState";
import { CREDENTIAL_STATE } from "../../globals/constants/localStorageAccessors";
import {
  AvatarWrapper,
  CFSWrapper,
  ContentWrapper,
  CSBWrapper,
  SearchBox,
} from "../../shared/components/styledComponent";
import Logo from "../Logo/Logo";
import "./Header.css";
import MenuItems from "./menu";

const Header = () => {
  let navigate = useNavigate();
  const [state, setState] = useState(initialState);

  const handleOnSearch = useCallback(
    (user) => {
      navigate(`/search?user=${user}`);
    },
    [navigate]
  );

  useEffect(()=>{
    const myState = localStorage.getItem(CREDENTIAL_STATE);
    if(myState){
      let parsedState = JSON.parse(myState);
      if(state.isLoggedIn !== parsedState.isLoggedIn){
        setState(parsedState)
      }
    }
  });

  useEffect(() => {
    if(state.isLoggedIn){
      // console.log(state.username)

    }
  }, [state.isLoggedIn, state.username]);

  const handleOnLogin = useCallback(() => {
    navigate(`/login`);
  }, [navigate]);

  return (
    <header className="header-style emumba-bg">
      <ContentWrapper>
        <CSBWrapper>
          <Link to="/home">
            <Logo fillColor="#ffffff" />
          </Link>
          <CFSWrapper gap={4}>
            <SearchBox.Search
              placeholder="Search..."
              allowClear
              onSearch={handleOnSearch}
              enterButton={true}
            />
            {!state.isLoggedIn? (
              <Button onClick={handleOnLogin}>Login</Button>
            ) : (
              <Dropdown overlay={MenuItems} placement="bottom" arrow>
                <AvatarWrapper>
                  <Avatar src={state?.authUserData?.avatar_url} size={50} />
                </AvatarWrapper>
              </Dropdown>
            )}
          </CFSWrapper>
        </CSBWrapper>
      </ContentWrapper>
    </header>
  );
};

export default Header;
