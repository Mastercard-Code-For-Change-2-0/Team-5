import { BookOpen, HeartPulse, Handshake } from "lucide-react";

export default function AboutUs() {
  const items = [
    {
      icon: <BookOpen className="w-10 h-10 text-yellow-500" />,
      title: "Education",
      desc: "Providing scholarships, school supplies, and digital literacy programs to underprivileged children."
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-red-500" />,
      title: "Health",
      desc: "Organizing health camps, vaccination drives, and wellness programs for communities in need."
    },
    {
      icon: <Handshake className="w-10 h-10 text-green-600" />,
      title: "Community Support",
      desc: "Empowering women with vocational training, counseling, and skill development."
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">About Us</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="p-6 bg-white shadow rounded-2xl">
            {item.icon}
            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
