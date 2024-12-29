import type { MetaFunction } from "@remix-run/node"
import { useState } from 'react'
import SubscribeForm from "~/components/subscribeform"
import SuccessModal from "~/components/successmodal"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="bg-charcoal h-screen grid md:place-content-center">
      <div className="bg-white md:h-max md:p-6 md:rounded-3xl">
        {submitted ?
          <SuccessModal onDismiss={() => setSubmitted(false)} email={email} />
          :
          <SubscribeForm setSubmitted={setSubmitted} setEmail={setEmail} />}
      </div>
    </div>
  )
}