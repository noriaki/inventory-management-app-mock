import { Camera } from "lucide-react"
import type { Product } from "@/types/inventory"

interface ProductItemProps {
  product: Product
  isAlternate?: boolean
}

export default function ProductItem({ product, isAlternate = false }: ProductItemProps) {
  // 未開封アイテムの丸を生成
  const renderUnopenedDots = () => {
    return Array.from({ length: product.unopenedCount }).map((_, index) => (
      <div key={`unopened-${index}`} className="w-5 h-5 rounded-full bg-green-100 border border-green-300"></div>
    ))
  }

  // 開封済みアイテムの丸を生成
  const renderOpenedDots = () => {
    return Array.from({ length: product.openedCount }).map((_, index) => (
      <div key={`opened-${index}`} className="w-5 h-5 rounded-full bg-yellow-100 border border-yellow-300"></div>
    ))
  }

  return (
    <div className={`py-3 px-4 border-b border-gray-200 ${isAlternate ? "bg-gray-50" : "bg-white"}`}>
      <div className="grid grid-cols-3 items-center">
        {/* 商品情報 */}
        <div className="col-span-1 flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-100 rounded border border-gray-300 flex items-center justify-center mb-1">
            {product.image ? (
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-10 h-10 object-cover" />
            ) : (
              <Camera size={16} className="text-gray-500" />
            )}
          </div>
          <span className="text-xs text-center">{product.name}</span>
        </div>

        {/* 未開封アイテム */}
        <div className="col-span-1 flex justify-center gap-2">{renderUnopenedDots()}</div>

        {/* 開封済みアイテム */}
        <div className="col-span-1 flex justify-center gap-2">{renderOpenedDots()}</div>
      </div>
    </div>
  )
}

