"use client"

import { useState } from "react"
import { Home, FolderOpen, Settings } from "lucide-react"
import ProductCategory from "@/components/product-category"
import type { Category } from "@/types/inventory"

// 初期データ
const initialCategories: Category[] = [
  {
    id: 1,
    name: "バス・トイレタリー",
    products: [
      {
        id: 1,
        name: "シャンプー",
        unopenedCount: 2,
        openedCount: 1,
        image: null,
      },
      {
        id: 2,
        name: "ボディーソープ",
        unopenedCount: 3,
        openedCount: 1,
        image: null,
      },
    ],
  },
  {
    id: 2,
    name: "キッチン用品",
    products: [
      {
        id: 3,
        name: "食器用洗剤",
        unopenedCount: 1,
        openedCount: 1,
        image: null,
      },
      {
        id: 4,
        name: "キッチンスポンジ",
        unopenedCount: 2,
        openedCount: 1,
        image: null,
      },
    ],
  },
]

export default function InventoryApp() {
  const [categories, setCategories] = useState<Category[]>(initialCategories)
  const [activeTab, setActiveTab] = useState<"home" | "categories" | "settings">("home")

  return (
    <div className="flex flex-col h-screen bg-white shadow-lg rounded-lg overflow-hidden">
      {/* ステータスバー */}
      <div className="h-7 bg-gray-100"></div>

      {/* ヘッダー */}
      <div className="bg-blue-100 py-3 px-4 text-center font-bold text-xl">在庫管理</div>

      {/* メインコンテンツ - スクロール可能 */}
      <div className="flex-1 overflow-y-auto">
        {categories.map((category) => (
          <ProductCategory key={category.id} category={category} />
        ))}
      </div>

      {/* ナビゲーションバー */}
      <div className="bg-gray-100 py-2 border-t border-gray-300">
        <div className="flex justify-around items-center">
          <button
            className={`flex flex-col items-center p-2 ${activeTab === "home" ? "text-blue-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("home")}
          >
            <Home size={20} />
            <span className="text-xs mt-1">ホーム</span>
          </button>
          <button
            className={`flex flex-col items-center p-2 ${
              activeTab === "categories" ? "text-blue-600" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("categories")}
          >
            <FolderOpen size={20} />
            <span className="text-xs mt-1">カテゴリ</span>
          </button>
          <button
            className={`flex flex-col items-center p-2 ${activeTab === "settings" ? "text-blue-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("settings")}
          >
            <Settings size={20} />
            <span className="text-xs mt-1">設定</span>
          </button>
        </div>
      </div>
    </div>
  )
}

