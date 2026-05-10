import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
// import SplashCursor from '../visuals/SplashCursor';
// import logobig from '../../assets/pics/logobig.png'; // Justerar sökvägen efter din projektstruktur


export const Contact = () => {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
 });

  const form = useRef();
  const [status, setStatus] = useState(null);
  // JavaScript 

  const SERVICE_ID = "service_kbnkyp7";
  const TEMPLATE_ID = "template_w6p7k1a";
  const PUBLIC_KEY = "XXv_jnmcF8H5gotyz";

  useEffect(() => {
    // if (status === "success") {
    //   const audio = new Audio("/sounds/awww.mp3");
    //   audio.play().catch(err => console.log("Audio playback failed:", err));
    // }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 3000); 
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(null), 4000);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-custom-yellow-1/10 to-custom-yellow-2/10 py-16"
    >
      <div className="w-full max-w-lg bg-opacity-95 rounded-3xl shadow-2xl p-10 border-2 border-custom-yellow-2 backdrop-blur-lg mt-8">
        <p className="font-onest bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent text-xl text-center">Contact me using the form below!</p>
      </div>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-opacity-95 rounded-3xl shadow-2xl p-10 border-2 border-custom-yellow-2 backdrop-blur-lg mt-8"
      >
        <h2 className="text-xl font-bold text-center mb-8 bg-gradient-to-r from-secondary to-base-100 bg-clip-text text-transparent drop-shadow-lg">
          Contact Me
        </h2>
        <div className="mb-6">
          <label className="block text-secondary text-lg font-semibold mb-2" htmlFor="user_name">
            Name
          </label>
          <input
            className="w-full px-5 py-3 rounded-xl  text-black placeholder-custom-yellow-2 focus:outline-none focus:ring-2 focus:ring-custom-yellow-2 transition-all duration-300 shadow-inner"
            type="text"
            name="from_name"
            id="from_name"
            required
            value={formData.name}
            placeholder="Your name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label className="block text-secondary text-lg font-semibold mb-2" htmlFor="user_email">
            Email
          </label>
          <input
            className="w-full px-5 py-3 rounded-xl  text-black placeholder-custom-yellow-2 focus:outline-none focus:ring-2 focus:ring-custom-yellow-2 transition-all duration-300 shadow-inner"
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@email.com"
          />
        </div>
        <div className="mb-8">
          <label className="block text-secondary text-lg font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-5 py-3 rounded-xl  text-black placeholder-custom-yellow-2 focus:outline-none focus:ring-2 focus:ring-custom-yellow-2 transition-all duration-300 shadow-inner resize-none min-h-[120px]"
            name="message"
            id="message"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Write your message..."
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-custom-yellow-1 to-custom-yellow-2 font-bold text-xl text-primary shadow-lg hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-300"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send"}
        </button>
        {status === "success" && (
          <p className="mt-4 text-center text-primary font-semibold animate-bounce">Message sent! 🎉</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-center text-red-400 font-semibold">Something went wrong. Try again!</p>
        )}
      </form>  
    </section>
  );
}
