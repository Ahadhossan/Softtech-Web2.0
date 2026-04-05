import React, { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import toast from "react-hot-toast";
import { Loader2, Check } from "lucide-react";

const ContactForm = () => {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     service: "",
  //     number: "",
  //     message: "",
  //     budget: "",
  //   });

  //   const [errors, setErrors] = useState({});
  //   const [loading, setLoading] = useState(false);
  //   const [status, setStatus] = useState("");

//   const [isServiceOpen, setIsServiceOpen] = useState(false);
//   const [isBudgetOpen, setIsBudgetOpen] = useState(false);

  //   const contactRef = useRef(null);
  //   const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     setErrors((prev) => ({
//       ...prev,
//       [name]: "",
//     }));
//   };

//   const validate = () => {
//     let newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (formData.name.length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
//     ) {
//       newErrors.email = "Invalid email address";
//     }

//     if (!formData.number || formData.number.length < 10) {
//       newErrors.number = "Valid phone number required";
//     }

//     if (!formData.service) {
//       newErrors.service = "Please select a service";
//     }

//     if (!formData.budget) {
//       newErrors.budget = "Please select a budget";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     } else if (formData.message.length > 500) {
//       newErrors.message = "Message cannot exceed 500 characters";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     if (!validate()) {
//       toast.error("Please fill all required fields");
//       return;
//     }

//     setLoading(true);
//     setStatus("");

//     const formDataObj = new FormData();
//     formDataObj.append("access_key", "5dfc4379-7b71-4b97-88e6-a674545f8b62");

//     Object.entries(formData).forEach(([key, value]) => {
//       formDataObj.append(key, value);
//     });

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formDataObj,
//       });

//       const result = await response.json();

//       if (result.success) {
//         toast.success("Message sent successfully 🎉");
//         setStatus("success");

//         setFormData({
//           name: "",
//           email: "",
//           service: "",
//           number: "",
//           message: "",
//           budget: "",
//         });

//         setErrors({});
//         setTimeout(() => setStatus(""), 2000);
//       } else {
//         toast.error("Failed to send message");
//         setStatus("error");
//       }
//     } catch (error) {
//       toast.error("Something went wrong");
//       setStatus("error");
//     }

//     setLoading(false);
//   };

  return (
    <section
    //   ref={contactRef}
    //   className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-9xl mx-auto px-16 p-16"
    >
      {/* Image */}
      {/* <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={contactInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="rounded-xl overflow-hidden shadow-lg"
      >
        <img
          src="https://i.ibb.co/nMt8jQgP/Contact-Form.jpg"
          alt="Contact"
          className="w-full h-full object-cover"
        />
      </motion.div> */}

      {/* Form */}
      <motion.div
      // initial={{ opacity: 0, x: 50 }}
      // animate={contactInView ? { opacity: 1, x: 0 } : {}}
      // transition={{ duration: 0.8 }}
      // className="bg-white p-8 rounded-xl shadow-lg"
      >
        {/* <h3 className="text-2xl font-semibold text-[#1E5470] mb-2">
          Have Questions? Let's Talk.
        </h3> */}

        {/* <p className="text-gray-600 mb-6">
          We have got the answers to your questions.
        </p> */}

        {/* <form onSubmit={onSubmit} className="space-y-4"> */}
          {/* Name + Email */}
          {/* <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border-2 border-[#1E5470] focus:outline-none focus:ring-1 focus:ring-[#1E5470]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="w-full">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border-2 border-[#1E5470] focus:outline-none focus:ring-1 focus:ring-[#1E5470]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div> */}

          {/* Phone */}
          <div>
            <PhoneInput
              country={"bd"}
              value={formData.number}
              onChange={(phone) =>
                setFormData((prev) => ({ ...prev, number: phone }))
              }
              containerStyle={{ width: "100%" }}
              inputStyle={{
                width: "100%",
                height: "48px",
                borderRadius: "10px",
                border: "2px solid #1E5470",
                paddingLeft: "60px",
                backgroundColor: "#F9FAFB",
              }}
            />
            {errors.number && (
              <p className="text-red-500 text-sm mt-1">{errors.number}</p>
            )}
          </div>

          {/* Service */}
          <div
            className="relative"
            onFocus={() => setIsServiceOpen(true)}
            onBlur={() => setIsServiceOpen(false)}
          >
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-3 pr-10 rounded-lg border-2 border-[#1E5470] appearance-none"
            >
              <option value="">Select service</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Custom Software Development">
                Custom Software Development
              </option>
              <option value="QA Testing">QA Testing</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className={`w-5 h-5 text-[#1E5470] transition-transform duration-200 ${
                  isServiceOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {errors.service && (
              <p className="text-red-500 text-sm">{errors.service}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              rows={4}
              maxLength={500}
              placeholder="Describe your project"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-2 border-[#1E5470]"
            />

            <div className="flex justify-between text-sm text-gray-400">
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
              <p>{formData.message.length}/500</p>
            </div>
          </div>

          {/* Budget */}
          <div
            className="relative"
            onFocus={() => setIsBudgetOpen(true)}
            onBlur={() => setIsBudgetOpen(false)}
          >
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-3 pr-10 rounded-lg border-2 border-[#1E5470] appearance-none"
            >
              <option value="">Select budget</option>
              <option value="Less than USD 50k">Less than USD 50k</option>
              <option value="USD 50k - 100k">USD 50k - 100k</option>
              <option value="USD 100k - 200k">USD 100k - 200k</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className={`w-5 h-5 text-[#1E5470] transition-transform duration-200 ${
                  isBudgetOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {errors.budget && (
              <p className="text-red-500 text-sm">{errors.budget}</p>
            )}
          </div>

          {/* Button */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={loading}
              className={`flex items-center gap-2 px-8 py-3 font-semibold rounded-full shadow-lg transition-all duration-300 ${
                loading
                  ? "bg-gray-500 text-white cursor-not-allowed"
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
    </section>
  );
};

export default ContactForm;
