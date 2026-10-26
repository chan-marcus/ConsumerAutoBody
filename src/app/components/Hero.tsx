import { CheckCircle2 } from "lucide-react";
import logo from "../../imports/logo.webp";
import backgroundImg from "../../imports/hero-bg.webp";
import { EstimateForm } from "./EstimateForm";

export function Hero() {
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
              width={694}
              height={360}
              className="h-36 md:h-40 w-auto mb-8"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Expert Auto Body Repair{" "}
              <span className="whitespace-nowrap">
                in San Francisco
              </span>
            </h1>
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

          <EstimateForm />
        </div>
      </div>
    </section>
  );
}
