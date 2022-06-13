import { notification } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import GistCreationForm from "../../components/GistCreationForm/GistCreationForm";
import GistForm from "../../components/GistForm/GistForm";
import {
  CFSWrapper,
  HomePageLayout,
} from "../../shared/components/styledComponent";
import transformGistForEdit from "../../utils/transformGistForEdit";
import transformGistFormDataForPost from "../../utils/transformGistFormDataForPost";

const EditGist = () => {
  const [description, setDescription] = useState(null);
  const [files, setFiles] = useState([]);
  const formRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let transformed = transformGistForEdit(null);
    setDescription(transformed.description);
    setFiles(transformed.files);
  }, []);


  return (
    <HomePageLayout>
      <CFSWrapper>
        <h2>Edit Gist</h2>
      </CFSWrapper>
      <GistCreationForm
        description={description}
        files={files}
        onSubmitForm={null}
      />
    </HomePageLayout>
  );
};

export default EditGist;
