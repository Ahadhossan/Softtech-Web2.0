import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import toast from "react-hot-toast";
import { Check, Loader2 } from "lucide-react";
import ScrollToTopButton from "../../common/ScrollToTopButton";

const Contact = () => {
  const headerRef = useRef(null);
  const contactRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    number: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const inputStyle =
    "w-full p-3 rounded-lg border-2 border-[#1E5470] focus:outline-none focus:ring-1 focus:ring-[#1E5470] text-gray-800 transition";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.number.trim()) {
      newErrors.number = "Phone number required";
    }

    if (!formData.service.trim()) {
      newErrors.service = "Service is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 500) {
      newErrors.message = "Max 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);
    setStatus("");

    const formDataObj = new FormData();
    formDataObj.append("access_key", "5dfc4379-7b71-4b97-88e6-a674545f8b62");

    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully 🎉");
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          service: "",
          number: "",
          address: "",
          message: "",
        });

        setTimeout(() => setStatus(""), 2000);
      } else {
        toast.error("Failed to send message");
        setStatus("error");
      }
    } catch (error) {
      toast.error("Something went wrong");
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <>
      {/* Header */}
      <div
        ref={headerRef}
        className="w-full min-h-[140px] bg-gradient-to-br from-black via-gray-900 to-black py-12"
      >
        <div className="container flex flex-col-reverse items-center gap-12 px-6 py-16 mx-auto lg:flex-row">
          <div className="w-full space-y-6 text-center lg:w-1/2 lg:text-left">
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="text-3xl font-extrabold text-white md:text-5xl"
            >
              Let’s Talk Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2 }}
              className="max-w-xl mx-auto text-gray-300 lg:mx-0"
            >
              Whether you’re building something new or improving an existing
              product — we’re here to help.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div ref={contactRef} className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={contactInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-[#1E5470] mb-6">
            Contact Form
          </h3>

          <form onSubmit={onSubmit} className="space-y-6">
            {/* Name + Email */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={inputStyle}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={inputStyle}
                required
              />
            </div>

            {/* Phone + Service */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="tel"
                name="number"
                placeholder="Phone Number"
                value={formData.number}
                onChange={handleChange}
                className={inputStyle}
                required
              />

              <input
                type="text"
                name="service"
                placeholder="Service (Web, App, Design...)"
                value={formData.service}
                onChange={handleChange}
                className={inputStyle}
                required
              />
            </div>

            {/* Address */}
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
              className={inputStyle}
              required
            />

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Describe your project"
                value={formData.message}
                onChange={handleChange}
                maxLength={500}
                className={inputStyle}
                required
              />
              <div className="flex justify-between text-sm text-gray-400">
                {errors.message && (
                  <p className="text-red-500">{errors.message}</p>
                )}
                <p>{formData.message.length}/500</p>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all
                ${
                  loading
                    ? "bg-gray-500 text-white"
                    : status === "success"
                      ? "bg-green-600 text-white"
                      : status === "error"
                        ? "bg-red-600 text-white"
                        : "bg-gradient-to-r from-[#1E5470] to-[#2a7fa3] text-white hover:scale-105"
                }`}
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {!loading && status === "success" && (
                  <Check className="w-4 h-4" />
                )}

                {loading
                  ? "Sending..."
                  : status === "success"
                    ? "Sent"
                    : status === "error"
                      ? "Retry"
                      : "Submit"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      <ScrollToTopButton />
    </>
  );
};

export default Contact;
