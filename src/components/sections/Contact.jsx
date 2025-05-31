import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");
    emailjs
      .sendForm(
        "DIN_SERVICE_ID", // Byt ut mot din EmailJS service ID
        "DIN_TEMPLATE_ID", // Byt ut mot din EmailJS template ID
        form.current,
        "DIN_PUBLIC_KEY" // Byt ut mot din EmailJS public key
      )
      .then(
        () => setStatus("success"),
        () => setStatus("error")
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-custom-yellow-1/10 to-custom-yellow-2/10 py-16"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-[#081A3A] bg-opacity-95 rounded-3xl shadow-2xl p-10 border-2 border-custom-yellow-2 backdrop-blur-lg"
      >
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-custom-yellow-1 to-custom-yellow-2 bg-clip-text text-transparent drop-shadow-lg">
          Contact Me
        </h2>
        <div className="mb-6">
          <label className="block text-custom-yellow-2 text-lg font-semibold mb-2" htmlFor="user_name">
            Name
          </label>
          <input
            className="w-full px-5 py-3 rounded-xl bg-[#0E0724] text-custom-yellow-1 placeholder-custom-yellow-2 focus:outline-none focus:ring-2 focus:ring-custom-yellow-2 transition-all duration-300 shadow-inner"
            type="text"
            name="user_name"
            id="user_name"
            required
            placeholder="Your name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-custom-yellow-2 text-lg font-semibold mb-2" htmlFor="user_email">
            Email
          </label>
          <input
            className="w-full px-5 py-3 rounded-xl bg-[#0E0724] text-custom-yellow-1 placeholder-custom-yellow-2 focus:outline-none focus:ring-2 focus:ring-custom-yellow-2 transition-all duration-300 shadow-inner"
            type="email"
            name="user_email"
            id="user_email"
            required
            placeholder="you@email.com"
          />
        </div>
        <div className="mb-8">
          <label className="block text-custom-yellow-2 text-lg font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-5 py-3 rounded-xl bg-[#0E0724] text-custom-yellow-1 placeholder-custom-yellow-2 focus:outline-none focus:ring-2 focus:ring-custom-yellow-2 transition-all duration-300 shadow-inner resize-none min-h-[120px]"
            name="message"
            id="message"
            required
            placeholder="Write your message..."
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-custom-yellow-1 to-custom-yellow-2 text-[#081A3A] font-bold text-xl shadow-lg hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-300"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send"}
        </button>
        {status === "success" && (
          <p className="mt-4 text-center text-green-400 font-semibold animate-bounce">Message sent! 🎉</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-center text-red-400 font-semibold">Something went wrong. Try again!</p>
        )}
      </form>
    </section>
  );
};