import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

const ProductsPage = () => {
  const products = [
    { id: 1, name: 'كنبة مودرن', category: 'غرفة المعيشة', price: '٢٥٠٠ ر.س', image: '🛋️', color: 'from-blue-400 to-blue-600' },
    { id: 2, name: 'طاولة طعام', category: 'غرفة الطعام', price: '١٨٠٠ ر.س', image: '🪑', color: 'from-green-400 to-green-600' },
    { id: 3, name: 'سرير ملكي', category: 'غرفة النوم', price: '٣٢٠٠ ر.س', image: '🛏️', color: 'from-purple-400 to-purple-600' },
    { id: 4, name: 'خزانة ملابس', category: 'غرفة النوم', price: '٢٨٠٠ ر.س', image: '🚪', color: 'from-orange-400 to-orange-600' },
    { id: 5, name: 'مكتب عمل', category: 'المكتب', price: '١٥٠٠ ر.س', image: '💼', color: 'from-red-400 to-red-600' },
    { id: 6, name: 'أريكة زاوية', category: 'غرفة المعيشة', price: '٣٥٠٠ ر.س', image: '🪟', color: 'from-indigo-400 to-indigo-600' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-400 via-teal-400 to-cyan-400 text-white py-16 px-4 rounded-3xl mx-4 mt-6 shadow-2xl">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-6 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-all font-bold"
          >
            <ArrowLeft size={24} />
            <span className="text-lg">العودة للرئيسية</span>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            🛍️ منتجاتنا الرائعة
          </h1>
          <p className="text-2xl opacity-95">
            اختار الأثاث اللي يعجبك ويخلي غرفتك جميلة!
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer border-4 border-transparent hover:border-green-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image Placeholder */}
              <div className={`bg-gradient-to-br ${product.color} h-56 flex items-center justify-center`}>
                <span className="text-9xl">{product.image}</span>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <span className="text-sm bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-full font-medium">
                  {product.category}
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-3 text-gray-800">
                  {product.name}
                </h3>
                <p className="text-3xl font-bold text-green-600 mb-6">
                  {product.price}
                </p>
                <button className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  أضف للسلة 🛒
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
