import type { Category } from "@/types/inventory"
import ProductItem from "@/components/product-item"

interface ProductCategoryProps {
  category: Category
}

export default function ProductCategory({ category }: ProductCategoryProps) {
  return (
    <div className="mb-4">
      {/* カテゴリヘッダー */}
      <div className="bg-gray-100 py-2 px-4">
        <h2 className="text-lg font-bold">{category.name}</h2>
      </div>

      {/* テーブルヘッダー */}
      <div className="bg-gray-200 py-1 px-4 grid grid-cols-3 text-sm font-semibold">
        <div className="col-span-1 text-center">商品</div>
        <div className="col-span-1 text-center">未開封</div>
        <div className="col-span-1 text-center">開封済</div>
      </div>

      {/* 商品リスト */}
      <div>
        {category.products.map((product, index) => (
          <ProductItem key={product.id} product={product} isAlternate={index % 2 === 1} />
        ))}
      </div>
    </div>
  )
}

