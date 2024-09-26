import { LockClosedIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { clearCart } from '../../Slice/cartSlice';
import api from '../../Utils/api';
const baseUrl = api.defaults.baseURL;
const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  console.log(cartItems,'proceed to checkout');
  // Form State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [landmark, setLandmark] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState({});

  // Validate form inputs
  const validateForm = () => {
    let tempErrors = {};
    if (!firstName) tempErrors.firstName = "First Name is required";
    if (!lastName) tempErrors.lastName = "Last Name is required";
    if (!email) tempErrors.email = "Email is required";
    if (email && !/\S+@\S+\.\S+/.test(email)) tempErrors.email = "Email is invalid";
    if (!phone) tempErrors.phone = "Phone number is required";
    if (phone && !/^\d{10}$/.test(phone)) tempErrors.phone = "Phone number should be 10 digits";
    if (!address) tempErrors.address = "Address is required";
    if (!city) tempErrors.city = "City is required";
    if (!state) tempErrors.state = "State is required";
    if (!zip) tempErrors.zip = "Zip Code is required";
    
    setErrors(tempErrors);
    // if(Object.keys(tempErrors).length >= 1)  toast.error('Fill All The Required Information')
    return Object.keys(tempErrors).length === 0;  // If no errors, return true
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await api.get(`/api/razorpay`);
        const amount = totalAmount;
        console.log(response,'Razorpay rsponse');
        // const { data: order } = await api.post(`/api/contests/${amount}/create-order`, {});

        var options = {
          key: `${response.data.data.attributes.KeyId}`,
          key_secret: `${response.data.data.attributes.KeySecret}`,
          amount: amount *100,
          currency: "INR",
          // order_id: order.id,
          name: "Shriworks",
          handler: async function (Paymentresponse) {
            dispatch(clearCart());
            toast.success('Order added successfully');
            setTimeout(()=>{
              window.location.href ='/'
            },1000)
            // await api.post(`/api/contests/${Paymentresponse.razorpay_payment_id}/payment`, {});
          },
        };
        var pay = new window.Razorpay(options);
        pay.open();
      } catch (error) {
        console.error("Payment failed", error);
      }
    }
  };

  return (
    <div className="lg:p-10 p-5">
      <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 ">
        <div className="bg-gradient-to-r from-red via-black sm:h-fit to-black sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
          <div className="px-4 py-8 sm:overflow-auto  space-y-4">
            {cartItems.map((cart, index) => (
              <div className="flex items-start gap-4 border-b-2 rounded-md  border-yellow " key={index}>
                <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-2 bg3 mb-2 shrink-0 bg-yellow rounded-md">
                  <img src={`${baseUrl}${cart.product?.ProductImage[0]?.url}`} className="w-full object-cover" />
                </div>
                <div className="w-full overflow-hidden">
                  <h3 className="text-base text-yellow font-bold uppercase truncate">{cart?.product?.ProductName}</h3>
                  <ul className="text-xs text-yellow space-y-2 mt-2">
                    <li className="flex flex-wrap gap-4">Quantity <span className="ml-auto text-white">{cart?.Quantity}</span></li>
                    <li className="flex flex-wrap gap-4">Total Price <span className="ml-auto text-white">&#8377; {cart?.product?.NewPrice}</span></li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="border-red border-2 bg-yellow w-full p-4">
            <h4 className="flex flex-wrap gap-4 text-base text-red">Total <span className="ml-auto font-bold">&#8377; {totalAmount}</span></h4>
          </div>
        </div>

        <div className="max-w-4xl w-full bg-black h-max rounded-md px-4 py-8 sticky top-0">
          <h2 className="text-2xl font-bold text-yellow">Complete your order</h2>
          <form className="mt-8" >
            <div>
              <h3 className="text-base text-yellow mb-4">Personal Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="px-4 py-3 bg-white text-black w-full text-sm rounded-md focus:outline-black" />
                  {errors.firstName && <p className="text-white text-xs mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="px-4 py-3 bg-white text-black w-full text-sm rounded-md focus:outline-black" />
                  {errors.lastName && <p className="text-white text-xs mt-1">{errors.lastName}</p>}
                </div>

                <div>
                  <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="px-4 py-3 bg-white text-black w-full text-sm rounded-md focus:outline-black" />
                  {errors.email && <p className="text-white text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <input type="tel" placeholder="Phone No." value={phone} onChange={(e) => setPhone(e.target.value)} className="px-4 py-3 bg-white text-black w-full text-sm rounded-md focus:outline-black" />
                  {errors.phone && <p className="text-white text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-base text-yellow mb-4">Shipping Address</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input type="text" placeholder="Address Line" value={address} onChange={(e) => setAddress(e.target.value)} className="px-4 py-3 bg-white text-black w-full text-sm rounded-md focus:outline-black" />
                  {errors.address && <p className="text-white text-xs mt-1">{errors.address}</p>}
                </div>

                <div>
                  <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className="px-4 py-3 bg-white text-black w-full text-sm rounded-md focus:outline-black" />
                  {errors.city && <p className="text-white text-xs mt-1">{errors.city}</p>}
                </div>

                <div>
                  <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} className="px-4 py-3 bg-white text-black w-full text-sm rounded-md focus:outline-black" />
                  {errors.state && <p className="text-white text-xs mt-1">{errors.state}</p>}
                </div>

                <div>
                  <input type="number" placeholder="Zip Code" value={zip} onChange={(e) => setZip(e.target.value)} className="px-4 py-3 bg-white text-black w-full text-sm rounded-md focus:outline-black" />
                  {errors.zip && <p className="text-white text-xs mt-1">{errors.zip}</p>}
                </div>

                <div>
                  <input type="text" placeholder="Landmark" value={landmark} onChange={(e) => setLandmark(e.target.value)} className="px-4 py-3 bg-white text-black w-full text-sm rounded-md focus:outline-black" />
                </div>
              </div>
            </div>

            <div className='mt-8'>
            <h3 className="text-base text-yellow mb-4">Order Notes If Any (Optional)</h3>
            <textarea className='bg-white p-2 text-black w-full' rows="4" value={notes} placeholder="ex: Can I get this idol in Gold material" onChange={(e) => setNotes(e.target.value)}>
            </textarea>
              </div>

              <div className="grid lg:grid-cols-2 gap-4 mt-8 text-sm text-yellow">
         <div className='bg-yellow text-black font-bold rounded-lg p-5'>
         <p>For orders to be delivered outside of India, please contact us directly.</p>
         </div>
         <div className='bg-yellow text-black font-bold rounded-lg p-5'>
          <p>By clicking the "Pay Now" button, you agree to our <a href="#" className="text-blue">Terms & Conditions</a> and <a href="#" className="text-blue">Privacy Policy</a> </p>
         </div>
        </div>

            <button type="button" onClick={handlePayment} className="mt-6 w-full bg-yellow text-red font-semibold rounded-md px-6 py-3">
              <LockClosedIcon className="h-5 w-5 text-red-700 inline-block" aria-hidden="true" />
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
