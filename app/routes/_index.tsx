import type { MetaFunction } from "@remix-run/node";
import signUpGraphicMobile from "../../public/illustration-sign-up-mobile.svg"
import iconList from "../../public/icon-list.svg"
import iconSuccess from "../../public/icon-success.svg"
import { useState } from 'react'
import { list } from "postcss";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  const listStyle = {
    listStyleImage: `url(${iconList})`
  }

  function submitForm() {
    setSubmitted(true)
  }

  return (
    submitted ?
      <div className="px-6 py-8 flex flex-col justify-between h-screen">
        <div className="h-3/4 flex flex-col place-content-center">
          <img className="grow-0 w-[64px]" src={iconSuccess} alt="" />
          <h1 className="font-bold my-9">Thanks for subscribing!</h1>
          <p>A confirmation email has been send to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.</p>
        </div>
        <button
          className="bg-dark-slate text-white w-full p-3 rounded-lg my-5 font-bold h-14"
          onClick={() => setSubmitted(!submitted)}
        >
          Dismiss message
        </button>
      </div>
      :
      <div>
        <img src={signUpGraphicMobile} alt="" />
        <div className="px-6 py-8">
          <h1 className="font-bold">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="mb-8">
            {updateList.map((item) =>
              <li className="bullet mb-3 last:mb-0">{item}</li>
            )}
          </ul>
          <p className="text-sm font-bold mb-1">Email address</p>
          <input className="border border-grey w-full rounded p-3" type="text" name="email" id="" onChange={(event) => setEmail(event.target.value)}/>
          <button
            className="bg-dark-slate text-white w-full p-3 rounded-lg my-5 font-bold h-14"
            onClick={() => setSubmitted(!submitted)}
          >
            Subsribe to monthly newsletter
          </button>
        </div>
      </div>
  )
}

const updateList = [
  "Product discovery and building what matters",
  "Measuring to ensure products are a success",
  "And much more!"
]