import { useRouter } from "next/navigation"

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
