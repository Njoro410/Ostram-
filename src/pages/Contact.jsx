import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const Contact = () => {
  //email

  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const messageRef = useRef(null);

  const form = useRef();

  const captchaRef = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_s38ry0n",
        "template_evwf50i",
        form.current,
        "UfPUtIxYNSr_hAtqq"
      )
      .then(
        (result) => {
          nameRef.current.value = "";
          mailRef.current.value = "";
          messageRef.current.value = "";
          Toast.fire({
            icon: "success",
            title: "Message sent",
          });
          console.log(result.text);
        },
        (error) => {
          Toast.fire({
            icon: "error",
            title: "Error, not sent",
          });
        }
      );
  };

  async function onExpired(value) {
    await Toast.fire({
      icon: "error",
      title: "reCAPTCHA Expired",
    });
  }

  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
  });
  return (
    <div className="w-full bg-slate-100 font-Acme border-b-2">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us</title>
        <meta
          name="description"
          content="Reach out to us and we'll get back as soon as possible"
        />
      </Helmet>
      <div className="p-6 py-12 bg-orange-500">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-center text-4xl md:text-6xl tracking-tighter font-bold">
              Contact Us
            </h2>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:divide-x">
        <div className="flex justify-center text-slate-800 items-center">
          <div className="py-6 px-8 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">
              Get in <span className="text-orange-500">touch</span>{" "}
            </h1>
            <p className="pt-2 pb-4">
              Have an enquiry? Need to tell us something? Have a suggestion?
              Feel free to contact us.
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 bg-slate-300 px-2 py-2 mr-2 rounded"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <span>
                  P.O Box 87 - 01100
                  <br />
                  Kajiado Main Stage Safaricom House
                  <br />
                  Kajiado,Kenya
                </span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 bg-slate-300 px-2 py-2 mr-2 rounded"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <span>0740 790 988</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 bg-slate-300 px-2 py-2 mr-2 rounded"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <span>ostramsacco@gmail.com</span>
              </p>

              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 bg-slate-300 px-2 py-2 mr-2 rounded"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="text-gray-700 ">
                  <span className="text-orange-500">Working Hours</span>
                  <br />
                  <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
                  <br />
                  <span>Saturdays: 9:00 AM - NOON</span>
                  <br />
                  <span>Closed on Sundays and Public Holidays</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <section className="p-6 text-slate-500">
            <form
              id="cont"
              ref={form}
              onSubmit={(event) => {
                event.preventDefault();
                captchaRef.current.execute();
              }}
              className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow-xl bg-slate-100"
            >
              <div>
                <label for="name" className="block mb-1 ml-1">
                  Name
                </label>
                <input
                  name="name"
                  ref={nameRef}
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="block text-black w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-slate-300"
                />
              </div>
              <div>
                <label for="email" className="block mb-1 ml-1">
                  Email
                </label>
                <input
                  name="email"
                  ref={mailRef}
                  id="email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="block text-black w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-slate-300"
                />
              </div>
              <div>
                <label for="message" className="block mb-1 ml-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  ref={messageRef}
                  type="text"
                  placeholder="Message..."
                  className="block text-black w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-slate-300"
                ></textarea>
              </div>
              <ReCAPTCHA
                sitekey="6LcMjVQjAAAAAI5onnD9l8UcqPDXu2EA6C-DVswM"
                size="invisible"
                theme="light"
                ref={captchaRef}
                onChange={sendEmail}
                onExpired={onExpired}
                badge="inline"
              />
              <div>
                <button type="submit" className="btn w-full bg-orange-500">
                  Send
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
