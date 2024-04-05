"use client";

import { navigation } from "@/utils/data";
import { useState } from "react";
import * as Yup from "yup";
import FooterCreditCard from "./FooterCreditCard";

export default function Footer() {
  const [movieRequest, setMovieRequest] = useState({ title: "" });
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await validationSchema.validate(movieRequest);

      await fetch("/api/help", {
        method: "POST",
        body: JSON.stringify(movieRequest),
      });
      setIsFormSubmitted(true);

      setMovieRequest({ title: "" });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" mb-10 flex w-full flex-col">
      <div className=" red_gradient_border mt-10 w-full   sm:mt-20 lg:mt-24" />
      <div className=" px-2 pt-8 lg:flex lg:items-center lg:justify-between">
        <div>
          <div className="items-center text-center">
            {/* Request to Upload Movie  */}
            <h3 className="text-lx red_gradient items-center font-semibold  leading-6 sm:text-left sm:text-2xl">
              {" "}
              The Movie... You wish to watch !{" "}
            </h3>
            <p className="red_gradient mt-2 text-xs font-normal leading-6 sm:text-left">
              Please write the name of that movie, and we will upload that.
            </p>
          </div>

          {/* Request Form  */}
          {!isFormSubmitted ? (
            <form
              className="mb-5 mt-6 flex flex-col sm:mb-0 sm:max-w-md sm:flex-row"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="input_field sm:w-56"
                placeholder=" Write The Movie Name"
                value={movieRequest.title}
                onChange={(e) =>
                  setMovieRequest({ ...movieRequest, title: e.target.value })
                }
                error={isFormSubmitted && validationSchema?.errors?.title}
              />
              <div className="mt-4 rounded-md sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="button_style w-full"
                  onClick={handleSubmit}
                >
                  {!loading ? "Upload It Now" : "Requesting..."}
                </button>
              </div>
            </form>
          ) : (
            <p className="red_gradient mt-2 text-xs font-normal leading-6">
              {" "}
              Your movie request Submitted Successfully{" "}
            </p>
          )}
        </div>

        {/* Social Icon */}

        <div className="flex flex-col items-center text-center">
          <h2 className="red_gradient mb-2 text-2xl font-semibold">
            {" "}
            You Can Join Our Community!
            <br />
            <span className="text-base font-normal">
              We will be Glad to have you.
            </span>
          </h2>
          <div className="flex space-x-6 md:order-2 ">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="icon_style">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className=" red_gradient_border mt-8 w-full " />

      {/* Disclaimer  */}

      <div className=" px-2 pt-8 text-center md:flex md:items-center  md:justify-between">
        <p className="red_gradient mx-auto w-80 pb-2 text-xs leading-5 sm:mx-0 sm:w-[400px] sm:pb-0 sm:text-left">
          This website is for educational purpose only. We do not host any files
          on our server. All contents are provided by non-affiliated third
          parties.
        </p>

        {/* Footer Credit */}

        <div className="flex flex-col sm:text-right ">
          {/* <FooterCreditCard
            name="Avro Ibne-Hayder"
            link="https://www.facebook.com/mdsohel.hayder.1"
            desc="Link share and maintenance by "
          /> */}
          <FooterCreditCard
            name="Aariyan Apu"
            link="https://www.aariyanapu.com/"
            desc=" &copy; Design and Developed by "
          />
        </div>
      </div>
    </div>
  );
}
