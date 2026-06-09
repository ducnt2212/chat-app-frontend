"use client";

import { AtSign, Cloud, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitEvent, useState } from "react";

import { Button, Input, Label } from "@/components/ui";
import { ApiError } from "@/lib/api-error";
import { login } from "@/services/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { token } = await login(email, password);
      localStorage.setItem("token", token);
      router.push("/chat");
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.getMessage());
      } else {
        setError("There was something wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background p-5">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-50">
        <div className="absolute -left-1/4 -top-1/2 h-[150%] w-[150%] bg-[radial-gradient(circle_at_center,#d8e2ff_0%,transparent_70%)]" />
      </div>

      <main className="z-10 w-full max-w-[440px]">
        <div className="mb-10 text-center">
          <div className="airy-shadow mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-[#2170e4] text-white">
            <Cloud className="size-8" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#1a1c1c] md:text-3xl">
            Meet
          </h1>
          <p className="mt-2 text-sm tracking-wide text-[#5c5f61]">
            Effortless communication, redefined.
          </p>
        </div>

        <div className="airy-shadow rounded-xl bg-white p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="ml-1 text-xs font-medium text-[#424754]"
              >
                Email address
              </Label>
              <div className="relative">
                <AtSign className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#727785]" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  placeholder="name@example.com"
                  className="h-auto rounded-full border-none bg-[#f3f3f4] py-4 pl-12 pr-4 text-sm shadow-none focus-visible:ring-2 focus-visible:ring-[#d8e2ff]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="ml-1 text-xs font-medium text-[#424754]"
              >
                Password
              </Label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#727785]" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  placeholder="••••••••"
                  className="h-auto rounded-full border-none bg-[#f3f3f4] py-4 pl-12 pr-4 text-sm shadow-none focus-visible:ring-2 focus-visible:ring-[#d8e2ff]"
                />
              </div>
            </div>

            {error && (
              <p className="text-sm text-red-600" role="alert">
                {error}
              </p>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="h-auto w-full rounded-full bg-primary py-4 text-base font-normal airy-shadow hover:bg-[#004395]"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </div>

        <p className="mt-10 text-center text-sm tracking-wide text-[#5c5f61]">
          <span>Don&apos;t have an account? </span>
          <Link
            href="/register"
            className="font-semibold text-primary hover:underline"
          >
            Create account
          </Link>
        </p>
      </main>
    </div>
  );
}
