import React from 'react'

const About = () => {
  return (
    <>
      <h1 className='text-center font-bold  text-red text-5xl uppercase py-10 sm:py-15'>
        About us
      </h1>
    <section className="overflow-hidden px-10 lg:px-4   pb-12  lg:pb-[40px]  ">
        <div className="container mx-auto">
          <div className="flex gap-10 flex-col lg:flex-row items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-10 ">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://api.shriworks.com/uploads/2021_08_17_19bc500967.jpg"
                      alt=""
                      className="w-full border-4 border-red border-inset rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://api.shriworks.com/uploads/2020_10_31_f3e421dc45.jpg"
                      alt=""
                      className="w-full border-4 border-red border-inset rounded-2xl"
                    />
                  </div>
                </div>
                {/* <div className="w-full px-3 sm:px-4 ">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://api.shriworks.com/uploads/2020_10_31_f3e421dc45.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.66667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 1.66667 104)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="16.3333"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 16.3333 104)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={31}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 31 104)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="45.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 45.6667 104)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="60.3334"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 60.3334 104)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="88.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 88.6667 104)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="117.667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 117.667 104)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="74.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 74.6667 104)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={103}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 103 104)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={132}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 132 104)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="1.66667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 89.3333)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="16.3333"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 89.3333)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={31}
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 31 89.3333)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="45.6667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 89.3333)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="60.3333"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 89.3338)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="88.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 89.3338)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="117.667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 89.3338)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="74.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 89.3338)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={103}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 103 89.3338)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={132}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 132 89.3338)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="1.66667"
                          cy="74.6673"
                          r="1.66667"
                          transform="rotate(-90 1.66667 74.6673)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="1.66667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 31.0003)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="16.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 16.3333 74.6668)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="16.3333"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 31.0003)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={31}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 31 74.6668)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={31}
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 31 31.0003)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="45.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 45.6667 74.6668)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="45.6667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 31.0003)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="60.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 60.3333 74.6668)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="60.3333"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 60.3333 30.9998)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="88.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 88.6667 74.6668)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="88.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 88.6667 30.9998)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="117.667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 117.667 74.6668)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="117.667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 117.667 30.9998)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="74.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 74.6667 74.6668)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="74.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 74.6667 30.9998)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={103}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 103 74.6668)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={103}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 103 30.9998)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={132}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 132 74.6668)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={132}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 132 30.9998)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="1.66667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 60.0003)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="1.66667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 16.3333)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="16.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 60.0003)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="16.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 16.3333)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={31}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 31 60.0003)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={31}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 31 16.3333)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="45.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 60.0003)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="45.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 16.3333)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="60.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 60.3333 60.0003)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="60.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 60.3333 16.3333)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="88.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 88.6667 60.0003)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="88.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 88.6667 16.3333)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="117.667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 117.667 60.0003)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="117.667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 117.667 16.3333)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="74.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 74.6667 60.0003)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="74.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 74.6667 16.3333)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={103}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 103 60.0003)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={103}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 103 16.3333)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={132}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 132 60.0003)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={132}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 132 16.3333)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="1.66667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 45.3333)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="1.66667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 1.66667 1.66683)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="16.3333"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 45.3333)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="16.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 16.3333 1.66683)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={31}
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 31 45.3333)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={31}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 31 1.66683)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="45.6667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 45.3333)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="45.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 45.6667 1.66683)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="60.3333"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 45.3338)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="60.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 60.3333 1.66683)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="88.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 45.3338)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="88.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 88.6667 1.66683)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="117.667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 45.3338)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="117.667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 117.667 1.66683)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="74.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 45.3338)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx="74.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 74.6667 1.66683)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={103}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 103 45.3338)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={103}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 103 1.66683)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={132}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 132 45.3338)"
                          fill="#4e2a1b"
                        />
                        <circle
                          cx={132}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 132 1.66683)"
                          fill="#4e2a1b"
                        />
                      </svg>
                    </span>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 ">
              <div className="mt-10 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold text-red  sm:text-[40px]/[48px]">
                  Making our customers happy by giving quality products.
                </h2>
                <p className="mb-5 text-lg text-black ">
                Welcome to Shriworks, where tradition and artistry come together in the heart of Kumbakonam, a town renowned for its rich cultural heritage. At Shriworks, we are dedicated to the meticulous craft of traditional temple jewelry and a wide range of temple-oriented products, reflecting the divine artistry and devotion that has been passed down through generations.
                </p>
                <p className="mb-8 text-lg text-black ">
                At Shriworks, we specialize in creating exquisite handcrafted temple jewelry and artifacts that embody the essence of South Indian temple traditions. Our skilled artisans, with years of experience, use time-honored techniques to craft each piece, ensuring authenticity and excellence in every creation.
                </p>
                <a
                  href="https://www.shriworkscraft.com/"
                  target={'_blank'}
                  className="inline-flex items-center justify-center py-3 text-lg font-medium text-center text-yellow border border-transparent rounded-md px-7 bg-black hover:bg-opacity-90"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
        
          <ul className='mt-10 list-disc hidden md:flex list-inside  gap-5 bg-red bg3  text-justify md:p-10 md:mx-20 rounded-lg'>
          <li className="mb-8 flex-1 text-base text-yellow ">
                Our collection of temple jewelry is a testament to our commitment to preserving traditional craftsmanship. From intricately designed kireedams and delicate shenpakapoo maalai to elaborate kasu malai and ottiyanam, each piece is crafted with the utmost care. We use high-quality copper and brass, often gold-plated, to produce jewelry that is not only visually stunning but also spiritually significant.
                </li>
                <li className="mb-8 flex-1 text-base text-yellow ">
                Our team of experienced traditional craftsmen are the heart of our work. Each piece, whether it is a temple statue, Nagas design kalasam, kireedam, and  other temple jewelry and temple needs, is meticulously handcrafted with attention to every intricate detail. We specialize in working with Panchalokam, brass, copper, and other traditional materials to create items that not only honor religious practices but also exemplify the artistry of temple crafts.
                </li>
          </ul>
      </section>
      <div className="sm:px-10">

        <div className='flex sm:flex-row flex-col p-4 rounded-lg justify-evenly gap-5 md:mx-10'>
      {/* Philosophy Section */}
      <section className="mb-8 flex-1">
        <h2 className="md:text-3xl  font-bold text-yellow py-2 bg-red mb-4 uppercase text-center">Our Philosophy</h2>
        <p className="text-lg text-red leading-relaxed mb-4 text-justify">
          We are passionate about preserving the sacred art forms that have shaped
          the spiritual and cultural fabric of our heritage. Each product from
          Shriworks is a blend of traditional techniques and modern craftsmanship,
          designed to elevate the sacred spaces they adorn. Our mission is to honor
          this rich tradition while providing our clients with products that reflect
          devotion, elegance, and exceptional quality.
        </p>
      </section>

      {/* Commitment to Quality Section */}
      <section className="mb-8 flex-1">
        <h3 className="md:text-3xl  font-bold text-yellow py-2 bg-red mb-4 uppercase text-center">Commitment to Quality</h3>
        <p className="text-lg text-red leading-relaxed mb-4 text-justify">
          At Shriworks, quality is at the heart of everything we do. We ensure that
          each piece, whether it is jewelry or a temple artifact, is crafted with
          precision and care. Our commitment to excellence means that you receive
          products that are not only beautiful but also enduring symbols of faith
          and tradition.
        </p>
        <p className="text-lg text-red leading-relaxed mb-4 text-justify">
          Thank you for choosing Shriworks. We invite you to explore our range of
          handcrafted temple jewelry and artifacts, and experience the timeless
          beauty of traditional craftsmanship.
        </p>
      </section>
        </div>

      {/* Vision and Mission Section */}
      <section className="flex flex-col p-4 rounded-lg  gap-5 md:mx-10">
        {/* Vision Section */}
        <div className=''>
        <h4 className="md:text-3xl  font-bold text-yellow py-2 bg-red mb-4 uppercase text-center">Vision</h4>
        <p className="text-lg text-red leading-relaxed mb-4">
          At Shriworks, our vision is to become a global leader in preserving and
          promoting the rich heritage of traditional South Indian craftsmanship. We
          aspire to keep the sacred art of temple crafts and statue making alive by
          blending time-honored techniques with modern craftsmanship, ensuring that
          future generations experience the beauty and cultural significance of this
          ancient tradition.
        </p>
        </div>

        {/* Mission Section */}
        <div className=''>

        <h4 className="md:text-3xl  font-bold text-yellow py-2 bg-red mb-4 uppercase text-center">Mission</h4>
        <ul className="list-disc list-inside text-justify text-lg text-red leading-relaxed mb-4">
          <li>
            Preserve the authenticity of traditional South Indian craftsmanship.
          </li>
          <li>
            Support and empower skilled artisans by providing them with meaningful
            opportunities to showcase their craft.
          </li>
          <li>
            Deliver exquisite, detailed, and spiritually significant products that
            enhance religious and cultural experiences.
          </li>
          <li>
            Maintain the highest standards of quality and service, ensuring that
            each piece we create is a true reflection of tradition, devotion, and
            artistry.
          </li>
        </ul>
        <p className="text-lg text-red leading-relaxed mb-4">
          By staying true to our roots while embracing innovation, Shriworks seeks
          to enrich sacred spaces and homes worldwide with the timeless beauty of
          our craftsmanship.
        </p>
        </div>

        <div className=''>
        <h4 className="md:text-3xl  font-bold text-yellow py-2 bg-red mb-4 uppercase text-center">Insight into Shriworks</h4>
        <ul className="list-disc list-inside text-justify text-lg text-red leading-relaxed mb-4">
        <li className="text-lg leading-relaxed mb-4">
        Shriworks is more than just a manufacturer of temple items—it's a sanctuary of traditional craftsmanship where ancient art forms meet modern devotion. Established in the historic and spiritual town of Kumbakonam, we are driven by the desire to keep alive the timeless practices of South Indian artisans. Our work celebrates the profound connection between culture, religion, and art, as we craft each piece with an understanding of its sacred purpose.
        </li>
        <li className="text-lg leading-relaxed mb-4">
        We take immense pride in the expertise of our craftsmen, who bring unparalleled knowledge and dedication to every project. These artisans, often with decades of experience, are the true custodians of a legacy passed down through generations. Their hands shape raw materials into divine representations—whether it’s a life-size temple statue, a delicate copper kireedam, or an ornate kalasam—ensuring that each creation holds both aesthetic beauty and spiritual significance.
        </li>
        <li className="text-lg leading-relaxed mb-4">
        At Shriworks, our insight goes beyond crafting items. We deeply respect the religious and cultural value these pieces hold for our clients. That’s why we focus on delivering perfection in every detail, ensuring that our creations not only meet functional requirements but also inspire devotion and admiration.
        </li>
        <li className="text-lg leading-relaxed mb-4">
        Our commitment to excellence ensures that each Shriworks product embodies the spirit of tradition, devotion, and artistry.
        </li>
        </ul>
        </div>

      </section>
    </div>
    </>
  )
}

export default About