import { Link } from 'wouter';
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    { icon: Phone, label: 'الهاتف', value: '٩٢٠٠٠٠٠٠٠', color: 'from-green-400 to-green-600', bg: 'bg-green-100' },
    { icon: Mail, label: 'البريد', value: 'info@darathath.com', color: 'from-blue-400 to-blue-600', bg: 'bg-blue-100' },
    { icon: MapPin, label: 'العنوان', value: 'الرياض، المملكة العربية السعودية', color: 'from-red-400 to-red-600', bg: 'bg-red-100' },
    { icon: Clock, label: 'ساعات العمل', value: '٩ ص - ١٠ م يومياً', color: 'from-purple-400 to-purple-600', bg: 'bg-purple-100' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 text-white py-16 px-4 rounded-3xl mx-4 mt-6 shadow-2xl">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-6 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-all font-bold"
          >
            <ArrowLeft size={24} />
            <span className="text-lg">العودة للرئيسية</span>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            📞 اتصل بنا
          </h1>
          <p className="text-2xl opacity-95">
            نحن هنا لمساعدتك - كلمنا في أي وقت! 💬
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-10 border-4 border-blue-200">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
              <span>✉️</span> أرسل لنا رسالة
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-3 font-bold text-lg">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-400 text-lg transition-all"
                  placeholder="اكتب اسمك هنا..."
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-3 font-bold text-lg">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-400 text-lg transition-all"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-3 font-bold text-lg">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-400 text-lg transition-all"
                  placeholder="٠٥xxxxxxxx"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-3 font-bold text-lg">
                  الرسالة
                </label>
                <textarea
                  rows={5}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-400 text-lg resize-none transition-all"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-5 rounded-2xl font-bold text-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Send size={24} />
                <span>إرسال الرسالة 🚀</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-10 border-4 border-green-200">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
                <span>📱</span> معلومات التواصل
              </h2>
              <div className="space-y-5">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-5 p-5 rounded-2xl hover:bg-gray-50 transition-all transform hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg`}>
                        <Icon size={32} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-medium">{item.label}</div>
                        <div className="text-xl font-bold text-gray-800">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-3xl shadow-xl p-10 border-4 border-purple-200">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <span>🗺️</span> موقعنا
              </h2>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-56 flex items-center justify-center shadow-inner">
                <div className="text-center text-gray-500">
                  <MapPin size={64} className="mx-auto mb-3 text-purple-500" />
                  <p className="text-xl font-bold">خريطة تفاعلية</p>
                  <p className="text-lg mt-1">الرياض، المملكة العربية السعودية 🇸🇦</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
