import React from 'react';

const StrategicVision = () => {
  const services = [
    {
      title: 'Traditional Temple Ornaments',
      description: 'We offer bespoke ornaments tailored to specific temple requirements and spiritual traditions.',
      items: [
        'Design and Fabrication: Creation of bespoke ornaments like tailored to specific temple requirements and spiritual traditions.',
        "Material Selection: Offering a range of materials, including gold, Gold plated .  silver and precious stones, to match the temple's aesthetic and religious significance.",
      ],
    },
    {
      title: 'Statue Crafting',
      description: 'Designing and crafting statues of deities, saints, and other sacred figures.',
      items: [
        'Custom Statues: Designing and crafting statues of deities, saints, and other sacred figures to meet specific religious and artistic needs.',
        'Restoration and Preservation: Repairing and restoring antique or damaged statues to their original glory, using techniques that preserve historical and cultural value.',
      ],
    },
    {
      title: 'Temple Interior and Exterior',
      description: 'Expert advice on temple design, along with installation services for decorative elements.',
      items: [
        'Design Consultation: Providing expert advice on the design and arrangement of temple interiors, including altar setups and decorative elements like Brass, Silver sheet works, Kodimaram, Kalasam, ',
        'Installation Services: Professional installation of ornaments, statues, and other tradional decorative elements to ensure a harmonious and sacred environment.',
        'Gopurams and Mandapas: Desiging sheet works  for  Gopuram,  Mandapams, Pillars to enhance temple architecture.',
      ],
    },
    {
      title: 'Specialized Offerings',
      description: 'We provide ceremonial items and festive decorations.',
      items: [
        'Ceremonial Items: Crafting items used in temple rituals and ceremonies, such as bell sets, lamps, and ceremonial vessels.',
        'Festive Decorations: Creating temporary or permanent decorations for festivals and special religious events.',
      ],
    },
    {
      title: 'Maintenance and Upkeep',
      description: 'Regular cleaning, polishing, and inspection of temple artifacts.',
      items: [
        'Cleaning and Polishing: Regular maintenance services to clean and polish ornaments and statues, preserving their appearance and integrity.',
        'Inspection Services: Periodic inspections to identify and address any wear or damage to temple artifacts.',
      ],
    },
    {
      title: 'Project Management',
      description: 'Managing entire projects from concept to installation.',
      items: [
        'Turnkey Solutions: Managing entire projects from design conceptualization to final installation, ensuring seamless execution and high-quality results.',
        'Client Coordination: Working closely with temple authorities and stakeholders to meet project requirements and deadlines.',
      ],
    },
  ];

  return (
    <div className="strategic-vision py-10 text-justify px-4 sm:px-20 text-red">
      {/* Strategic Vision Section */}
      <section className="vision-section mb-8">
        <h2 className="text-3xl font-bold mb-4 bg-red text-yellow p-2 bg4 uppercase">Strategic Vision / Mission</h2>
        <p className="mb-4">
          To be the premier provider of exquisite temple ornaments, statues, and other temple-oriented works, renowned for our craftsmanship and dedication to preserving and enhancing the sacred beauty of spiritual and religious art. We aim to blend traditional techniques with innovative design, creating products that not only enrich spiritual practices but also stand as timeless symbols of devotion and cultural heritage.
        </p>
        <p className="mb-4">
          Our vision is to set the benchmark for quality, creativity, and sustainability in the crafting of sacred art, delivering exceptional value to our clients and contributing to the sanctity and magnificence of temples worldwide.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="text-3xl font-bold mb-6 bg-red text-yellow p-2 bg4 uppercase">Our Services</h2>

        {services.map((service, index) => (
          <div key={index} className="service-item mb-8">
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="mb-4">{service.description}</p>
            <ul className="list-disc list-inside">
              {service.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default StrategicVision;
