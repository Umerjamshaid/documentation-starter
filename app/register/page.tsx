import { Metadata } from "next"
import Link from "next/link"
import { RegisterForm } from "@/components/register-form"

export const metadata: Metadata = {
  title: "Register | YourProduct",
  description: "Create an account",
}

export default function RegisterPage() {
  return (
    <div className="container flex h-[calc(100vh-3.5rem)] w-full flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your details below to create your account
          </p>
        </div>
        <RegisterForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/login"
            className="hover:text-brand underline underline-offset-4"
          >
            Already have an account? Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

