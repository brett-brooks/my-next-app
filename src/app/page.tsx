'use client'
import PrimaryButton from "@/components/PrimaryButton";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3x1 font-bold mb-4">Home</h1>
      <PrimaryButton text="Click me!" onClick={() => alert("Hi!")} />
    </main>
  )
}