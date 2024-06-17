import { useState } from "react";
import Loader from "../../components/Loader";
import useResetPasswordForEmail from "./useResetPasswordForEmail";
import { RiArrowLeftSLine } from "react-icons/ri";
import Heading from "../../components/Heading";
import MainContainer from "../../components/MainContainer";
import Form from "../../components/Form";
import InputBox from "../../components/InputBox";
import FormBtn from "../../components/FormBtn";
import TextLink from "../../components/TextLink";

function ForgotPasswordPage() {
  const {
    resetPassword,
    isPending: isResetting,
    isSuccess,
    isError,
    error,
  } = useResetPasswordForEmail();

  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    resetPassword(email, {
      onSuccess: () => {
        console.log("Password reset email sent successfully");
        setEmail("");
      },

      onError: (error) => {
        console.log("Error sending password reset email: ", error);
      },
    });
  }

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit}>
        <Heading>Reset your password</Heading>
        <p className="mb-4 text-center text-sm">
          Enter your email address below and we'll send you a link to reset your
          password.
        </p>

        <InputBox
          value={email}
          onChange={setEmail}
          placeholder="Email"
          htmlFor="email"
        />

        <FormBtn isPending={isResetting} disabled={isResetting}>
          {isResetting && <Loader customClasses="mr-2" size="small" />}
          <span>Continue</span>
        </FormBtn>

        <TextLink to="/signin" addClass="flex items-center justify-center">
          <RiArrowLeftSLine />
          Back to Signin
        </TextLink>
      </Form>
    </MainContainer>
  );
}

export default ForgotPasswordPage;
