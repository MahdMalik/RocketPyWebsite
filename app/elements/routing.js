import { useRouter } from "next/navigation"

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
