import Link from "next/link";

import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout
      subtitle="Effortless communication, redefined."
      footer={
        <p className="mt-10 text-center text-sm tracking-wide text-[#5c5f61]">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary hover:underline"
          >
            Create account
          </Link>
        </p>
      }
    >
      <LoginForm />
    </AuthLayout>
  );
}
