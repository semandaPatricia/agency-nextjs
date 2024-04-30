import React from "react";

const Services = () => {
  return (
    <div className=" m-10 text-white  ">
      <h1 className="text-2xl  tracking-wider justify-center flex ">
        {" "}
        Our Services
      </h1>
      <div className="mx-auto max-w-lg mt-24 ">
        <div className="divide-y divide-gray-300 ">
          <details className="group mb-3" open>
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
              Development
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="block h-5 w-5 group-open:hidden"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="hidden h-5 w-5 group-open:block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
            </summary>
            <div className="pb-4 text-secondary-500">
              This is the first item's accordion body.
            </div>
            <div class="space-x-2 flex flex-wrap gap-1">
              <span className="border border-gray-300 rounded-full px-4 text-sm text-gray-700 py-0.5">
                Full-stack
              </span>

              <span className="border border-gray-200 rounded-full px-4 text-sm text-gray-700 py-0.5">
              Front-end Development
              </span>

              <span className="border border-amber-600 rounded-full px-4 text-sm text-gray-600 py-0.5">
                Seo
              </span>
              <span className="border border-yellow-600 rounded-full px-4 text-sm text-gray-600 py-0.5">
              CMS Functionality
              </span>
            </div>
          </details>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
              Design
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="block h-5 w-5 group-open:hidden"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="hidden h-5 w-5 group-open:block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
            </summary>
            <div className="pb-4 text-secondary-500">
              This is the second item's accordion body.
            </div>
          </details>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
              Consulting
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="block h-5 w-5 group-open:hidden"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="hidden h-5 w-5 group-open:block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
            </summary>
            <div className="pb-4 text-secondary-500">
              This is the third item's accordion body.
            </div>
          </details>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
              product design
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="block h-5 w-5 group-open:hidden"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="hidden h-5 w-5 group-open:block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
            </summary>
            <div className="pb-4 text-secondary-500">
              This is the forth item's accordion body.
            </div>

            <div class="space-x-2">
              <span className="border border-gray-300 rounded-full px-4 text-sm text-gray-700 py-0.5">
                Label
              </span>

              <span className="border border-gray-200 rounded-full px-4 text-sm text-gray-700 py-0.5">
                Label
              </span>

              <span className="border border-amber-600 rounded-full px-4 text-sm text-gray-600 py-0.5">
                Label
              </span>
              <span className="border border-yellow-600 rounded-full px-4 text-sm text-gray-600 py-0.5">
                Labelkkk
              </span>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Services;
