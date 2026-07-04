import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#0a0a0a] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-black to-black">
      {/* 1. Main Card Animation: Fade in and Slide up */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="border border-white/10 backdrop-blur-xl bg-white/[0.02] rounded-3xl p-10 md:p-16 shadow-2xl w-full max-w-md mx-4"
      >
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-white tracking-tight"
          >
            Welcome
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-zinc-500 mt-2"
          >
            Enter your credentials to access your account
          </motion.p>
        </div>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          {/* 2. Input Animation: Slight slide from left */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full text-white outline-none bg-white/5 border border-white/10 focus:border-emerald-500 transition-colors rounded-2xl py-4 px-6 text-lg placeholder:text-zinc-600"
              type="email"
              placeholder="Email Address"
            />
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full text-white outline-none bg-white/5 border border-white/10 focus:border-emerald-500 transition-colors rounded-2xl py-4 px-6 text-lg placeholder:text-zinc-600"
              type="password"
              placeholder="Password"
            />
          </motion.div>

          {/* 3. Button Animation: Hover Scale and Tap effect */}
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#10b981" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="w-full mt-4 text-white font-bold bg-emerald-600 rounded-2xl py-4 px-6 text-xl shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
