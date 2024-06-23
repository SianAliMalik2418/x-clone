import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { SignUpForm } from "@/components/SignUpForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const SignUpPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) return redirect("/");
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignUpForm />
    </div>
  );
};
export default SignUpPage;
