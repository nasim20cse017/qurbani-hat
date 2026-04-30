import { FaShieldAlt, FaTruck, FaStar } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose QurbaniHat?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6">
            <FaShieldAlt className="text-5xl text-green-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Verified Sellers</h3>
            <p className="text-gray-600">All animals come from trusted farms.</p>
          </div>
          <div className="p-6">
            <FaTruck className="text-5xl text-green-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Home Delivery</h3>
            <p className="text-gray-600">We deliver right to your doorstep.</p>
          </div>
          <div className="p-6">
            <FaStar className="text-5xl text-green-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">5-Star Support</h3>
            <p className="text-gray-600">Dedicated customer care before and after Qurbani.</p>
          </div>
        </div>
      </div>
    </section>
  );
}