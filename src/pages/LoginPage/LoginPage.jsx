import { Button } from "antd";
import { Formik, Form } from "formik";
import InputField from "../../components/InputField/InputField";
import { LOGINLABEL, TOKENLABEL, USERNAMELABEL } from "./constants";
import validationSchema from "./validationSchema";
import { useNavigate } from "react-router-dom";
import { useCallback, useContext, useEffect } from "react";
import { SETCREDENTIALS } from "../../globals/constants/actionTypes";
import { CredentialContext } from "../../contexts/credentialContext/CredentialContextProvider";
import fetchAuthUserData from "../../contexts/credentialContext/getAuthUserData";
import { CREDENTIAL_STATE } from "../../globals/constants/localStorageAccessors";

function LoginPage() {
  // const { state, credentialDispatch } = useContext(CredentialContext);

  const initialValues = {
    username: "",
    token: "",
  };
  const navigate = useNavigate();

  const myValidationSchema = validationSchema;

  const submitAction = useCallback(({ username, token }, actions) => {
    localStorage.setItem(
      CREDENTIAL_STATE,
      JSON.stringify({
        username,
        token,
        isLoggedIn: true,
        authUserData: null,
      })
    );
    navigate("/home");

  }, [navigate]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={myValidationSchema}
      onSubmit={submitAction}
    >
      <Form>
        <InputField label={USERNAMELABEL} name="username" />
        <InputField label={TOKENLABEL} name="token" />
        <Button type="primary" htmlType="submit">
          {LOGINLABEL}
        </Button>
      </Form>
    </Formik>
  );
}

export default LoginPage;
