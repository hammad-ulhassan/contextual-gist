import { Button } from "antd";
import { Formik, Form } from "formik";
import InputField from "../../components/InputField/InputField";
import { LOGINLABEL, TOKENLABEL, USERNAMELABEL } from "./constants";
import validationSchema from "./validationSchema";

function LoginPage() {
  const initialValues = {
    username: "",
    token: "",
  };

  const myValidationSchema = validationSchema;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={myValidationSchema}
      onSubmit={({ username, token }, actions) => {
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
