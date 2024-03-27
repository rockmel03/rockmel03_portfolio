import React, { useId } from "react";
import AnimatedHeading from "../components/templetes/AnimatedHeading";
import Layout from "../components/Layout";

const InputField = ({ label, type = "text", className, ...rest }) => {
  const id = useId();

  return (
    <>
      {label && (
        <label for={id} className="block text-lg mb-2 font-medium">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={`w-full border-none outline-none  px-3 py-3 rounded-md text-lg font-medium  bg-light text-dark dark:bg-dark dark:text-light  ${className}`}
        {...rest}
      />
    </>
  );
};

const Contact = () => {
  return (
    <div>
      <Layout>
        <AnimatedHeading data={"Contact Me"} className={"mb-10"} />
        <div className="flex items-stretch justify-around">
          <div className="w-[40%] bg-yellow-dark rounded-lg"></div>
          <form className="w-[40%] rounded-lg p-5 grid grid-cols-12 gap-3 bg-zinc-200 text-dark dark:bg-zinc-800 dark:text-light shadow-xl ">
            <div className="col-span-6">
              <InputField placeholder="Enter Name" />
            </div>
            <div className="col-span-6">
              <InputField placeholder="Enter Email Address" type="email" />
            </div>
            <div className="col-span-6">
              <InputField placeholder="Enter Subject" type="tel" />
            </div>
            <div className="col-span-6">
              <InputField placeholder="Enter Phone Number" type="tel" />
            </div>
            <div className="col-span-12">
              <textarea
                className="w-full resize-none border-none outline-none px-2 py-2 rounded-md text-lg font-medium  bg-light text-dark dark:bg-dark dark:text-light"
                placeholder="Enter your message"
                rows={6}
              ></textarea>
            </div>
            <div className="col-span-12 ">
              <InputField
                type="submit"
                value={'Send'}
                className="!w-fit !px-5 !py-2 !bg-blue-600 text-zinc-50 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
