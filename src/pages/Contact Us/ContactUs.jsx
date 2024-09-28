import React from 'react'
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import api from '../../Utils/api';

const baseUrl = api.defaults.baseURL;

const useSendContact = () =>{
  return useMutation(async(sendContact) =>{
    const res = await api.post('/api/contact')
    return res.data
  })
}

const ContactUs = () => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

const {mutate} = useSendContact();

const handleSubmit = (e) => {
  e.preventDefault();
  if(name && email && message){
    try {
      mutate({
        name:name,
        email:email,
        message:message,
      })
    } catch (error) {
      console.log(error)
    }
  }else{
    toast.error('Please fill all the required fields')
  }
}
  return (
    <section className="Bg2 " id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <h1 className="text-base font-semibold uppercase tracking-wide text-red ">
                Contact
              </h1>
              <h2 className="font-heading mb-4 font-bold tracking-tight text-black  text-3xl sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-red  ">
                Get in touch with us to buy your products 
                today
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-justify sm:text-left text-black opacity-80 ">
                  At shriworks, our contact support team is here to assist you
                  with any questions or planning needs. Reach out to us for
                  prompt and personalized service to ensure your event's
                  success.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-red">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFEEA9"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-bold leading-6 text-black">
                        Our Address
                      </h3>
                      <p className="text-red opacity-90">
                        242A, Arcot Rd, Vadapalani,
                      </p>
                      <p className="text-red opacity-90">
                        Chennai, Tamil Nadu 600026.<br/>(Near Vadapalani Post Office)
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-red">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFEEA9"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-bold leading-6 text-black">
                        Contact
                      </h3>
                      <p className="text-red opacity-90 ">
                        Mobile: (+91) 91765 54626
                      </p>
                      <p className="text-red opacity-90 ">
                        Mail: Info@shriworks.com
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded  bg-red">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFEEA9"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-bold leading-6 text-black">
                        Working hours
                      </h3>
                      <p className="text-red opacity-90 ">
                        Monday - Friday: 08:00 - 17:00
                      </p>
                      <p className="text-red opacity-90 ">
                        Saturday &amp; Sunday: 08:00 - 12:00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className=" h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold text-black">
                  Ready to Get Started?
                </h2>
                <form id="contactForm">
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          for="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          autocomplete="given-name"
                          placeholder="Your name"
                          className="mb-2 w-full bg-white rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-red sm:mb-0"
                          name="name"
                          onChange={(e)=>setName(e.target.value)}
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          for="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          id="email"
                          autocomplete="email"
                          placeholder="Your email address"
                          className="mb-2 w-full rounded-md border bg-white border-gray-400 py-2 pl-2 pr-4 shadow-md text-red sm:mb-0"
                          name="email"
                          onchange={(e)=>setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        for="textarea"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border active:border-gold bg-white border-gray-400 py-2 pl-2 pr-4 shadow-md text-red sm:mb-0"
                        onChange={(e)=>setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button onClick={handleSubmit} className="SliderButton w-full text-yellow cursor-pointer uppercase bg-red px-4 py-1 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#4e2a1b,-0.5rem_-0.5rem_#4e2a1b] hover:bg-yellow hover:text-red transition">
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.760930752891!2d80.21251457439841!3d13.050883713136447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526728b5e8b715%3A0xf462cd326408c3c5!2sShri%20Works!5e0!3m2!1sen!2sin!4v1724408940206!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ padding: "0px 40px 60px 40px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
  )
}

export default ContactUs