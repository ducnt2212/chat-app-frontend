import Link from "next/link";

import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout
      subtitle="Create your account to get started."
      footer={
        <p className="mt-10 text-center text-sm tracking-wide text-[#5c5f61]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary hover:underline"
          >
            Sign in
          </Link>
        </p>
      }
    >
      <RegisterForm />
    </AuthLayout>
  );
}
