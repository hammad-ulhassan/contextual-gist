import { Button } from "antd";
import { Formik, Form } from "formik";
import InputField from "../../components/InputField/InputField";
import { LOGINLABEL, TOKENLABEL, USERNAMELABEL } from "./constants";
import validationSchema from "./validationSchema";
import useCredentialContext from '../../hooks/useCredentialContext';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect} from "react";
import { Context } from "../../GlobalContext/GlobalContext";
import { setLoggedIn, setToken, setUsername } from "../../globals/constants/actionTypes";
import { getAuthUserData } from "../../api/user";

function LoginPage() {
  // const {setUsername, setToken} = useCredentialContext();
  const [state, dispatch] = useContext(Context);

  const initialValues = {
    username: "",
    token: "",
  };
  const navigate = useNavigate();

  const myValidationSchema = validationSchema;

  useEffect(() => {
    // if(state.username && state.token){//check for not null
    //   getAuthUserData().
    // }
  }, [state.username, state.token]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={myValidationSchema}
      onSubmit={({ username, token }, actions) => {
        // setUsername(username);
        // setToken(token);

        navigate('/home')
      }}
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
