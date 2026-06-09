"use client";

import { AtSign, Cloud, Lock, User } from "lucide-react";
import Link from "next/link";
import { SubmitEvent, useState } from "react";

import { Button, Input, Label } from "@/components/ui";
import { ApiError } from "@/lib/api-error";
import { register } from "@/services/auth";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await register(username, email, password);
      setSuccess("Account created. You can sign in.");
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.getMessage());
      } else {
        setError("Something went wrong. Please try again.");
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
            Create your account to get started.
          </p>
        </div>

        <div className="airy-shadow rounded-xl bg-white p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="username"
                className="ml-1 text-xs font-medium text-[#424754]"
              >
                Username
              </Label>
              <div className="relative">
                <User className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#727785]" />
                <Input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={isLoading}
                  placeholder="yourname"
                  className="h-auto rounded-full border-none bg-[#f3f3f4] py-4 pl-12 pr-4 text-sm shadow-none focus-visible:ring-2 focus-visible:ring-[#d8e2ff]"
                />
              </div>
            </div>

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
                  autoComplete="new-password"
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

            {success && (
              <p className="text-sm text-green-600" role="status">
                {success}
              </p>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="h-auto w-full rounded-full bg-primary py-4 text-base font-normal airy-shadow hover:bg-[#004395]"
            >
              {isLoading ? "Creating account..." : "Create account"}
            </Button>
          </form>
        </div>

        <p className="mt-10 text-center text-sm tracking-wide text-[#5c5f61]">
          <span>Already have an account? </span>
          <Link
            href="/login"
            className="font-semibold text-primary hover:underline"
          >
            Sign in
          </Link>
        </p>
      </main>
    </div>
  );
}
