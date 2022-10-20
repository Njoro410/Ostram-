import React from "react";

const Details = () => {
  return (
    <div className="w-full h-12 hidden md:grid grid-cols-3  border divide-x divide-slate-300 border-slate-300">
      <div className="flex items-center justify-center text-sm font-extralight">
        <a
          className="flex items-center justify-center gap-1.5 sm:justify-start"
          href="mailto:ostramsacco01.com"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5 shrink-0 text-orange-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <span className="text-gray-700 ">ostramsacco01@gmail.com</span>
        </a>
      </div>
      <div className="flex items-center justify-center">
        
      <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="tel:+254740790988"
                    >
                      
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5 shrink-0 text-orange-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>

                      <span className="text-gray-700 "><span>0740 790 988</span></span>
                    </a>

         </div>
      <div className="flex items-center justify-center">M-PESA Till 955137</div>
    </div>
  );
};

export default Details;
