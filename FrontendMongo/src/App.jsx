import "./App.css"
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.text();
      console.log("Server response:", data);
      alert("Data sent successfully!");
    } catch (err) {
      console.error(err);
      alert("Error sending data");
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto font-mono mt-30">
      <div className="relative p-6 bg-black border-2 border-green-400 rounded-lg shadow-lg overflow-hidden">

        {/* Corners */}
        <div className="absolute top-0 left-0 w-6 h-1 bg-green-400"></div>
        <div className="absolute top-0 left-0 w-1 h-6 bg-green-400"></div>
        <div className="absolute top-0 right-0 w-6 h-1 bg-green-400"></div>
        <div className="absolute top-0 right-0 w-1 h-6 bg-green-400"></div>
        <div className="absolute bottom-0 left-0 w-6 h-1 bg-green-400"></div>
        <div className="absolute bottom-0 left-0 w-1 h-6 bg-green-400"></div>
        <div className="absolute bottom-0 right-0 w-6 h-1 bg-green-400"></div>
        <div className="absolute bottom-0 right-0 w-1 h-6 bg-green-400"></div>

        {/* Glow */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-green-900/20 to-transparent"></div>

        {/* Header */}
        <label className="mb-3 text-green-400 text-sm tracking-wider flex items-center">
          <span className="mr-2 text-green-600">➜</span>
          <span className="text-green-300 font-bold">ADMIN_ACCESS</span>
          <span className="ml-2 opacity-75 animate-pulse">▋</span>
        </label>

        <div className="space-y-5">

          {/* NAME */}
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent text-green-300 text-base border-2 border-green-500 rounded-md p-3 
            focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-600 placeholder-green-600/60"
            placeholder="➤ ENTER NAME"
          />

          {/* EMAIL */}
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent text-green-300 text-base border-2 border-green-500 rounded-md p-3 
            focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-600 placeholder-green-600/60"
            placeholder="➤ ENTER EMAIL"
            type="email"
          />

          {/* PASSWORD */}
          <div className="relative">
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-transparent text-green-300 text-base border-2 border-green-500 rounded-md p-3 
              focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-600 placeholder-green-600/60 pr-10"
              placeholder="➤ ENTER CREDENTIALS"
              type="password"
            />

            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>

          {/* SEND BUTTON */}
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center gap-2 bg-green-500/40 text-white px-4 py-2 rounded-lg 
            hover:bg-green-600 active:scale-95 transition font-medium"
          >
            SEND
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4l16 8-16 8 4-8-4-8z"
              />
            </svg>
          </button>
        </div>

        {/* Warning */}
        <div className="mt-4 flex flex-col gap-2">
          <p className="text-xs text-green-500 opacity-80 flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span>
              <span className="text-red-400">WARNING:</span> Unauthorized access will be reported
            </span>
          </p>
        </div>

        {/* Side accents */}
        <div className="absolute top-0 right-12 w-px h-4 bg-green-500/50"></div>
        <div className="absolute top-0 right-16 w-px h-6 bg-green-500/30"></div>
        <div className="absolute top-0 right-20 w-px h-2 bg-green-500/70"></div>

        <div className="absolute bottom-0 left-12 w-px h-4 bg-green-500/50"></div>
        <div className="absolute bottom-0 left-16 w-px h-6 bg-green-500/30"></div>
        <div className="absolute bottom-0 left-20 w-px h-2 bg-green-500/70"></div>
      </div>
    </div>
  );
}

export default App;
