import { useMutation } from "@tanstack/react-query";
import { sendPasswordResetEmail } from "../userProfile/apiUserAccount";
import toast from "react-hot-toast";

function useResetPasswordForEmail() {
  const {
    mutate: queryResetPassword,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: ({ email, redirectTo }) =>
      sendPasswordResetEmail({ email, redirectTo }),
    onMutate: () => {
      toast.loading("Sending email...");
    },
    onSuccess: () => {
      toast.dismiss();
      toast.success("Email sent. Please check your inbox.");
    },
    onError: (error) => {
      toast.dismiss();
      toast.error(error.message);
    },
  });

  // This is just for developement purpose. We need to dynamically itentify the environment wheather it is production or local so that we don't need to change the link manually every time
  const triggerResetPassword = (email) => {
    // sample in the env file
    // VITE_REDIRECT_URL_LOCAL = http://localhost:3000
    // VITE_REDIRECT_URL_PRODUCTION = https://chat-su.vercel.app
    // The route is /new-password. so we need to append it to the url

    const redirectTo =
      import.meta.env.MODE === "production"
        ? `${import.meta.env.VITE_REDIRECT_URL_PRODUCTION}/new-password`
        : `${import.meta.env.VITE_REDIRECT_URL_LOCAL}/new-password`;

    queryResetPassword({ email, redirectTo });
  };

  return {
    resetPassword: triggerResetPassword,
    isPending,
    isSuccess,
    isError,
    error,
  };
}

export default useResetPasswordForEmail;
