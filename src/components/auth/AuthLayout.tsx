import { Cloud } from "lucide-react";

type AuthLayoutProps = {
  subtitle: string;
  children: React.ReactNode;
  footer: React.ReactNode;
};

export default function AuthLayout({
  subtitle,
  children,
  footer,
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-5">
      <main className="w-full max-w-[440px]">
        <div className="mb-10 text-center">
          <div className="airy-shadow mx-auto mb-6 inline-flex size-16 items-center justify-center rounded-full bg-[#2170e4] text-white">
            <Cloud className="size-8" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Meet
          </h1>
          <p className="mt-2 text-sm tracking-wide text-[#5c5f61]">{subtitle}</p>
        </div>

        <div className="airy-shadow rounded-xl bg-white p-6 md:p-10">
          {children}
        </div>

        {footer}
      </main>
    </div>
  );
}
