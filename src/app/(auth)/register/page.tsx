import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import RegisterForm from "./register-form";

export const metadata: Metadata = {
  title: "Register",
};

type Props = {
  searchParams: Promise<{ callbackUrl?: string }>;
};

const SignInPage = async (props: Props) => {
  const { callbackUrl } = await props.searchParams;

  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }

  return (
    <div className="flex items-center justify-center">
      <Card className="w-[500px]">
        <CardHeader className="space-y-4">
          <CardTitle className="text-center">Register</CardTitle>
          <CardDescription className="text-center">
            Register your details to sign up
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <RegisterForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
