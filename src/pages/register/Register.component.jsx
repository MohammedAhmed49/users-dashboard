import Button from "../../UI/buttons/Buttons.component";
import FloatingCard from "../../UI/floating-card/FloatingCard.component";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  getUserDocument,
  signUpWithEmail,
} from "../../utils/firebase/firebase.util";
import { useState } from "react";
import Spinner from "../../UI/spinner/Spinner.component";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const schema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    passwordConfirmation: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
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
    const displayName = `${data.firstName} ${data.lastName}`;

    const user = await signUpWithEmail(data.email, data.password, displayName);
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
    <div className="bg-secondary w-full h-screen flex items-center justify-center dark:bg-slate-800">
      <FloatingCard>
        <h2 className="text-center text-2xl font-bold text-primary dark:text-white">
          Create a new account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-5 w-full">
            <input
              type="text"
              className={`form-input rounded-lg flex-grow w-full ${
                errors.firstName ? "border-red-500" : "border-borderClr"
              }`}
              placeholder="First name"
              {...register("firstName")}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            <p className="text-red-500">{errors.firstName?.message}</p>
          </div>
          <div className="my-5 w-full">
            <input
              type="text"
              className={`form-input rounded-lg flex-grow w-full ${
                errors.lastName ? "border-red-500" : "border-borderClr"
              }`}
              placeholder="Last name"
              {...register("lastName")}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            <p className="text-red-500">{errors.lastName?.message}</p>
          </div>
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
          <div className="my-5 w-full">
            <input
              type="password"
              className={`form-input rounded-lg flex-grow w-full ${
                errors.passwordConfirmation
                  ? "border-red-500"
                  : "border-borderClr"
              }`}
              placeholder="Confirm password"
              {...register("passwordConfirmation")}
              aria-invalid={errors.passwordConfirmation ? "true" : "false"}
            />
            <p className="text-red-500">
              {errors.passwordConfirmation?.message}
            </p>
          </div>
          <Button type="primary">
            {isLoading ? <Spinner /> : "Create account"}
          </Button>
        </form>
      </FloatingCard>
    </div>
  );
};

export default Register;
