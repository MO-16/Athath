import { Link } from 'wouter';
import { ArrowLeft, Star, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';

const AboutPage = () => {
  const stats = [
    { icon: Star, value: '+١٠,٠٠٠', label: 'عميل سعيد' },
    { icon: Users, value: '+١٥', label: 'سنة خبرة' },
    { icon: Award, value: '+٥٠', label: 'جائزة تميز' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-6 hover:bg-white/20 px-4 py-2 rounded-lg transition-all"
          >
            <ArrowLeft size={20} />
            <span>العودة للرئيسية</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🏢 من نحن
          </h1>
          <p className="text-xl opacity-90">
            قصة دار الأثاث - فخامة وأصالة منذ عام ٢٠١٠
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              قصتنا
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              تأسست دار الأثاث عام ٢٠١٠ برؤية واضحة: تقديم أثاث منزلي يجمع بين 
              الأصالة العربية والتصميم العصري الحديث. نؤمن بأن المنزل هو القلب 
              النابض للحياة العائلية، ولذلك نسعى لتوفير قطع أثاث تعكس الذوق الرفيع 
              وتوفر الراحة اللازمة.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              نستخدم أجود الخامات المحلية والعالمية، ونعمل مع أمهر الحرفيين 
              لنضمن لك منتجاً يدوم طويلاً ويحافظ على جماله عبر السنين.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-6 text-center card-hover fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Values */}
          <div className="bg-white rounded-2xl shadow-md p-8 mt-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              قيمنا
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">الجودة أولاً</h3>
                  <p className="text-gray-600">نرفض المساومة على الجودة في أي مرحلة من مراحل الإنتاج</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">رضا العملاء</h3>
                  <p className="text-gray-600">نسعداء عملاؤنا هو هدفنا الأساسي وغايتنا النهائية</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">الابتكار المستمر</h3>
                  <p className="text-gray-600">نطور تصاميمنا باستمرار لمواكبة أحدث صيحات الموضة</p>
                </div>
              </div>
            </div>
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

export default AboutPage;
