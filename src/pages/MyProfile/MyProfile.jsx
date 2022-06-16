import { Avatar, Button, notification, Spin, Typography } from "antd";
import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserGists } from "../../api/gists";
import { getUser } from "../../api/user";
import GistPreview from "../../components/GistPreview/GistPreview";
import fetchUserData from "../../contexts/userContext/getUserData";
import fetchUserGists from "../../contexts/userContext/getUserGists";
import { SelectedUserContext } from "../../contexts/userContext/provider";
import { SETUSERLOGIN } from "../../globals/constants/actionTypes";
import { CREDENTIAL_STATE } from "../../globals/constants/localStorageAccessors";
import useCredentialContext from "../../hooks/useCredentialContext";
import {
  ProfileTopRow,
  FCFCWrapper,
  HomePageLayout,
  TextWordBreak,
  UserProfileGistsList,
  UserProfileWrapper,
} from "../../shared/components/styledComponent";

const MyProfile = () => {
  // const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // const userData = JSON.parse(localStorage.getItem('authUserData'));
  // const [myGists, setMyGists] = useState(null);
  const { state, dispatch } = useContext(SelectedUserContext);


  useEffect(() => {
    const myState = localStorage.getItem(CREDENTIAL_STATE);
    if(myState){
      var parsed = JSON.parse(myState);
      dispatch({
        type: SETUSERLOGIN,
        payload: parsed.username,
      })
    }
    else{
      navigate('/login');
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    if (!state.userData && state.userLogin) {
      fetchUserData(state)(dispatch);
      // console.log('fetching User data')
    }
  }, [state.userLogin, state.userData]);

  useEffect(() => {
    if(!state.userGists && state.userData){
      fetchUserGists(state)(dispatch);
      // console.log('fetching user Gists')
    }
  }, [state.userGists,state.userData]);

  const navigateToCreateGist = useCallback(() => {
    navigate("/create");
  }, [navigate]);

  const navigateToProfile = useCallback(() => {
    window.open(`https://github.com/${state.userData?.login}`);
  }, [state.userData]);

  return (
    <HomePageLayout>
      <ProfileTopRow>
        <h2>User Gists</h2>
        <Button onClick={navigateToCreateGist}>Create Gist</Button>
      </ProfileTopRow>
      <UserProfileWrapper>
        <FCFCWrapper>
          <Avatar size={200} src={state.userData?.avatar_url} />
          <TextWordBreak>
            <Typography.Title level={4}>
              {state.userData?.name}
            </Typography.Title>
          </TextWordBreak>
          <TextWordBreak>
            <Typography.Title level={5}>
              {state.userData?.bio}
            </Typography.Title>
          </TextWordBreak>
          <Button onClick={navigateToProfile}>GitHub Profile</Button>
        </FCFCWrapper>
        <UserProfileGistsList>
          {state.gistsLoading ? (
            <Spin size="large" />
          ) : (
            // JSON.stringify(authUserGists)
            state.userGists &&
            state.userGists?.length > 0 &&
            state.userGists?.map((gist, index) => (
              <GistPreview gist={gist.gist} key={index} />
            ))
          )}
        </UserProfileGistsList>
      </UserProfileWrapper>
    </HomePageLayout>
  );
};

export default MyProfile;
