import { Link } from 'wouter';
import { ArrowLeft, Star, Users, Award } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Star, value: '+١٠,٠٠٠', label: 'عميل سعيد', color: 'from-yellow-400 to-orange-400' },
    { icon: Users, value: '+١٥', label: 'سنة خبرة', color: 'from-blue-400 to-purple-400' },
    { icon: Award, value: '+٥٠', label: 'جائزة تميز', color: 'from-pink-400 to-red-400' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 text-white py-16 px-4 rounded-3xl mx-4 mt-6 shadow-2xl">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-6 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-all font-bold"
          >
            <ArrowLeft size={24} />
            <span className="text-lg">العودة للرئيسية</span>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            🏢 من نحن
          </h1>
          <p className="text-2xl opacity-95">
            قصة دار الأثاث - نحكيها لك بكل حب! 💕
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4">
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-8 border-4 border-purple-200">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 flex items-center gap-3">
            <span>📖</span> قصتنا
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            بدأت حكايتنا عام ٢٠١٠ بحلم بسيط: نريد كل عائلة تكون عندها أثاث جميل ومريح! 
            فكرنا... ليش ما نصنع أثاث يجمع بين جمال الماضي وراحة الحاضر؟
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            اليوم، فريقنا مكون من أمهر المصممين واللي يحبون شغلهم! نختار أجود الخامات 
            ونصنع كل قطعة بحب عشان تنور بيوتكم وتخليها دافئة ومريحة. 🏡✨
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-purple-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${stat.color} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <Icon size={48} className="text-white" />
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-3">
                  {stat.value}
                </div>
                <div className="text-xl text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Values */}
        <div className="bg-white rounded-3xl shadow-xl p-10 border-4 border-green-200">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 flex items-center gap-3">
            <span>💎</span> قيمنا اللي نؤمن فيها
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-5 p-5 rounded-2xl hover:bg-green-50 transition-all">
              <div className="bg-gradient-to-br from-green-400 to-green-600 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white text-2xl font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-xl mb-2">الجودة أولاً وأخيراً</h3>
                <p className="text-gray-600 text-lg">ما نقبل بأي شيء غير الأفضل! كل قطعة نطلعها لازم تكون تحفة فنية.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 p-5 rounded-2xl hover:bg-blue-50 transition-all">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white text-2xl font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-xl mb-2">ابتسامتكم هدفنا</h3>
                <p className="text-gray-600 text-lg">سعادة عملائنا هي أهم شيء عندنا. رضاكم هو نجاحنا!</p>
              </div>
            </div>
            <div className="flex items-start gap-5 p-5 rounded-2xl hover:bg-orange-50 transition-all">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white text-2xl font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-xl mb-2">دائماً مبدعين</h3>
                <p className="text-gray-600 text-lg">نطور تصاميمنا دائماً عشان نواكب كل جديد ونخلي بيوتكم أحلى!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
