import { Link } from 'wouter';
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Navigation from '../components/Navigation';

const ContactPage = () => {
  const contactInfo = [
    { icon: Phone, label: 'الهاتف', value: '٩٢٠٠٠٠٠٠٠', color: 'bg-green-100 text-green-600' },
    { icon: Mail, label: 'البريد', value: 'info@darathath.com', color: 'bg-blue-100 text-blue-600' },
    { icon: MapPin, label: 'العنوان', value: 'الرياض، المملكة العربية السعودية', color: 'bg-red-100 text-red-600' },
    { icon: Clock, label: 'ساعات العمل', value: '٩ ص - ١٠ م يومياً', color: 'bg-purple-100 text-purple-600' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-6 hover:bg-white/20 px-4 py-2 rounded-lg transition-all"
          >
            <ArrowLeft size={20} />
            <span>العودة للرئيسية</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            📞 اتصل بنا
          </h1>
          <p className="text-xl opacity-90">
            نحن هنا لمساعدتك - تواصل معنا في أي وقت
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                أرسل لنا رسالة
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="٠٥xxxxxxxx"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    الرسالة
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  <span>إرسال الرسالة</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  معلومات التواصل
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                          <Icon size={24} />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">{item.label}</div>
                          <div className="text-lg font-bold text-gray-800">{item.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  موقعنا
                </h2>
                <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin size={48} className="mx-auto mb-2" />
                    <p>خريطة تفاعلية</p>
                    <p className="text-sm">الرياض، المملكة العربية السعودية</p>
                  </div>
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

export default ContactPage;
