import { Button } from "antd";
import { Formik, Form } from "formik";
import InputField from "../../components/InputField/InputField";
import { LOGINLABEL, TOKENLABEL, USERNAMELABEL } from "./constants";
import validationSchema from "./validationSchema";
import useCredentialContext from '../../hooks/useCredentialContext';
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const {setUsername, setToken} = useCredentialContext();
  const initialValues = {
    username: "",
    token: "",
  };
  const navigate = useNavigate();

  const myValidationSchema = validationSchema;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={myValidationSchema}
      onSubmit={({ username, token }, actions) => {
        setUsername(username);
        setToken(token);
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
