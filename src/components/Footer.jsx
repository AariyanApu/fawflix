import { navigation } from '@/utils/data';
import FooterCreditCard from './FooterCreditCard';

export default function Footer() {
  return (
    <div className=" flex w-full flex-col mb-10">
      <div className=" red_gradient_border w-full mt-10   sm:mt-20 lg:mt-24" />
      <div className=" lg:flex lg:items-center lg:justify-between px-2 pt-8">
        <div>
          <div>
            {/* Request to Upload Movie  */}
            <h3 className="sm:text-2xl text-lx leading-6 red_gradient text-center sm:text-left font-semibold">
              {' '}
              The Movie... You wish to watch !{' '}
            </h3>
            <p className="mt-2 text-xs leading-6 red_gradient font-normal">
              Please write the name of that movie, and we will upload that.
            </p>
          </div>

          {/* Request Form  */}

          <form className="mt-6 mb-5 sm:mb-0 flex sm:max-w-md flex-col sm:flex-row">
            <label htmlFor="email-address" className="sr-only">
              Write the movie Name
            </label>
            <input
              type="text"
              name="email-address"
              id="email-address"
              required
              className="input_field sm:w-56"
              placeholder=" Write The Movie Name"
            />
            <div className="mt-4 rounded-md sm:mt-0 sm:ml-4 sm:flex-shrink-0">
              <button type="submit" className="button_style">
                Upload It Now
              </button>
            </div>
          </form>
        </div>

        {/* Social Icon */}

        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl red_gradient mb-2 font-semibold">
            {' '}
            You Can Join Our Community!
            <br />
            <span className="text-base font-normal">
              We will be Glad to have you.
            </span>
          </h2>
          <div className="flex space-x-6 md:order-2 ">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-red-600 hover:text-rose-700  transition duration-500 ease-in-out "
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className=" red_gradient_border w-full mt-8 " />

      {/* Disclaimer  */}

      <div className=" pt-8 md:flex md:items-center md:justify-between text-center  px-2">
        <p className="text-xs leading-5 red_gradient sm:w-[400px] w-80 mx-auto sm:mx-0 pb-2 sm:pb-0 sm:text-left">
          This website is for educational purpose only. We do not host any files
          on our server. All contents are provided by non-affiliated third
          parties.
        </p>

        {/* Footer Credit */}

        <div className="flex flex-col sm:text-right ">
          <FooterCreditCard
            name="Avro Ibne-Hayder"
            link="https://www.facebook.com/mdsohel.hayder.1"
            desc="Link share and maintenance by "
          />
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
