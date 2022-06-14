import { Spin } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GistCard from "../../components/GistCard/GistCard";
import GistMeta from "../../components/GistMeta/GistMeta";
import {
  ColFSWrapper,
  CSBWrapper,
  HomePageLayout,
} from "../../shared/components/styledComponent";
import GistUtils from "../../components/GistUtils/GistUtils";
import { getGist } from "../../api/gists";

export const GistPage = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [gistAllData, setGistAllData] = useState(null);
  const [showPersonalControls, setShowPersonalControls] = useState(false);

  const editGist = useCallback(() => {
    // navigate(`/edit/${gistAllData.id}`);
  }, []);

  function deleteGist() {}

  function onForkGist() {}

  function onStarGist() {
    //[redundancy todo]
  }

  useEffect(() => {
    setLoaded(false);

    getGist(id).then((selectedGistAllData) => {
      setGistAllData(selectedGistAllData);
      setLoaded(true);
    });
  }, [id]);

  return (
    <HomePageLayout>
      <CSBWrapper>
        {/* {JSON.stringify(selectedGist)} */}
        {loaded ? <GistMeta isInTable={false} gist={gistAllData} /> : null}
        {loaded ? (
          <GistUtils
            forks={gistAllData?.forks}
            showPersonalControls={showPersonalControls}
            isLoggedIn={true}
            handleGistEdit={editGist}
            handleGistDelete={deleteGist}
            handleForkGist={onForkGist}
            handleGistStar={onStarGist}
          />
        ) : null}
      </CSBWrapper>
      <ColFSWrapper gap="0.5vh">
        {loaded ? (
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
        )}
      </ColFSWrapper>
    </HomePageLayout>
  );
};
