import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import logo from "../../imports/ChatGPT_Image_May_22__2026__12_49_36_PM-1.png";
import backgroundImg from "../../imports/img11.png";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdarkobo";

export function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Failed to submit form",
        );
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          vehicle: "",
          message: "",
        });
      }, 5000);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to submit form. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center">
            <img
              src={logo}
              alt="Consumer Auto Body"
              className="h-36 md:h-40 w-auto mb-8"
            />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Expert Auto Body Repair{" "}
              <span className="whitespace-nowrap">
                in San Francisco
              </span>
            </h2>
            <p className="text-xl mb-6 text-cyan-300 text-center">
              Located in the Mission District with over 30 years
              of experience
            </p>
            <ul className="space-y-3 inline-block text-left">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span>BBB A+ Accredited Business</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span>ASE & I-CAR Certified Technicians</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span>EPA Approved Paint Booths</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span>No Job Too Big or Too Small</span>
              </li>
            </ul>
          </div>

          <div className="bg-white text-neutral-900 rounded-lg shadow-2xl p-8 max-w-md mx-auto w-full">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Get Your Free Estimate
            </h3>

            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-green-600 mb-2">
                  Thank You!
                </h4>
                <p className="text-neutral-600">
                  We'll contact you shortly to discuss your
                  estimate.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                    placeholder="(415) 555-0123"
                  />
                </div>

                <div>
                  <label
                    htmlFor="vehicle"
                    className="block text-sm font-medium mb-2"
                  >
                    Vehicle - Year Make Model *
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                    placeholder="e.g., 2020 Honda Accord"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Tell us about your needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                    placeholder="Describe the work you need done..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-600 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? "Sending..."
                    : "Request Free Estimate"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}