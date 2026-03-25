import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: 'كنبة مودرن',
      category: 'غرفة المعيشة',
      price: '٢٥٠٠ ر.س',
      image: '🛋️',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      name: 'طاولة طعام',
      category: 'غرفة الطعام',
      price: '١٨٠٠ ر.س',
      image: '🪑',
      color: 'bg-green-500',
    },
    {
      id: 3,
      name: 'سرير ملكي',
      category: 'غرفة النوم',
      price: '٣٢٠٠ ر.س',
      image: '🛏️',
      color: 'bg-purple-500',
    },
    {
      id: 4,
      name: 'خزانة ملابس',
      category: 'غرفة النوم',
      price: '٢٨٠٠ ر.س',
      image: '🚪',
      color: 'bg-orange-500',
    },
    {
      id: 5,
      name: 'مكتب عمل',
      category: 'المكتب',
      price: '١٥٠٠ ر.س',
      image: '💼',
      color: 'bg-red-500',
    },
    {
      id: 6,
      name: 'أريكة زاوية',
      category: 'غرفة المعيشة',
      price: '٣٥٠٠ ر.س',
      image: '🪟',
      color: 'bg-indigo-500',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-green-600 to-teal-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-6 hover:bg-white/20 px-4 py-2 rounded-lg transition-all"
          >
            <ArrowLeft size={20} />
            <span>العودة للرئيسية</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🛍️ منتجاتنا
          </h1>
          <p className="text-xl opacity-90">
            اكتشف مجموعتنا الفاخرة من الأثاث
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden card-hover fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Product Image Placeholder */}
                <div className={`${product.color} h-48 flex items-center justify-center`}>
                  <span className="text-8xl">{product.image}</span>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-3 mb-2 text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">
                    {product.price}
                  </p>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                    أضف للسلة 🛒
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2026 دار الأثاث. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;
