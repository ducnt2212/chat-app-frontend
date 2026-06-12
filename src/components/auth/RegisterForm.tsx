"use client";

import { AtSign, Lock, User } from "lucide-react";
import { SubmitEvent, useState } from "react";

import { Button, Input, Label } from "@/components/ui";
import { ApiError } from "@/lib/api-error";
import { register } from "@/services/auth";

export default function RegisterForm() {
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
  );
}
