import { Link } from 'wouter';
import { Package, Truck, Shield, Smile } from 'lucide-react';
import Navigation from '../components/Navigation';

const HomePage = () => {
  const features = [
    { icon: Package, title: 'جودة عالية', description: 'أفضل الخامات والصناعة' },
    { icon: Truck, title: 'توصيل سريع', description: 'نصلك أينما كنت' },
    { icon: Shield, title: 'ضمان ذهبي', description: 'ضمان على جميع المنتجات' },
    { icon: Smile, title: 'رضا العملاء', description: 'آلاف العملاء السعداء' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
            🏠 دار الأثاث
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            فخامة وأصالة - أثاث منزلي فخم يجمع بين الأصالة والمودرن
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl card-hover"
          >
            تصفح منتجاتنا 🛋️
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            لماذا تختار دار الأثاث؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md text-center card-hover fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            جاهز لتحويل منزلك؟
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            اكتشف مجموعتنا الفاخرة من الأثاث العصري والكلاسيكي
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              تسوق الآن 🛒
            </Link>
            <Link
              href="/contact"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300"
            >
              تواصل معنا 📞
            </Link>
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

export default HomePage;
