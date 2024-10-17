"use client"
import Link from "next/link"
import { Button } from "@/_components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/_components/ui/card"
import { Input } from "@/_components/ui/input"
import { Label } from "@/_components/ui/label"
import { cn } from "@/_components/lib/utils";
import GridPattern from "@/_components/ui/grid-pattern";

export default function LoginPage() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="z-10">
        <LoginForm />
      </div>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(1024px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}

function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Login to Amrita Centre for Entrepreneurship</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="tyler@fightclub.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required placeholder="••••••••" />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Outlook
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
