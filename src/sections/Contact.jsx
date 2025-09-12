import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    // 🔑 Yahan apna Web3Forms ka ACCESS KEY paste karo
    formData.append("access_key", "70defd52-55ec-412a-a745-815c4de39645");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message Sent Successfully! Check your Gmail.");
        event.target.reset();
      } else {
        setResult(`❌ ${data.message}`);
      }
    } catch (error) {
      setResult("⚠️ Something went wrong. Try again.");
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-[#cbbaad] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background full-page text */}
      <div className="absolute inset-0 px-6 text-[#363333] opacity-10 font-extrabold text-[12rem] leading-[1.2] whitespace-pre-wrap flex flex-wrap justify-center items-center select-none">
        {"KASHAF NOOR ".repeat(5)}
      </div>

      {/* Content Layer (above bg text) */}
      <div className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 gap-32">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-8xl Zumma md:text-9xl font-extrabold leading-tight">
            Contact me
          </h1>
          <div className=" space-y-3 text-lg">
            <p>yourgmailid@gmail.com</p>
            <p>(+91) 98765-43210</p>
            <p>123 Demo Street</p>
            <p>New Delhi, India</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white p-2"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white p-2"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email (required)"
              required
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white p-2"
            />

            <textarea
              name="message"
              placeholder="Message (required)"
              required
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white p-2 h-28"
            ></textarea>

            <button
              type="submit"
              className="bg-[#cbbaad] text-black font-bold px-6 py-2 hover:bg-gray-300 transition-all"
            >
              SUBMIT
            </button>
          </form>

          {/* Result Message */}
          <span className="mt-4 block text-sm">{result}</span>
        </div>
      </div>
    </div>
  );
}

