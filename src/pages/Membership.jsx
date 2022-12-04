import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
const Membership = () => {
  const form = useRef();
  const full_user_name = useRef(null);
  const user_phone = useRef(null);
  const mailRef = useRef(null);
  const next_of_kin_full_name = useRef(null);
  const next_relationship = useRef(null);
  const next_phone = useRef(null);
  const location = useRef(null);
  const user_id = useRef(null);

  const captchaRef = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_s38ry0n",
        "template_r1jllsv",
        form.current,
        "UfPUtIxYNSr_hAtqq"
      )
      .then(
        (result) => {
          full_user_name.current.value = "";
          user_phone.current.value = "";
          mailRef.current.value="";
          next_of_kin_full_name.current.value = "";
          next_relationship.current.value = "";
          next_phone.current.value = "";
          location.current.value = "";
          user_id.current.value = "";
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
    <div className="dark: dark:bg-gray-800 dark:text-white">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sacco Membership</title>
      </Helmet>
      <div className="p-6 py-12  bg-orange-500">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-center text-4xl md:text-6xl tracking-tighter font-bold">
              Membership
            </h2>
          </div>
        </div>
      </div>
      <div className="container flex justify-center ">
        <p className="text-xl py-8 text-center w-3/4">
          At Ostram Sacco, we believe that every individual should be encouraged
          to develop a saving habit. We believe that you can take charge of your
          money and help it grow.
        </p>
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2">
        <div className="md:border-r-2 md:px-5">
          <p>
            An application for membership has to be made in writing or filling
            the form on the right. You can also opt to download the form from
            here or walk into our office for a one to one session where all your
            questions will be answered.
            <br />
            <br />
            Alternatively, this process can be done by our agents who visit
            various sub-counties within Kajiado County.
            <br />
            <br />A non-refundable fee of 300 shillings is charged for
            membership, one is required to provide two (2) passport sized
            photographs and a photocopy of the National Identity Card.
          </p>
          <ul className="steps steps-vertical">
            <li className="step step-neutral">Fill the registration form</li>
            <li className="step step-neutral">Avail 2 passport photographs</li>
            <li className="step step-neutral">Photocopy of your National ID</li>
            <li className="step step-neutral">
              Pay a Kshs.300/= registration fee
            </li>
            <li className="step step-neutral">Receive a member saving book</li>
            <li className="step step-neutral">Start saving</li>
          </ul>
        </div>

        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[1050px] dark: dark:bg-gray-800">
            <p className="text-center text-lg underline underline-offset-4">
              Fill details below
            </p>
            <form
              id="register"
              ref={form}
              onSubmit={(event) => {
                event.preventDefault();
                captchaRef.current.execute();
              }}
            >
              <div className="mb-5">
                <label
                  for="name"
                  className="mb-3 block text-base font-medium text-black"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="full_user_name"
                  ref={full_user_name}
                  required
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#753636] dark:bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <label
                  for="name"
                  className="mb-3 block text-base font-medium text-orange-500"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="user_phone"
                  required
                  ref={user_phone}
                  id="phone_number"
                  placeholder="Phone Number"
                  className="w-full rounded-md border border-[#753636]  dark:bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <label
                  for="name"
                  className="mb-3 block text-base font-medium text-orange-500"
                >
                  ID Number
                </label>
                <input
                  type="text"
                  name="id_number"
                  required
                  ref={user_id}
                  id="id_number"
                  placeholder="ID Number"
                  className="w-full rounded-md border border-[#753636]  dark:bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <label
                  for="name"
                  className="mb-3 block text-base font-medium text-orange-500"
                >
                  Select your location
                </label>
                <select
                  id="countries"
                  name="location"
                  required
                  ref={location}
                  class="w-full rounded-md border border-[#753636]  dark:bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option selected>Choose your location</option>
                  <option value="Kajiado">Kajiado Town</option>
                  <option value="Ilbissil">Ilbissil</option>
                  <option value="Isinya">Isinya</option>
                  <option value="M_46">M-46</option>
                  <option value="Sajiloni">Sajiloni</option>
                  <option value="Enkorika">Enkorika</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-5">
                <label
                  for="name"
                  className="mb-3 block text-base font-medium text-orange-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  ref={mailRef}
                  id="name"
                  placeholder="Enter your email (optional)"
                  className="w-full rounded-md border border-[#753636]  dark:bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              {/* <div className="mb-6 pt-4">
                <label className="mb-5 block text-xl font-semibold text-orange-500">
                  Upload File
                </label>

                <div className="mb-8">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="sr-only"
                  />
                  <label
                    for="file"
                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#753636] p-12 text-center"
                  >
                    <div>
                      <span className="mb-2 block text-xl font-semibold text-orange-500">
                        Drop files here
                      </span>
                      <span className="mb-2 block text-base font-medium text-orange-500">
                        Or
                      </span>
                      <span className="inline-flex rounded border border-[#753636] py-2 px-7 text-base font-medium text-orange-500">
                        Browse
                      </span>
                    </div>
                  </label>
                </div>
              </div> */}

              <div className="mb-5">
                <label
                  for="name"
                  className="mb-3 block text-base font-medium text-orange-500"
                >
                  Next of Kin Full Name
                </label>
                <input
                  type="text"
                  ref={next_of_kin_full_name}
                  name="next_of_kin_full_name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#753636]  dark:bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <label
                  for="name"
                  className="mb-3 block text-base font-medium text-orange-500"
                >
                  Relationship with next of kin
                </label>
                <input
                  type="text"
                  ref={next_relationship}
                  name="next_relationship"
                  id="name"
                  placeholder="Relationship with next of kin"
                  className="w-full rounded-md border border-[#753636]  dark:bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <label
                  for="name"
                  className="mb-3 block text-base font-medium text-orange-500"
                >
                  Next of Kin number
                </label>
                <input
                  type="tel"
                  ref={next_phone}
                  name="next_phone"
                  id="name"
                  placeholder="Next of Kin number"
                  className="w-full rounded-md border border-[#753636]  dark:bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-orange-500">
                  Type of account
                </label>
                <div className="flex items-center flex-col md:flex-row space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      value="Individual"
                      name="account"
                      id="radioButton1"
                      className="h-5 w-5"
                    />
                    <label
                      for="radioButton1"
                      className="pl-3 text-base font-medium text-orange-500"
                    >
                      Individual
                    </label>
                  </div>
                  <div className="flex items-center ">
                    <input
                      type="radio"
                      value="Joint Group"
                      name="account"
                      id="radioButton2"
                      className="h-5 w-5"
                    />
                    <label
                      for="radioButton2"
                      className="pl-3 text-base font-medium text-orange-500"
                    >
                      Joint Group(Chama)
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      value="Minor"
                      name="account"
                      id="radioButton2"
                      className="h-5 w-5"
                    />
                    <label
                      for="radioButton2"
                      className="pl-3 text-base font-medium text-orange-500"
                    >
                      Minor/Child Membership
                    </label>
                  </div>
                </div>
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
                <button type="submit" className="btn w-full mt-5">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
