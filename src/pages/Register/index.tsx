import { Button, Form, Input, type FormProps } from "antd";
import { memo } from "react";
import { useUser } from "../../api/hooks/useUser";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignInData } from "../../lib/signinSlice";

type FieldType = {
  name?: string;
  email: string;
  password: string;
};

const Register = () => {
    const navigate = useNavigate()
    const {createUser} = useUser()
    const dispatch = useDispatch()
    
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
      const {name, email, password} = values
      const user = {
        full_name:name,
        phone:"+998913607434",
        email,
        password,
        region:"Namangan"
      }
        createUser.mutate(user, {
            onSuccess: () => {
                console.log("succes");
                const encode = btoa(values.email)
                dispatch(setSignInData({email:values.email, password:values.password}))
                navigate(`/otp/?e=${encode}`)
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
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>
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

export default memo(Register);
