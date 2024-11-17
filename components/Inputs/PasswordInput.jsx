import React, { useState } from "react"

const PasswordInput = ({ password, handleChange }) => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  return (
    <div className="">
      <label className="block text-sm font-medium text-gray-700 ">
        Password
      </label>
      <div className="relative mt-1">
        <input
          className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-200 text-black  disabled:opacity-50"
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={(e) => handleChange(e.target.value)}
          required={true}
          placeholder="Enter Password"
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  )
}

export default PasswordInput
