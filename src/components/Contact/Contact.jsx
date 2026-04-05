import React, { useRef, useState } from "react";

// import { useState, useEffect } from "react";
// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import ScrollToTopButton from "../../common/ScrollToTopButton";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     number: "",
//     type: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const validate = () => {
//     const newErrors = {};

//     if (!formData.name || formData.name.length < 2) {
//       newErrors.name = "Please enter a valid name.";
//     }

//     if (!formData.number || formData.number.replace(/\D/g, "").length < 10)
//       newErrors.number = "Valid phone number required.";

//     if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
//       newErrors.email = "Enter a valid email address.";
//     }

//     if (!formData.type || formData.type.length < 3) {
//       newErrors.type = "Please describe your problem briefly.";
//     }

//     if (formData.message.length < 5 || formData.message.length > 1000) {
//       newErrors.message = "Message must be between 5 and 1000 characters.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     if (!validate()) return;

//     setLoading(true);

//     const formDataObj = new FormData();
//     formDataObj.append("access_key", "276695ce-1e44-4cb0-bc1f-df51e6a92587");
//     Object.entries(formData).forEach(([key, value]) =>
//       formDataObj.append(key, value),
//     );

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formDataObj,
//     });

//     const result = await response.json();

//     if (result.success) {
//       setSuccess("Message sent successfully!");
//       setFormData({ name: "", email: "", number: "", type: "", message: "" });
//     } else {
//       setSuccess("Failed to send message. Please try again.");
//     }

//     setLoading(false);
//   };

//   useEffect(() => {
//     if (success) {
//       const timer = setTimeout(() => setSuccess(""), 4000);
//       return () => clearTimeout(timer);
//     }
//   }, [success]);

//   // header section
//   const headerRef = useRef(null);
//   const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

//   // contact section
//   const contactRef = useRef(null);
//   const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

//   return (
//     <>
//       {/* header section */}
//       <section
//         className="w-full contact-bg min-h-[140px] bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden py-12 pb-12"
//         ref={headerRef}
//       >
//         <div className="container flex flex-col-reverse items-center h-full gap-12 px-6 py-16 mx-auto lg:flex-row">
//           {/* Text Content */}
//           <div className="w-full space-y-6 text-center lg:w-1/2 lg:text-left">
//             <motion.h1
//               initial={{ opacity: 0, x: 50 }}
//               animate={headerInView ? { opacity: 1, x: 0 } : {}}
//               exit={{ opacity: 0, x: -50 }}
//               transition={{ duration: 1 }}
//               className="text-3xl font-extrabold leading-tight text-white md:text-5xl"
//             >
//               Let’s Talk Business
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, x: -50 }}
//               animate={headerInView ? { opacity: 1, x: 0 } : {}}
//               exit={{ opacity: 0, x: 50 }}
//               transition={{ duration: 1.2 }}
//               className="max-w-xl mx-auto text-base text-gray-300 md:text-lg lg:mx-0"
//             >
//               Whether you’re looking to build something new and exciting or need
//               our help with an ongoing project, we’ve got you covered.
//             </motion.p>
//           </div>
//         </div>
//       </section>

//       {/* contact from */}

//       <section className="bg-[#f3f2f2] py-20 px-4" ref={contactRef}>
//         <div className="mx-auto max-w-7xl">
//           <div className="flex flex-col gap-10 p-8 text-white bg-white shadow-lg lg:flex-row rounded-xl">
//             <div className="w-full lg:w-1/2">
//               <aside className="flex-1 mt-12 space-y-8 md:mt-0">
//                 <motion.h2
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={contactInView ? { opacity: 1, x: 0 } : {}}
//                   exit={{ opacity: 0, x: -50 }}
//                   transition={{ duration: 1 }}
//                   className="text-2xl font-bold tracking-wide text-[#1E5470]"
//                 >
//                   You’re in good company
//                 </motion.h2>

//                 <div className="gap-8 ">
//                   {/* <!-- Each item --> */}
//                   {/* box 1 */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={contactInView ? { opacity: 1, y: 0 } : {}}
//                     exit={{ opacity: 0, y: -50 }}
//                     transition={{ duration: 1 }}
//                     className="bg-[#FFE4D0] hover:border-l-green-500 hover:border-l-2 border border-gray-300 rounded-lg p-4 shadow-sm w-full max-w-xs"
//                   >
//                     <div className="flex flex-col items-start space-y-1">
//                       <div className="flex items-center space-x-3">
//                         {/* <!-- Icon example (use your actual icons here) --> */}
//                         <p className="uppercase font-semibold text-sm tracking-wider text-[#1E5470]">
//                           1+ years of Excellence
//                         </p>
//                       </div>
//                       <p className="text-sm text-gray-700">
//                         Proven expertise, unmatched results
//                       </p>
//                     </div>
//                   </motion.div>

//                   {/* box 2 */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={contactInView ? { opacity: 1, y: 0 } : {}}
//                     exit={{ opacity: 0, y: -50 }}
//                     transition={{ duration: 1, delay: 0.2 }}
//                     className="bg-[#FFF0B5]   hover:border-r-yellow-500 hover:border-r-2 border border-gray-300 rounded-lg p-4 shadow-sm w-full max-w-xs m-6"
//                   >
//                     <div className="flex flex-col items-start space-y-1">
//                       <div className="flex items-center space-x-3">
//                         {/* <!-- Icon example (use your actual icons here) --> */}
//                         <p className="uppercase font-semibold text-sm tracking-wider text-[#1E5470]">
//                           5+ Projects Completed
//                         </p>
//                       </div>
//                       <p className="text-sm text-gray-700">
//                         Delivering project success no matter what
//                       </p>
//                     </div>
//                   </motion.div>

//                   {/* box 3 */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={contactInView ? { opacity: 1, y: 0 } : {}}
//                     exit={{ opacity: 0, y: -50 }}
//                     transition={{ duration: 1, delay: 0.4 }}
//                     className="bg-[#89d6e2] hover:border-l-blue-500 hover:border-l-2 border border-gray-300 rounded-lg p-4 shadow-sm w-full max-w-xs"
//                   >
//                     <div className="flex flex-col items-start space-y-1">
//                       <div className="flex items-center space-x-3">
//                         {/* <!-- Icon example (use your actual icons here) --> */}
//                         <p className="uppercase font-semibold text-sm tracking-wider text-[#1E5470]">
//                           3+ specialists
//                         </p>
//                       </div>
//                       <p className="text-sm text-gray-700">
//                         The experts behind your next breakthrough
//                       </p>
//                     </div>
//                   </motion.div>
//                 </div>
//               </aside>
//             </div>

//             <div className="w-full lg:w-1/2">
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={contactInView ? { opacity: 1, x: 0 } : {}}
//                 exit={{ opacity: 0, x: 50 }}
//                 transition={{ duration: 1 }}
//                 className="bg-[#131418] rounded-xl shadow-lg p-8 text-black"
//               >
//                 {success && (
//                   <p
//                     className={`text-center text-sm font-medium ${
//                       success.includes("successfully")
//                         ? "text-green-500"
//                         : "text-red-500"
//                     }`}
//                   >
//                     {success}
//                   </p>
//                 )}
//                 <form onSubmit={onSubmit} className="space-y-4">
//                   <div className="flex flex-col gap-4 lg:flex-row">
//                     <div>
//                       <label className="block mb-1 font-medium text-gray-700">
//                         Name
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                         placeholder="Your Name"
//                       />
//                       {errors.name && (
//                         <p className="text-sm text-red-500">{errors.name}</p>
//                       )}
//                     </div>

//                     <div>
//                       <label className="block mb-1 font-medium text-gray-700">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                         placeholder="Your Email"
//                       />
//                       {errors.email && (
//                         <p className="text-sm text-red-500">{errors.email}</p>
//                       )}
//                     </div>
//                   </div>

//                   {/* International Phone Input */}

//                   <div>
//                     <label className="block mb-1 font-medium text-gray-700">
//                       Number
//                     </label>
//                     <input
//                       type="number"
//                       name="number"
//                       placeholder="Phone Number"
//                       value={formData.number}
//                       onChange={handleChange}
//                       className={`w-full p-3 rounded-lg border-2 border-[#1E5470] focus:outline-none focus:ring-1 focus:ring-[#1E5470] appearance-none ${
//                         formData.number ? "text-black" : "text-gray-700"
//                       }`}
//                     />
//                     {errors.number && (
//                       <p className="text-red-500 text-sm">{errors.number}</p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block mb-1 font-medium text-gray-700">
//                       Your Service Type
//                     </label>
//                     <input
//                       type="text"
//                       name="type"
//                       value={formData.type}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                       placeholder="Service Name"
//                     />
//                     {errors.type && (
//                       <p className="text-sm text-red-500">{errors.type}</p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block mb-1 font-medium text-gray-700">
//                       Message
//                     </label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border rounded-lg resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                       placeholder="please describe your project?"
//                       rows="4"
//                     ></textarea>
//                     {errors.message && (
//                       <p className="text-sm text-red-500">{errors.message}</p>
//                     )}
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full font-semibold bg-[#00D47E] text-white py-2 rounded hover:bg-[#4ed39e] transition"
//                     disabled={loading}
//                   >
//                     {loading ? "Sending..." : "Submit"}
//                   </button>
//                 </form>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Scrolltop */}
//       <ScrollToTopButton />
//     </>
//   );
// };

// export default Contact;

import { motion, useInView } from "framer-motion";
import toast from "react-hot-toast";
import { Check, Loader2 } from "lucide-react";

const Contact = () => {
  // header section
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    number: "",
    message: "",
    budget: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);

  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

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
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.number) {
      newErrors.number = "Phone number required";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a budget";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 500) {
      newErrors.message = "Message cannot exceed 500 characters";
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
          message: "",
          budget: "",
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
      <div
        className="w-full min-h-[140px] bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden py-12 pb-12"
        ref={headerRef}
      >
        <div className="container flex flex-col-reverse items-center h-full gap-12 px-6 py-16 mx-auto lg:flex-row">
          {/* Text Content */}
          <div className="w-full space-y-6 text-center lg:w-1/2 lg:text-left">
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 1 }}
              className="text-3xl font-extrabold leading-tight text-white md:text-5xl"
            >
              Let’s Talk Business
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 1.2 }}
              className="max-w-xl mx-auto text-base text-gray-300 md:text-lg lg:mx-0"
            >
              Whether you’re looking to build something new and exciting or need
              our help with an ongoing project, we’ve got you covered.
            </motion.p>
          </div>
        </div>
      </div>

      <section ref={contactRef} className=" max-w-6xl mx-auto px-16 p-16">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={contactInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-[#1E5470] mb-4">
            Contact From
          </h3>

          <form onSubmit={onSubmit} className="space-y-8">
            {/* Name + Email */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border-2 border-[#1E5470] focus:outline-none focus:ring-1 focus:ring-[#1E5470] appearance-none ${
                    formData.name ? "text-black" : "text-gray-700"
                  }`}
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
                  className={`w-full p-3 rounded-lg border-2 border-[#1E5470] focus:outline-none focus:ring-1 focus:ring-[#1E5470] appearance-none ${
                    formData.email ? "text-black" : "text-gray-700"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Phone + Address */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <input
                  type="number"
                  name="number"
                  placeholder="Phone Number"
                  value={formData.number}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border-2 border-[#1E5470] focus:outline-none focus:ring-1 focus:ring-[#1E5470] appearance-none ${
                    formData.number ? "text-black" : "text-gray-700"
                  }`}
                />
                {errors.number && (
                  <p className="text-red-500 text-sm">{errors.number}</p>
                )}
              </div>

              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border-2 border-[#1E5470] focus:outline-none focus:ring-1 focus:ring-[#1E5470] appearance-none ${
                    formData.email ? "text-black" : "text-gray-700"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Describe your project"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border-2 border-[#1E5470] focus:outline-none focus:ring-1 focus:ring-[#1E5470] appearance-none ${
                  formData.message ? "text-black" : "text-gray-700"
                }`}
              />

              <div className="flex justify-between text-sm text-gray-400">
                {errors.message && (
                  <p className="text-red-500">{errors.message}</p>
                )}
                <p>{formData.message.length}/500</p>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={loading}
                className={`flex items-center gap-2 px-8 py-3 font-semibold rounded-full shadow-lg transition-all duration-300
              ${
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
    </>
  );
};

export default Contact;
