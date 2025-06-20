import PricingCard from "@/components/PricingCard";

export default function Home() {
  return (
  <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
  <div className="max-w-6xl w-full">
    <h1 className="text-4xl font-bold text-center mb-10 text-gray-600">Our Plans</h1>

    <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
      <PricingCard title="Starter" description="Perfect for hobby projects and testing" price="$0" />
      <PricingCard title="Pro" description="For growing teams and production apps." price="$19/mo" />
      <PricingCard title="Enterprise" description="Advanced features and dedicated support." price="Contact us" />
    </div>
  </div>
</main>
  )
}