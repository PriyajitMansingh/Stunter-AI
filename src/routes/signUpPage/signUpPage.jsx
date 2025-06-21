import { SignUp } from "@clerk/clerk-react"
import "./signUpPage.css"

const SignUpPage = () => {
  return (
    <div>
      <h1 className="signUpPage">
        <SignUp path="/sign-up" signInUrl="sign-in"/>
      </h1>
    </div>
  )
}

export default SignUpPage
