"use client";
import React, { useState } from 'react';

const Started = () => {
  const [errors, setErrors] = useState({});
  const [successBanner, setSuccessBanner] = useState(false);

  const [user, setUser] = useState({
    Email: '',
  });

  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!user.Email) newErrors.Email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(user.Email)) newErrors.Email = 'Email address is invalid';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getdata = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const { Email } = user;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email,
      }),
    };

    const res = await fetch(
      'https://nextfirebase-fab92-default-rtdb.firebaseio.com/TechlerateClient.json',
      options
    );

    if (res.ok) {
      setSuccessBanner(true);
      setTimeout(() => {
        setSuccessBanner(false);
        setUser({ Email: '' }); // Reset the form
      }, 2000);
    } else {
      alert('Error Occurred');
    }
  };

  return (
    <div className="flex items-center justify-center max-h-screen py-20 p-10 md:p-12 bg-[#18191f]">
      <div className="bg-[#7b61ff] text-primary-foreground py-10 shadow-lg w-full text-center">
        <p className="text-base sm:text-lg text-white xl:text-xl mb-5">MAKING THE RIGHT CHOICES</p>
        <h2 className="text-2xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-4">
          LET’S <span className="text-white">START YOUR</span>
        </h2>
        <h2 className="text-2xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-4">
          DIGITAL <span className="text-white">BUSINESS</span>
        </h2>

        <div className="flex justify-center mt-10 lg:mx-40">
        
          <input
            type="email"
            name="Email"
            placeholder="Enter your email address"
            className="p-2 border placeholder-white text-white border-white bg-[#7b61ff] w-1/2 md:w-3/3"
            value={user.Email}
            autoComplete="off"
            required
            onChange={data}
          />
          {errors.Email && (
            <p className=" absolute text-[#ffffff] text-xs sm:text-sm -ml-24 -mt-6">{errors.Email}</p>
          )}
         
          <button onClick={getdata} className="bg-white p-2">
            Get Started
          </button>
        </div>

        {/* Success Banner */}
        {successBanner && (
          <p className="text-[#ffffff] text-sm mt-5">Email submitted successfully!</p>
        )}
      </div>
    </div>
  );
};

export default Started;
