// TopBreeds.js
export default function TopBreeds() {
  const breeds = [
    { name: "Sahiwal", description: "High-quality meat, resilient" },
    { name: "Black Bengal", description: "Famous for tender meat" },
    { name: "Friesian Cross", description: "Large size, excellent yield" },
    { name: "Jamunapari", description: "Premium goat breed" },
  ];
  return (
    <section className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Top Breeds for Qurbani</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {breeds.map((breed, i) => (
          <div key={i} className="p-4 border rounded bg-green-50 flex items-center gap-3">
            <span className="text-2xl">🏆</span>
            <div>
              <h4 className="font-semibold">{breed.name}</h4>
              <p className="text-sm text-gray-600">{breed.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}