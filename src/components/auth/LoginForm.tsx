"use client";

import { AtSign, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitEvent, useState } from "react";

import { Button, Input, Label } from "@/components/ui";
import { ApiError } from "@/lib/api-error";
import { login } from "@/services/auth";

export default function LoginForm() {
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="ml-1 block text-xs font-medium text-[#424754]"
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
            className="h-auto rounded-full border-none bg-[#f3f3f4] py-4 pl-12 pr-4 text-sm focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-[#d8e2ff]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="password"
          className="ml-1 block text-xs font-medium text-[#424754]"
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
            className="h-auto rounded-full border-none bg-[#f3f3f4] py-4 pl-12 pr-4 text-sm focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-[#d8e2ff]"
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
        className="h-auto w-full rounded-full py-4 text-base font-normal airy-shadow hover:bg-[#004395]"
      >
        {isLoading ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}
