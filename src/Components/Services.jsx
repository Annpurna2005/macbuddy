import { FaPaw } from "react-icons/fa";
export default function Services() {
    const services = [
      {
        title: "Pet Grooming",
        description:
          "Abore et dolore magna aliqua ut enim minim veniam quis nostrud exercitation ullamco laboris nisi aliquip eiusmod tempor incididunt labore.",
        icon: "✂️",
      },
      {
        title: "Pet Adoption",
        description:
          "Abore et dolore magna aliqua ut enim minim veniam quis nostrud exercitation ullamco laboris nisi aliquip eiusmod tempor incididunt labore.",
        icon: "🐶",
      },
      {
        title: "Pet Training",
        description:
          "Abore et dolore magna aliqua ut enim minim veniam quis nostrud exercitation ullamco laboris nisi aliquip eiusmod tempor incididunt labore.",
        icon: "🐕",
      },
      {
        title: "Pet Vaccination",
        description:
          "Abore et dolore magna aliqua ut enim minim veniam quis nostrud exercitation ullamco laboris nisi aliquip eiusmod tempor incididunt labore.",
        icon: "💉",
      },
    ];
  
    return (
      <section className="py-12 bg-white text-black text-center">
        <h2 className="text-3xl font-bold mb-8">Services of Pawrex</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-4 border"
            >
              <div className="text-4xl">{service.icon}</div>
              <div className="text-left">
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  