import { Link } from 'wouter';
import { Package, Truck, Shield, Smile } from 'lucide-react';

const HomePage = () => {
  const features = [
    { icon: Package, title: 'جودة عالية', description: 'أفضل الخامات والصناعة', color: 'blue' },
    { icon: Truck, title: 'توصيل سريع', description: 'نصلك أينما كنت', color: 'green' },
    { icon: Shield, title: 'ضمان ذهبي', description: 'ضمان على جميع المنتجات', color: 'yellow' },
    { icon: Smile, title: 'رضا العملاء', description: 'آلاف العملاء السعداء', color: 'purple' },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      purple: 'bg-purple-100 text-purple-600',
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white py-24 px-4 rounded-3xl mx-4 mt-6 shadow-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-bounce">
            🏠 دار الأثاث
          </h1>
          <p className="text-2xl md:text-3xl mb-10 opacity-95 font-light">
            ✨ أثاث أحلامك بين يديك - فخامة وأصالة للأطفال والكبار
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-purple-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-300 hover:scale-110 transition-all duration-300 shadow-2xl"
          >
            🛋️ هيا نكتشف المنتجات!
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          🌟 لماذا تحبنا العائلات؟
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-xl text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer border-4 border-transparent hover:border-blue-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${getColorClasses(feature.color)} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5`}>
                  <Icon size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100 py-16 px-4 rounded-3xl mx-4 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            🎉 جاهز لتزيين غرفتك؟
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            اكتشف مجموعتنا الرائعة من الأثاث الملون والمريح!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/products"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:from-blue-600 hover:to-purple-600 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              🛒 تسوق الآن
            </Link>
            <Link
              href="/contact"
              className="bg-white text-purple-600 border-4 border-purple-500 px-10 py-5 rounded-full font-bold text-xl hover:bg-purple-50 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              📞 كلمنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
