import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


const footerSections = [
  {
    title: "Kurumsal",
    links: [
      { name: "Biz Kimiz?", href: "/about" },
      { name: "İletişim", href: "/contact" },
      { name: "Eposta: info@spelya.com", href: "mailto:info@spelya.com" }
    ]
  },
  {
    title: "Spelya",
    links: [
      { name: "Referanslar", href: "/about" },
      { name: "Spelya Lisansları", href: "/contact" },
      { name: "Örnek Tasarımlar", href: "/contact" },
      { name: "Param Sanal Pos", href: "/contact" },
      { name: "PayTR Sanal Pos", href: "/contact" }
    ]
  },
  {
    title: "Yasal",
    links: [
      { name: "Nesafeli Satış Sözleşmesi", href: "/about" },
      { name: "İptal ve İade Koşulları", href: "/about" },
      { name: "Gizlilik ve Güvenlik", href: "/contact" },
      { name: "Kalıcı Sözleşmesi", href: "/contact" },
      { name: "KVKK Aydınlatma Metni", href: "/contact" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t-2 border-primary flex justify-center items-center flex-col text-gray-900">
      <div className="container px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index} className="w-full">
              <h1 className="text-2xl font-semibold mb-5 uppercase">{section.title}</h1>
              <div className="flex flex-col space-y-3 text-[#4A4A4A]">
                {section.links.map((link, linkIndex) => (
                  <Link 
                    key={linkIndex} 
                    href={link.href} 
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Info Section */}
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-5 uppercase">İletişim</h1>
            <div className="flex flex-col space-y-3 text-[#4A4A4A]">
              <a href="tel:+1234567890" className="flex items-center justify-center bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-all mb-4 w-[80%]">
                <FaPhoneAlt className="mr-2" />
                Telefon
              </a>
              <a href="mailto:info@spelya.com" className="flex items-center justify-center bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all w-[80%]">
                <IoMail className="mr-2" />
                Mail
              </a>
            </div>
          </div>
        </div>

        <div className="w-full border-t-2 border-primary py-6 mt-8">
          <p className="text-center text-sm">
            <strong>SPELYA</strong> © Copyright {new Date().getFullYear()} - Her hakkı saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
