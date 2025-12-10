import React from 'react';
import { Edit2, Trash2, DollarSign, Package } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Product } from './products';

interface ProductListProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export function ProductList({ products, onEdit, onDelete }: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-16 text-center shadow-lg">
        <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Package className="w-10 h-10 text-gray-400" />
        </div>
        <h3 className="text-gray-900 mb-2">No products yet</h3>
        <p className="text-gray-600 max-w-sm mx-auto">Get started by adding your first product to begin managing your inventory</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
        >
          {/* Product Image */}
          <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
            {product.imageUrl ? (
              <ImageWithFallback
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Package className="w-16 h-16 text-gray-300" />
              </div>
            )}
            {/* Stock Badge */}
            <div className="absolute top-3 right-3">
              <div className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5 text-indigo-600" />
                <span className="text-gray-900">{product.stock}</span>
              </div>
            </div>
            {/* Category Badge */}
            <div className="absolute top-3 left-3">
              <div className="px-3 py-1.5 bg-indigo-600/90 backdrop-blur-sm rounded-full shadow-lg">
                <span className="text-white">{product.category}</span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-6">
            <h3 className="text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {product.description}
            </p>

            {/* Price & Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-1">
                <DollarSign className="w-5 h-5 text-green-600" />
                <span className="text-gray-900">{product.price.toFixed(2)}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onEdit(product)}
                  className="p-2.5 text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all hover:scale-110"
                  aria-label="Edit product"
                >
                  <Edit2 className="w-4.5 h-4.5" />
                </button>
                <button
                  onClick={() => {
                    if (confirm('Are you sure you want to delete this product?')) {
                      onDelete(product.id);
                    }
                  }}
                  className="p-2.5 text-red-600 hover:bg-red-50 rounded-xl transition-all hover:scale-110"
                  aria-label="Delete product"
                >
                  <Trash2 className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
