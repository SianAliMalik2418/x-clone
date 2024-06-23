import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { LoginForm } from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const LoginPage = async () => {

  const session  = await getServerSession(authOptions)

  if(session) return redirect("/")

  return (
    <div className="flex min-h-screen items-center justify-center">
      <LoginForm />
    </div>
  );
};
export default LoginPage;
