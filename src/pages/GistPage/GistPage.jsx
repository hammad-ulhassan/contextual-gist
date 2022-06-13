import { Spin } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GistCard from "../../components/GistCard/GistCard";
import GistMeta from "../../components/GistMeta/GistMeta";
import { usePublicGists } from "../../hooks/usePublicGistsContext";
import {
  ColFSWrapper,
  CSBWrapper,
  HomePageLayout,
} from "../../shared/components/styledComponent";

export const GistPage = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const [showPersonalControls, setShowPersonalControls] = useState(false);
  const{selectedGist} = usePublicGists();

  const editGist = useCallback(() => {
    // navigate(`/edit/${gistAllData.id}`);
  }, []);

  function deleteGist() {

  }

  function onForkGist() {
  }

  function onStarGist() {
    //[redundancy todo]
  }

  return (
    <HomePageLayout>
      <CSBWrapper>
        {JSON.stringify(selectedGist)}
        {/* {loaded ? <GistMeta isInTable={false} gist={gistAllData} /> : null} */}
        {/* {loaded ? (
          <GistUtils
            forks={gistAllData?.forks}
            showPersonalControls={showPersonalControls}
            isLoggedIn={isLoggedIn}
            handleGistEdit={editGist}
            handleGistDelete={deleteGist}
            handleForkGist={onForkGist}
            handleGistStar={onStarGist}
          />
        ) : null} */}
      </CSBWrapper>
      <ColFSWrapper gap="0.5vh">
        {/* {loaded ? (
          Object.keys(gistAllData?.files)
            .map((fn) => gistAllData?.files[fn])
            .map((file, index) => (
              <GistCard
                style={{ minWidth: "100%", margin: "1%" }}
                filename={file.filename}
                content={file.content}
                language={file.language}
                key={index}
              />
            ))
        ) : (
          <Spin size="large" />
        )} */}
      </ColFSWrapper>
    </HomePageLayout>
  );
};
