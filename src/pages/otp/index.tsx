import { memo } from "react";
import { Input, type GetProps } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "../../api/hooks/useUser";

type OTPProps = GetProps<typeof Input.OTP>;

const Otp = () => {
    const [params] = useSearchParams()
    const encode = params.get("e")
    const email = atob(encode || "")
    console.log(email);
    const navigate = useNavigate()

    const {sendOtp} = useUser()
    

  const onChange: OTPProps["onChange"] = (otp) => {
    sendOtp.mutate({email, otp}, {
      onSuccess: () => {
        navigate("/login")
      }
    });
  };
  return (
    <section>
      <div className="container flex justify-center">
        <div className=" mt-40 bg-gray-200 p-4">
            <Input.OTP formatter={(str) => str.toUpperCase()} onChange={onChange} />
        </div>
      </div>
    </section>
  );
};

export default memo(Otp);
