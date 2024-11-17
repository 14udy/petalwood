import React, { useState } from "react"
import FormInput from "../Inputs/FormInput"
import PasswordInput from "../Inputs/PasswordInput"

export default function LoginForm() {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsPending(true)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
    } catch (error) {
      setError(error)
    } finally {
      setIsPending(false)
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md m-4">
        <h2 className="text-2xl font-bold text-center text-gray-700 ">Login</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            handleChange={setEmail}
            required
            placeholder="Enter your email"
          />
          <PasswordInput password={password} handleChange={setPassword} />
          <button
            type="submit"
            className="mt-4 bg-secondary text-white py-2 px-4 rounded"
            disabled={isPending}
          >
            {isPending ? "Logging in..." : "Login"}
          </button>
          {error && (
            <div className="text-red-500 text-sm mt-2">{error.message}</div>
          )}
        </form>
      </div>
    </div>
  )
}
