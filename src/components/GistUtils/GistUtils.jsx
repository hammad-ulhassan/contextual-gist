import { Button } from "antd";
import {
  StarOutlined,
  ForkOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import {
  CSBWrapper,
  NumberDisplay,
} from "../../shared/components/styledComponent";
import { useContext, useEffect, useState } from "react";
import { SelectedGistContext } from "../../contexts/gistPageContext/provider";
import { CREDENTIAL_STATE } from "../../globals/constants/localStorageAccessors";

const GistUtils = ({
  handleGistEdit,
  handleGistDelete,
  handleGistStar,
  handleForkGist,
  // showPersonalControls,
}) => {
  const { state, dispatch } = useContext(SelectedGistContext);

  return (
    <CSBWrapper>
      {state.showPersonalControls ? (
        <>
          <CSBWrapper>
            <Button
              type="link"
              icon={<EditOutlined />}
              onClick={() => handleGistEdit()}
            >
              Edit
            </Button>
          </CSBWrapper>
          <CSBWrapper>
            <Button
              type="link"
              icon={<DeleteOutlined />}
              onClick={() => handleGistDelete()}
            >
              Delete
            </Button>
          </CSBWrapper>
        </>
      ) : null}
      {state.isLoggedIn ? (
        <>
          <CSBWrapper>
            <Button
              type="link"
              icon={<StarOutlined />}
              onClick={() => handleGistStar()}
            >
              Star
            </Button>
            <NumberDisplay>0</NumberDisplay>
          </CSBWrapper>
          <CSBWrapper>
            <Button
              type="link"
              icon={<ForkOutlined />}
              onClick={() => handleForkGist()}
            >
              Fork
            </Button>
            <NumberDisplay>{state.forks.length}</NumberDisplay>
          </CSBWrapper>
        </>
      ) : null}
    </CSBWrapper>
  );
};

export default GistUtils;
