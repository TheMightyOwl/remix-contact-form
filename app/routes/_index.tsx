import type { MetaFunction } from "@remix-run/node"
import signUpGraphicMobile from "../../public/illustration-sign-up-mobile.svg"
import iconList from "../../public/icon-list.svg"
import iconSuccess from "../../public/icon-success.svg"
import { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { list } from "postcss"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

type Inputs = {
  email: string,
}

export default function Index() {
  const { register, handleSubmit, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm<Inputs>()

  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  const [valid, setValid] = useState(true)

  const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const listStyle = {
    listStyleImage: `url(${iconList})`
  }

  const submitForm: SubmitHandler<Inputs> = (data) => {
    if (!errors.email) {
      setSubmitted(true);
      setEmail(data.email);
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email: ""});
    }
  }, [formState, isSubmitSuccessful, reset])

  function dismiss() {
    setEmail("")
    setValid(true)
    setSubmitted(false)
  }

  return (
    submitted ?
      <div className="px-6 py-8 flex flex-col justify-between h-screen">
        <div className="h-3/4 flex flex-col place-content-center">
          <img className="grow-0 w-[64px]" src={iconSuccess} alt="" />
          <h1 className="font-bold my-9">Thanks for subscribing!</h1>
          <p>A confirmation email has been send to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.</p>
        </div>
        <form action="">
          <button
            className="bg-dark-slate text-white w-full p-3 rounded-lg my-5 font-bold h-14"
            onClick={dismiss}
          >
            Dismiss message
          </button>
        </form>
      </div>
      :
      <div>
        <img src={signUpGraphicMobile} alt="" />
        <div className="px-6 py-8">
          <h1 className="font-bold">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="mb-8">
            {updateList.map((item, i) =>
              <li key={i} className="bullet mb-3 last:mb-0">{item}</li>
            )}
          </ul>
          <p className="text-xs font-bold mb-2 inline-block float-left">Email address</p>
          {errors.email &&
            <p className="text-xs font-bold mb-2 inline-block float-right text-tomato">Valid email required</p>
          }
          <form id="email-form" onSubmit={handleSubmit(submitForm)}>
            <input
              className={`border border-grey w-full rounded-lg py-3 px-6 focus:outline-none focus:border-black ${errors.email && "border-tomato text-tomato bg-[#ffcdca]"}`}
              placeholder="name@company.com"
              {...register("email", { required: true, pattern: emailPattern })}
              type="text"
              name="email"
              id="email"
            />
            <button
              className="bg-dark-slate text-white w-full p-3 rounded-lg my-5 font-bold h-14 focus:outline-none"
              type="submit"
            >
              Subsribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
  )
}

const updateList = [
  "Product discovery and building what matters",
  "Measuring to ensure products are a success",
  "And much more!"
]