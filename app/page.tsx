import InventoryApp from "@/components/inventory-app"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md mx-auto">
        <InventoryApp />
      </div>
    </main>
  )
}

