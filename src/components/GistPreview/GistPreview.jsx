import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGist } from "../../api/gists";
import { GistContainer } from "../../shared/components/styledComponent";
import CodeView from "../CodeView/CodeView";
import GistMeta from "../GistMeta/GistMeta";

export default function GistPreview({ gist, splitter }) {
  const [content, setContent] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getGist(gist?.id).then((gistData) => {
      setContent(gistData.files[Object.keys(gistData.files)[0]].content);
      setLoaded(true);
    });
  }, [gist?.id]);

  function navigateToGist() {
    //dispatch
    navigate(`/gist/${gist?.id}`);
  }
  //split utility [todo]

  return (
    <GistContainer>
      <GistMeta isInTable={false} gist={gist} />
      <CodeView
        loaded={loaded}
        content={content?.split("\n").slice(0, (splitter||10)).join("\n")}
        navigateToGist={navigateToGist}
      />
    </GistContainer>
  );
}
