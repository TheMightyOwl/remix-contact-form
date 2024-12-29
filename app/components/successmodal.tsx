import { FormEventHandler } from "react";
import iconSuccess from "../../public/icon-success.svg"

export default function SuccessModal({ onDismiss, email }: {
    onDismiss: FormEventHandler<HTMLFormElement>,
    email: string,
}) {

    return (
        <div className="px-6 py-8 flex flex-col justify-between h-screen md:h-1/4 md:w-[400px]">
            <div className="h-3/4 flex flex-col place-content-center">
                <img className="grow-0 w-[64px]" src={iconSuccess} alt="" />
                <h1 className="font-bold my-9 md:text-6xl">Thanks for subscribing!</h1>
                <p>A confirmation email has been send to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.</p>
            </div>
            <form onSubmit={onDismiss}>
                <button
                    className="hover:bg-gradient-to-r from-pink-400 to-tomato bg-dark-slate text-white w-full p-3 rounded-lg my-5 font-bold h-14"
                >
                    Dismiss message
                </button>
            </form>
        </div>
    );
}