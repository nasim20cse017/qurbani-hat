// QurbaniTips.js
export default function QurbaniTips() {
  const tips = [
    "Choose a healthy animal with clear eyes and smooth coat.",
    "Ensure the animal meets the minimum age requirement.",
    "Book in advance to avoid last‑minute rush.",
  ];
  return (
    <section className="bg-white py-10 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Qurbani Tips</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tips.map((tip, i) => (
          <div key={i} className="p-6 border rounded-lg shadow-sm bg-green-50">
            <p className="text-gray-700">✨ {tip}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

