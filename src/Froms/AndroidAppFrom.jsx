import React, { useState, useRef, useEffect } from "react";

const AndroidAppFrom = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};

    if (formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters long.";

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Invalid email address.";

    if (!formData.service) newErrors.service = "Please select a service.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setLoading(true);
    const formDataObj = new FormData();
    formDataObj.append("access_key", "276695ce-1e44-4cb0-bc1f-df51e6a92587");
    Object.entries(formData).forEach(([key, value]) =>
      formDataObj.append(key, value),
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj,
    });

    const result = await response.json();

    if (result.success) {
      setSuccess("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        service: "",
      });
    } else {
      setSuccess("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      {success && (
        <p
          className={`text-center text-sm font-medium ${
            success.includes("successfully") ? "text-green-500" : "text-red-500"
          }`}
        >
          {success}
        </p>
      )}
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Start Your <strong>Android App Development</strong> Journey
      </h3>
      <p className="text-gray-600 mb-6">
        Complete the form below to help us understand your app development
        requirements.
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="" className="text-gray-400">
              Choose your service type
            </option>
            <option value="Finance (Banking, Lending, Insurance, etc.)">
              Finance (Banking, Lending, Insurance, etc.)
            </option>
            <option value="Travel (Booking, Ticketing, Scheduling, etc.)">
              Travel (Booking, Ticketing, Scheduling, etc.)
            </option>
            <option value="Social Networking">Social Networking</option>
            <option value="On-demand Service Marketplace App">
              On-demand Service Marketplace App
            </option>
            <option value="AI Assistant App">AI Assistant App</option>
            <option value="Healthcare (Telemedicine, Patient Management, Wellness, etc.)">
              Healthcare (Telemedicine, Patient Management, Wellness, etc.)
            </option>
            <option value="IoT (Device Control / Monitoring Apps)">
              IoT (Device Control / Monitoring Apps)
            </option>
            <option value="Corporate App (Productivity, BI, Field Service, Partner App, etc.)">
              Corporate App (Productivity, BI, Field Service, Partner App, etc.)
            </option>
            <option value="E-commerce (Store, E-catalogue, Marketplace, etc.)">
              E-commerce (Store, E-catalogue, Marketplace, etc.)
            </option>
          </select>

          {errors.service && (
            <p className="text-red-500 text-sm mt-1">{errors.service}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default AndroidAppFrom;
