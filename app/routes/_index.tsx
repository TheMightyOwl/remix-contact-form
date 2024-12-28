import type { MetaFunction } from "@remix-run/node";
import signUpGraphicMobile from "../../public/illustration-sign-up-mobile.svg"
import iconList from "../../public/icon-list.svg"
import { list } from "postcss";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  const listStyle = {
    listStyleImage: `url(${iconList})`
  }

  return (
    <>
    <div>
    <img src={signUpGraphicMobile} alt="" />
    <div className="px-6 py-8">
      <h1 className="font-bold">Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul className="">
        {updateList.map((item) =>
          <li className="bullet mb-4 last:mb-0">{item}</li>
        )}
      </ul>
    </div>
    </div>
    </>
  )
}

const updateList = [
  "Product discovery and building what matters",
  "Measuring to ensure products are a success",
  "And much more!"
]