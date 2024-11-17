"use client"
import ViewCaravans from "@/components/admin/ViewCaravans"
import LoginForm from "@/components/auth/LoginForm"
import { supabase } from "@/Utils/Supabase/supabase"
import React, { useEffect, useState } from "react"

export default function Admin() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSession = async () => {
      setLoading(true)
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()
        setSession(session)

        // Subscribe to authentication state changes
        const { data: sub } = supabase.auth.onAuthStateChange(
          (_event, session) => {
            setSession(session)
          }
        )

        // Cleanup subscription on unmount
        return () => {
          sub.subscription.unsubscribe()
        }
      } catch (error) {
        console.error("Error fetching session:", error)
      } finally {
        setLoading(false)
      }
    }

    const cleanup = fetchSession()

    // If cleanup is a function, return it
    return () => {
      if (typeof cleanup === "function") cleanup()
    }
  }, [])

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    )

  if (!session) {
    return <LoginForm />
  }

  return (
    <div className="min-h-screen">
      <div className="mt-[70px] p-4">Admin</div>
      <ViewCaravans session={session}/>
    </div>
  )
}
