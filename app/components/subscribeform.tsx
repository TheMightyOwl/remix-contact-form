import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import signUpGraphicMobile from "../../public/illustration-sign-up-mobile.svg"
import signupGraphicDesktop from "../../public/illustration-sign-up-desktop.svg"
import { useMediaQuery } from 'react-responsive'

type Inputs = {
    email: string,
}

export default function SubscribeForm({ setSubmitted, setEmail }: {
    setSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
}) {
    const { register, handleSubmit, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm<Inputs>()

    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const updateList = [
        "Product discovery and building what matters",
        "Measuring to ensure products are a success",
        "And much more!"
    ]

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 768px)'
    })

    const submitForm: SubmitHandler<Inputs> = (data) => {
        if (!errors.email) {
            setSubmitted(true);
            setEmail(data.email);
        }
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({ email: "" });
        }
    }, [formState, isSubmitSuccessful, reset])

    return (
        <div className='flex flex-col md:flex-row-reverse'>

            {isDesktopOrLaptop
                ? <img src={signupGraphicDesktop} alt="" />
                : <img src={signUpGraphicMobile} alt="" />
            }
            <div className="flex flex-col justify-center px-6 pt-8 md:w-[400px] md:mr-12">
                <h1 className="font-bold">Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul className="mb-8">
                    {updateList.map((item, i) =>
                        <li key={i} className="bullet mb-3 last:mb-0">{item}</li>
                    )}
                </ul>
                <div className="flex flex-row justify-between">
                    <p className="text-xs font-bold mb-2">Email address</p>
                    {errors.email &&
                        <p className="text-xs font-bold mb-2 text-tomato">Valid email required</p>
                    }
                </div>
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
                        className="hover:bg-gradient-to-r from-[#ff5478] from-0% to-tomato to-60%
                                   hover:drop-shadow-[0_15px_15px_rgba(255,98,87,0.3)] bg-dark-slate
                                   text-white w-full p-3 rounded-lg my-5 font-bold h-14 focus:outline-none"
                        type="submit"
                    >
                        Subsribe to monthly newsletter
                    </button>
                </form>
            </div>
        </div>
    );
}
