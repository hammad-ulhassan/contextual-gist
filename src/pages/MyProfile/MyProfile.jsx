import { Avatar, Button, notification, Spin, Typography } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserGists } from "../../api/gists";
import { getUser } from "../../api/user";
import GistPreview from "../../components/GistPreview/GistPreview";
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

  // useEffect(() => {
  //   if (userDataStatus !== "succeeded") {
  //     setLoading(true);
  //   } else {
  //     setSelectedUserData(userData);
  //     if (authUserGistsStatus !== "succeeded") {
  //       setLoading(true);
  //     } else {
  //       setLoading(false);
  //       setSelectedUserGists(authUserGists);
  //     }
  //   }

  const navigateToCreateGist = useCallback(()=>{
    navigate("/create");
  })

  return (
    <HomePageLayout>
      <ProfileTopRow>
        <h2>User Gists</h2>
        <Button onClick={navigateToCreateGist}>Create Gist</Button>
      </ProfileTopRow>
      <UserProfileWrapper>
        {/* <FCFCWrapper>
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
            authUserGists?.length > 0 &&
            authUserGists?.map((gist, index) => (
              <GistPreview gist={gist} key={index} />
            ))
          )}
        </UserProfileGistsList> */}
      </UserProfileWrapper>
    </HomePageLayout>
  );
};

export default MyProfile;
