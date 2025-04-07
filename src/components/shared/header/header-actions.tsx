"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOutUser } from "@/lib/actions/user.actions";

const HeaderActions = () => {
  const { data: session } = useSession();

  return (
    <div className="ml-auto flex items-center mr-3">
      {session ? (
        <div>
          <span>Welcome {session.user?.name}</span>
          <form action={signOutUser}>
            <Button variant={"secondary"}>Sign Out</Button>
          </form>
        </div>
      ) : (
        <div className="flex gap-2">
          <Button variant={"outline"} asChild>
            <Link href="/register">Register</Link>
          </Button>
          <Button variant="default" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default HeaderActions;
