import { useState } from 'react';
import { Plus, LogOut, Package, TrendingUp, DollarSign } from 'lucide-react';
import { ProductList } from './product-list';
import { ProductForm } from './product-form';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl?: string;
}

interface ProductsProps {
  onLogout: () => void;
}

export function Products({ onLogout }: ProductsProps) {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Wireless Headphones',
      description: 'Premium noise-canceling wireless headphones with 30-hour battery life',
      price: 299.99,
      category: 'Electronics',
      stock: 45,
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzY0NzM2NjkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '2',
      name: 'Smart Watch',
      description: 'Fitness tracking smartwatch with heart rate monitor and GPS',
      price: 399.99,
      category: 'Electronics',
      stock: 32,
      imageUrl: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNofGVufDF8fHx8MTc2NDc5OTYwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '3',
      name: 'Laptop Stand',
      description: 'Ergonomic aluminum laptop stand with adjustable height',
      price: 49.99,
      category: 'Accessories',
      stock: 78,
      imageUrl: 'https://images.unsplash.com/photo-1623251606108-512c7c4a3507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBzdGFuZHxlbnwxfHx8fDE3NjQ3MDc1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ]);
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleAddProduct = (product: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...product,
      id: Date.now().toString(),
    };
    setProducts([...products, newProduct]);
    setIsFormOpen(false);
  };

  const handleUpdateProduct = (product: Product) => {
    setProducts(products.map(p => p.id === product.id ? product : p));
    setEditingProduct(null);
    setIsFormOpen(false);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingProduct(null);
  };

  const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-gray-900">Product Management</h1>
                <p className="text-gray-600">Manage your product inventory with ease</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-5 py-2.5 text-gray-700 hover:bg-gray-100 rounded-xl transition-all border border-gray-200 hover:border-gray-300"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-2">Total Products</p>
                <p className="text-gray-900 mb-1">{products.length}</p>
                <div className="flex items-center gap-1 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12% this month</span>
                </div>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Package className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-2">Total Value</p>
                <p className="text-gray-900 mb-1">
                  ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                <div className="flex items-center gap-1 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>+8% this month</span>
                </div>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-2">Total Stock</p>
                <p className="text-gray-900 mb-1">
                  {totalStock} units
                </p>
                <div className="flex items-center gap-1 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>+15% this month</span>
                </div>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white">#</span>
              </div>
            </div>
          </div>
        </div>

        {/* Add Product Section */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-900 mb-1">Product Catalog</h2>
              <p className="text-gray-600">Browse and manage your complete product inventory</p>
            </div>
            <button
              onClick={() => setIsFormOpen(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Plus className="w-5 h-5" />
              <span className="hidden sm:inline">Add Product</span>
            </button>
          </div>
        </div>

        {/* Product List */}
        <ProductList
          products={products}
          onEdit={handleEdit}
          onDelete={handleDeleteProduct}
        />
      </main>

      {/* Product Form Modal */}
      {isFormOpen && (
        <ProductForm
          product={editingProduct}
          onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
}