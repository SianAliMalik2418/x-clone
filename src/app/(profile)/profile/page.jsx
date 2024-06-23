import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { SignUpForm } from "@/components/SignUpForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/login");
  return <div>ProfilePage</div>;
};
export default ProfilePage;
