import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-slate-50">
      <h1 className="text-2xl font-semibold text-slate-900">Meet</h1>
      <p className="mt-2 text-sm text-slate-500">Login page placeholder</p>
      <p className="mt-6 text-sm text-slate-600">
        <span>Don&apos;t have an account? </span>
        <Link href="/register" className="font-medium text-blue-600 hover:underline">
          Create account
        </Link>
      </p>
    </div>
  );
}
