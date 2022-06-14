import { Avatar, Button, Dropdown } from "antd";
import { useCallback,useContext} from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Context } from "../../GlobalContext/GlobalContext";
import useCredentialContext from "../../hooks/useCredentialContext";
import { AvatarWrapper, CFSWrapper, ContentWrapper, CSBWrapper, SearchBox } from "../../shared/components/styledComponent";
import Logo from "../Logo/Logo";
import './Header.css'
import MenuItems from "./menu";



const Header = () => {
  // let [, setSearchParams] = useSearchParams('');
  let navigate = useNavigate();
  // const [state, dispatch] = useContext(Context);

  const handleOnSearch = useCallback((user)=>{
    // setSearchParams({user});
    navigate(`/search?user=${user}`)
  },[navigate]);

  const handleOnLogin = useCallback(()=>{
    navigate(`/login`);
  }, [navigate])


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
            {!(1) ? (
              <Button onClick={handleOnLogin}>Login</Button>
            ) : (
              <Dropdown
                overlay={MenuItems}
                placement="bottom"
                arrow
              >
                <AvatarWrapper>
                  <Avatar
                    size={50}
                  />
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
