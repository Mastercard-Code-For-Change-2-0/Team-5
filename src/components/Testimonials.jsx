export default function Testimonials() {
  const feedbacks = [
    { quote: "Thanks to Katalyst Foundation I received a scholarship that changed my life.", author: "Priya S." },
    { quote: "Participating in the health camp helped my village access essential medical care.", author: "Rajesh K." },
    { quote: "The women's workshop gave me skills to start my own small business.", author: "Meera P." },
  ];

  return (
    <section className="py-16 bg-emerald-50 text-center font-sans">
      <h2 className="text-3xl font-bold mb-10 text-emerald-700">What People Say</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {feedbacks.map((f, i) => (
          <div key={i} className="p-6 bg-white shadow rounded-2xl">
            <p className="italic text-gray-700">"{f.quote}"</p>
            <p className="mt-4 font-semibold text-emerald-800">- {f.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
