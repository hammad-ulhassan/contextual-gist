import { Avatar, Button, notification, Spin, Typography } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserGists } from "../../api/gists";
import { getUser } from "../../api/user";
import GistPreview from "../../components/GistPreview/GistPreview";
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
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('authUserData'));
  const [myGists, setMyGists] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (userData) {
      getUserGists(userData?.login).then((gists) => {
        setMyGists(gists);
        setLoading(false);
      });
    }
    else{
      console.log('no userData', userData)
    }
  }, []);

  const navigateToCreateGist = useCallback(() => {
    navigate("/create");
  }, [navigate]);

  const navigateToProfile = useCallback(() => {
    window.open(`https://github.com/${userData?.login}`);
  }, [userData]);

  return (
    <HomePageLayout>
      <ProfileTopRow>
        <h2>User Gists</h2>
        <Button onClick={navigateToCreateGist}>Create Gist</Button>
      </ProfileTopRow>
      <UserProfileWrapper>
        <FCFCWrapper>
          <Avatar size={200} src={userData?.avatar_url} />
          <TextWordBreak>
            <Typography.Title level={4}>
              {userData?.name}
            </Typography.Title>
          </TextWordBreak>
          <TextWordBreak>
            <Typography.Title level={5}>
              {userData?.bio}
            </Typography.Title>
          </TextWordBreak>
          <Button onClick={navigateToProfile}>GitHub Profile</Button>
        </FCFCWrapper>
        <UserProfileGistsList>
          {loading ? (
            <Spin size="large" />
          ) : (
            // JSON.stringify(authUserGists)
            myGists?.length > 0 &&
            myGists?.map((gist, index) => (
              <GistPreview gist={gist.gist} key={index} />
            ))
          )}
        </UserProfileGistsList>
      </UserProfileWrapper>
    </HomePageLayout>
  );
};

export default MyProfile;
