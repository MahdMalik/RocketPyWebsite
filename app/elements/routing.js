import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

//these just store functions to go to different pages, so i don't have to rewrite code
export const useRouting = () => {
    const router = useRouter()
  
    const goToLogin = async() => {
        router.push("/login")
    }

    const goToRegister = async() => {
        router.push("/register")
    }

    const goToLandingPage = async() => {
        router.push("/")
    }

    const goToMain = async() => {
        router.push("/main")
    }

    return {goToLogin, goToRegister, goToLandingPage, goToMain}
}

//just run this once on mount, send them to landing page afterwards
export function Logout() {
  const { goToLandingPage } = useRouting();

  useEffect(() => {
    console.log("erased user data!")
    localStorage.removeItem("user-data")
    goToLandingPage();
  }, []);

  return null; // no UI needed
}