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
import { SignInForm } from "./sign-in-form";

export const metadata: Metadata = {
  title: "Sign in",
};

type Props = {
  searchParams: Promise<{ callbackUrl?: string; message?: string }>;
};

const SignInPage = async (props: Props) => {
  const { callbackUrl, message } = await props.searchParams;

  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }

  return (
    <div className="flex items-center justify-center">
      <Card className="w-[500px]">
        <CardHeader className="space-y-4">
          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            {message ? <span className="mr-2">{message} -</span> : null}
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
