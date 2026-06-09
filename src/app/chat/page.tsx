import Sidebar from "@/components/layout/Sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ChatPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />

      <main className="flex min-w-0 flex-1 flex-col bg-white p-6">
        <Card className="border-none airy-shadow">
          <CardHeader>
            <CardTitle>Chat Area</CardTitle>
            <CardDescription>
              Message thread and input will go here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Placeholder content</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
