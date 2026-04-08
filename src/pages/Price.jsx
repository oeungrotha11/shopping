import React from 'react'

function Price() {
  return (
    <div>
      <div class="bg-gray-100 px-4 py-8">
      <div class="max-w-6xl max-lg:max-w-3xl mx-auto">
        <div class="text-center">
          <h2 class="text-slate-900 text-3xl md:text-4xl font-bold mb-4">Choose a Subscription</h2>
          <p class="text-base text-slate-500">choose a plan tailored to your needs</p>
        </div>

        <div class="flex mx-auto bg-white rounded-full max-w-[250px] p-1 mt-10">
          <button class="w-full text-[15px] font-medium bg-purple-600 text-white py-2 px-4 tracking-wide rounded-full cursor-pointer">
            Monthly</button>
          <button
            class="w-full text-[15px] font-medium bg-transparent text-slate-900 py-2 px-4 tracking-wide rounded-full cursor-pointer">
            Yearly</button>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-md:max-w-md max-md:mx-auto mt-8">

          <div class="bg-white shadow-sm rounded-3xl p-6 hover:scale-[1.03] transition-all duration-300">
            <div class="relative h-full">
              <h4 class="text-slate-900 text-lg font-medium mb-4">Basic</h4>
              <h3 class="text-4xl font-semibold">$4.50<sub class="text-slate-500 font-medium text-sm ml-1">/ month</sub></h3>

              <hr class="my-6 border-gray-300" />

              <div>
                <ul class="space-y-4">
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    50 Image generations
                  </li>
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    500 Credits
                  </li>
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Monthly 100 Credits Free
                  </li>
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Customer Support
                  </li>
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Dedicated Server
                  </li>
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Priority Generations
                  </li>
                </ul>
                <div class="min-h-[38px] mt-8">
                  <button type="button" class="absolute bottom-0 left-0 right-0 w-full px-4 py-2 text-[15px] font-medium tracking-wide bg-purple-600 hover:bg-purple-700 text-white rounded-lg cursor-pointer transition-all">Get Started</button>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-sm rounded-3xl p-6 hover:scale-[1.03] transition-all duration-300">
            <div class="relative h-full">
              <h4 class="text-slate-900 text-lg font-medium mb-4">Startup</h4>
              <h3 class="text-4xl font-semibold">$14.50<sub class="text-slate-500 font-medium text-sm ml-1">/ month</sub></h3>

              <hr class="my-6 border-gray-300" />

              <div>
                <ul class="space-y-4">
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    200 Image generations
                  </li>
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    1200 Credits
                  </li>
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Monthly 1000 Credits Free
                  </li>
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Customer Support
                  </li>
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Dedicated Server
                  </li>
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Priority Generations
                  </li>
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    150GB Cloud Storage
                  </li>
                </ul>
                <div class="min-h-[38px] mt-8">
                  <button type="button" class="absolute bottom-0 left-0 right-0 w-full px-4 py-2 text-[15px] font-medium tracking-wide bg-purple-600 hover:bg-purple-700 text-white rounded-lg cursor-pointer transition-all">Get Started</button>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-sm rounded-3xl p-6 hover:scale-[1.03] transition-all duration-300">
            <div class="relative h-full">
              <h4 class="text-slate-900 text-lg font-medium mb-4">Enterprise</h4>
              <h3 class="text-4xl font-semibold">$24.50<sub class="text-slate-500 font-medium text-sm ml-1">/ month</sub></h3>

              <hr class="my-6 border-gray-300" />

              <div>
                <ul class="space-y-4">
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    400 Image generations
                  </li>
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    2000 Credits
                  </li>
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Monthly 1500 Credits Free
                  </li>
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Customer Support
                  </li>
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Dedicated Server
                  </li>
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Priority Generations
                  </li>
                  <li class="flex items-center text-[15px] text-slate-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" class="mr-3 bg-purple-100 fill-purple-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    500GB Cloud Storage
                  </li>
                </ul>
                <div class="min-h-[38px] mt-8">
                  <button type="button" class="absolute bottom-0 left-0 right-0 w-full px-4 py-2 text-[15px] font-medium tracking-wide bg-purple-600 hover:bg-purple-700 text-white rounded-lg cursor-pointer transition-all">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Price
