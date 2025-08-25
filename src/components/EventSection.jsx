import { Stethoscope, GraduationCap, Users } from "lucide-react";

export default function EventsSection() {
  const events = [
    {
      icon: <Stethoscope className="w-10 h-10 text-red-500" />,
      title: "Health Camp",
      desc: "Free health checkups and awareness program for rural communities.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-blue-500" />,
      title: "Education Drive",
      desc: "Providing books and digital tools to underprivileged students.",
    },
    {
      icon: <Users className="w-10 h-10 text-pink-500" />,
      title: "Women Empowerment Workshop",
      desc: "Skill training and awareness sessions for women in local communities.",
    },
  ];

  return (
    <section className="py-16 bg-pink-50 text-center font-sans">
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-emerald-700">Upcoming Events</h2>
        <p className="text-gray-600 mt-2">
          Join our initiatives and be part of the change we aim to create.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {events.map((event, i) => (
          <div
            key={i}
            className="p-6 bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center">{event.icon}</div>
            <h3 className="text-xl font-semibold mt-4 text-emerald-800">{event.title}</h3>
            <p className="text-gray-600 mt-2 mb-6">{event.desc}</p>
            <button
              type="button"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2 rounded-xl transition-colors duration-200"
            >
              Register
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
