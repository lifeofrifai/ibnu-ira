"use client";
import React, { useState } from "react";

export default function UcapanForm() {
  const [message, setMessage] = useState("");

  const sendToWhatsApp = () => {
    const phoneNumber = "6281290855010"; // Replace with your WhatsApp number (in international format without the "+")
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
    setMessage(""); // Clear the input field after sending
  };

  return (
    <div className="flex flex-col gap-10 p-6 my-5" >
    <div className="p-6 bg-gradient-to-b from-[#EFE0CD] to-[#e7d1b4] rounded-lg flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Ucapkan Sesuatu</h1>
      <textarea
        placeholder="Tulis ucapanmu di sini..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full h-32 p-2 border border-gray-300 rounded mb-4"
        required
      ></textarea>
      <button
        onClick={sendToWhatsApp}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Kirim
      </button>
    </div>
    </div>
  );
}
