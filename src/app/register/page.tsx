import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-slate-50">
      <h1 className="text-2xl font-semibold text-slate-900">Meet</h1>
      <p className="mt-2 text-sm text-slate-500">Register page placeholder</p>
      <p className="mt-6 text-sm text-slate-600">
        <span>Already have an account? </span>
        <Link href="/login" className="font-medium text-blue-600 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
