import Button from "../../UI/buttons/Buttons.component";
import FloatingCard from "../../UI/floating-card/FloatingCard.component";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  getUserDocument,
  signInWithEmail,
} from "../../utils/firebase/firebase.util";
import { useState } from "react";
import Spinner from "../../UI/spinner/Spinner.component";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    setIsLoading(true);

    const user = await signInWithEmail(data.email, data.password);

    let userDocument = null;
    if (user) {
      userDocument = await getUserDocument(user.user);
      reset({
        email: "",
        password: "",
      });
      navigate("/dashbaord");
    }

    setIsLoading(false);
    
  };

  return (
    <div className="bg-secondary w-full h-screen flex items-center justify-center">
      <FloatingCard>
        <h2 className="text-center text-2xl font-bold text-primary">Sign in</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-5 w-full">
            <input
              type="email"
              className={`form-input rounded-lg flex-grow w-full ${
                errors.email ? "border-red-500" : "border-borderClr"
              }`}
              placeholder="Email"
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div className="my-5 w-full">
            <input
              type="password"
              className={`form-input rounded-lg flex-grow w-full ${
                errors.password ? "border-red-500" : "border-borderClr"
              }`}
              placeholder="Password"
              {...register("password")}
              aria-invalid={errors.password ? "true" : "false"}
            />
            <p className="text-red-500">{errors.password?.message}</p>
          </div>
          <Button type="primary">{isLoading ? <Spinner /> : "Sign in"}</Button>
        </form>
      </FloatingCard>
    </div>
  );
};

export default SignIn;
