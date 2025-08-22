import { Button, Form, Input, type FormProps } from "antd";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../lib";
import { useUser } from "../../api/hooks/useUser";
import { clearSignInData } from "../../lib/signinSlice";
import { setToken } from "../../lib/authSlice";

type FieldType = {
  email: string;
  password?: string;
};

const Login = () => {
    const navigate = useNavigate()
    const initialValue = useSelector((state: RootState) => state.signInSlice)
    const dispatch = useDispatch()

    const {signIn} = useUser()


    
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        signIn.mutate(values, {
          onSuccess:(res) => {
            dispatch(clearSignInData())
            dispatch(setToken({access_token: res?.data?.accsestoken, refresh_token:res?.data?.refreshtoken}))
            navigate("/profile")
          }
        })
        
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section>
      <div className="container flex justify-center mt-20">
        <div className="w-[500px] bg-gray-100 p-10">
          <Form
            initialValues={initialValue}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input.Password />
            </Form.Item>
            <Form.Item label={null}>
              <Button className="w-full" type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default memo(Login);
