import * as React from "react";

function MyComponent(props) {
  return (
    <div className="flex flex-col pb-4 bg-white">
      <div className="flex justify-center items-center px-16 py-3.5 w-full bg-gray-800 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between max-w-full w-[749px] max-md:flex-wrap">
          <div className="flex flex-col flex-1 justify-center items-start py-2 pr-16 bg-white rounded-lg border border-solid border-zinc-200">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bddfe0e0eb97da98ea12eb6d7a90a808f344e1d9c597ba4006812d90daa41cd?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
              className="w-6 aspect-square"
            />
          </div>
          <div className="flex gap-5 justify-between my-auto text-sm leading-5 text-gray-300">
            <div>Categories</div>
            <div className="flex-auto">Website Builders</div>
          </div>
          <div className="self-start mt-5 text-sm leading-5 text-gray-300">
            Today's deals
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 mx-3 mt-6 bg-gray-50 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex z-10 flex-col mt-0 max-w-full w-[1090px]">
          <div className="flex flex-col px-7 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col pt-12 pb-2.5 ml-3 bg-gray-50 max-md:max-w-full">
              <div className="text-5xl text-slate-700 max-md:max-w-full max-md:text-4xl">
                Best Website builders in the US
              </div>
              <div className="shrink-0 mt-6 h-px bg-zinc-200 max-md:max-w-full" />
              <div className="flex gap-5 justify-between items-start mt-2.5 w-full text-sm leading-5 max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-0.5 mt-1.5 text-gray-600 max-md:flex-wrap max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/44c2b31f6f63e2adfc5de5ab18d8fb1554b6c8bcd36d0c1fe3091566c2a4ffa1?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                    className="w-5 aspect-square"
                  />
                  <div>Last Updated</div>
                  <div className="my-auto">-</div>
                  <div className="flex-auto text-sm leading-5">
                    February 22, 2020
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/33d3213079efdce9cee37800c05e3e006d1d2c0076c5e8328ee1a81932daf13d?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                    className="w-5 aspect-square"
                  />
                  <div className="grow whitespace-nowrap">
                    Advertising Disclosure
                  </div>
                </div>
                <div className="flex gap-1.5 text-center text-gray-500 whitespace-nowrap">
                  <div className="grow">Top Relevant</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5e182ca72f86d5b7c0ff998726dfa8cc2ad82f819199d3e2bc74b4ea1bad1e9?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                    className="w-6 aspect-square"
                  />
                </div>
              </div>
            </div>
            <div className="ml-3 max-w-full h-px bg-zinc-200 w-[1023px]" />
            <div className="flex gap-5 justify-between pr-20 mt-4 text-sm leading-5 text-gray-600 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
              <div className="grow justify-center py-3.5 pr-14 pl-4 text-sm leading-5 whitespace-nowrap bg-white rounded-xl max-md:pr-5">
                Tools
              </div>
              <div className="grow justify-center py-3.5 pr-12 pl-4 bg-white rounded-xl max-md:pr-5">
                AWS Builder
              </div>
              <div className="grow justify-center px-4 py-3.5 whitespace-nowrap bg-white rounded-xl max-md:pr-5">
                Start Build
              </div>
              <div className="grow justify-center py-3 pr-8 pl-4 whitespace-nowrap bg-white rounded-xl max-md:pr-5">
                Build Supplies
              </div>
              <div className="grow justify-center items-start py-3 pr-16 pl-4 text-sm leading-5 whitespace-nowrap bg-white rounded-xl max-md:pr-5">
                Tooling
              </div>
              <div className="grow justify-center py-3 pr-14 pl-4 whitespace-nowrap bg-white rounded-xl max-md:pr-5">
                BlueHosting
              </div>
            </div>
            <div className="flex gap-2.5 items-center self-start mt-5 text-sm leading-5 text-gray-500 max-md:flex-wrap max-md:max-w-full">
              <div className="self-stretch my-auto text-sm leading-5 text-gray-500">
                Home
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/22dba1a57915cd7bfe181eb93e776ce2caedc04c95e1d64a961f066c8d3e498b?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                className="self-stretch my-auto w-2.5 aspect-[1.25] fill-gray-500"
              />
              <div className="self-stretch">Hosting for all</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/22dba1a57915cd7bfe181eb93e776ce2caedc04c95e1d64a961f066c8d3e498b?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                className="self-stretch my-auto w-2.5 aspect-[1.25] fill-gray-500"
              />
              <div className="self-stretch text-gray-500">Hosting</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/22dba1a57915cd7bfe181eb93e776ce2caedc04c95e1d64a961f066c8d3e498b?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                className="self-stretch my-auto w-2.5 aspect-[1.25] fill-gray-500"
              />
              <div className="self-stretch">Hosting6</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/22dba1a57915cd7bfe181eb93e776ce2caedc04c95e1d64a961f066c8d3e498b?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                className="self-stretch my-auto w-2.5 aspect-[1.25] fill-gray-500"
              />
              <div className="grow self-stretch">Hosting5</div>
            </div>
          </div>
          <div className="flex gap-0 justify-between mt-11 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="z-10 justify-center items-center self-end px-6 mt-8 text-xl leading-7 text-gray-500 whitespace-nowrap bg-white rounded-full border border-solid aspect-[1.05] border-zinc-200 border-opacity-0 h-[45px] max-md:pr-5">
              1
            </div>
            <div className="pr-7 pb-2.5 bg-white rounded-xl max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col mt-0 max-md:mt-2.5">
                    <div className="flex gap-2 justify-between px-3 py-2 text-base leading-6 text-white bg-orange-500 rounded-none">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7306664779ae5765ddf4dcc1d9f9d0804bde18d831eadcc46bc3ac6cfa1255bf?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                        className="w-5 aspect-square"
                      />
                      <div className="flex-auto my-auto">Best Choice</div>
                    </div>
                    <div className="flex flex-col items-center pl-14 mt-14 text-sm leading-5 text-center text-gray-500 whitespace-nowrap max-md:pl-5 max-md:mt-10">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                        className="aspect-[1.37] w-[141px]"
                      />
                      <div className="mt-4">Builder 1</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[53%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow mt-7 text-base leading-6 text-gray-600 max-md:mt-10 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                      <span className="font-bold">
                        WixPro 72-Inch Responsive Website Builder
                      </span>
                      - Comprehensive Digital Platform Creation Tool,
                      Streamlined Design Interface for Professional Websites and
                      Online Stores (Black/Blue)
                    </div>
                    <div className="mt-3.5 font-bold leading-[150%] text-slate-700 max-md:max-w-full">
                      Main highlights
                    </div>
                    <div className="self-start mt-5 ml-5 max-md:max-w-full">
                      [What You Get]: Receive the WixPro website builder suite,
                      access to premium design templates, an extensive library
                      of widgets and apps, and detailed step-by-step guides.
                    </div>
                    <div className="flex gap-1 self-start px-px mt-8 text-blue-500 whitespace-nowrap leading-[150%]">
                      <div className="grow">Show more</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c5e3f938376029e2d95dee3aaef4f65da86dfa20d582dcccbe39315bea454c1?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                        className="w-4 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col whitespace-nowrap max-md:mt-6">
                    <div className="flex flex-col self-center px-8 pt-1 pb-5 max-w-full text-sky-800 bg-sky-50 rounded-none w-[145px] max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd21800d3b91349927d386e5202068bc87da108686b40930b980f861266f361a?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                        className="self-end w-2.5 aspect-square"
                      />
                      <div className="self-center mt-1.5 text-3xl leading-10">
                        9.8
                      </div>
                      <div className="mt-6 text-sm leading-5">Exceptional</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/775f970be52707584d29ea39d9d429412655498548c7a26ec93ece196aea8766?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                        className="self-center mt-2.5 w-full aspect-[7.69]"
                      />
                    </div>
                    <div className="justify-center items-center px-16 py-5 mt-20 text-base leading-6 text-center text-white bg-blue-500 rounded-xl max-md:px-5 max-md:mt-10">
                      View
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-0 justify-between mt-5 max-md:flex-wrap max-md:max-w-full">
            <div className="z-10 justify-center items-center self-end px-5 mt-8 text-xl leading-7 text-gray-500 whitespace-nowrap bg-white rounded-full border border-solid aspect-[1.05] border-zinc-200 h-[45px]">
              2
            </div>
            <div className="pr-7 pb-3 bg-white rounded-xl max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col mt-0 max-md:mt-2.5">
                    <div className="flex gap-2 justify-between px-3.5 py-2 text-base leading-6 text-white bg-orange-500 rounded-none">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2331e4b51e73fc12559c9fbe1094d0e157beedfcc39b3a283ec535c6323fa9ee?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                        className="w-5 aspect-square"
                      />
                      <div className="flex-auto my-auto">Best Value</div>
                    </div>
                    <div className="flex flex-col items-center pl-14 mt-10 text-sm leading-5 text-center text-gray-500 whitespace-nowrap max-md:pl-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                        className="aspect-[1.37] w-[141px]"
                      />
                      <div className="mt-8">Biulder</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[53%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow mt-7 text-base leading-6 text-gray-600 max-md:mt-10 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                      <span className="font-bold">
                        SiteCraft 68-Inch Ultimate Web Design Studio-
                      </span>{" "}
                      Advanced Site Creation Toolkit, Intuitive Drag-and-Drop
                      Editor for Dynamic Websites and E-commerce Platforms
                      (Green/White)
                    </div>
                    <div className="mt-4 font-bold leading-[150%] text-slate-700 max-md:max-w-full">
                      Main highlights
                    </div>
                    <div className="mt-5 max-md:max-w-full">
                      [What You Get]: Gain access to the SiteCraft design
                      studio, featuring a robust selection of design elements,
                      SEO optimization tools, and e-commerce integrations.
                    </div>
                    <div className="flex gap-1 self-start px-px mt-6 text-blue-500 whitespace-nowrap leading-[150%]">
                      <div className="grow">Show more</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c5e3f938376029e2d95dee3aaef4f65da86dfa20d582dcccbe39315bea454c1?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                        className="w-4 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col whitespace-nowrap max-md:mt-6">
                    <div className="flex flex-col self-center px-9 pt-1 pb-5 max-w-full text-sky-800 bg-sky-50 rounded-none w-[145px] max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/095a824aea11916565b84cda43b60ada51254ee9e0a0ca7fb7b1959aa44cc591?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                        className="self-end w-2.5 aspect-square"
                      />
                      <div className="self-center mt-1.5 text-3xl leading-10">
                        9.5
                      </div>
                      <div className="mt-6 text-sm leading-5">Excellent</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd8a17259dc74fd8f0f83e3644bcce11994fe055aeba9beada443dd272f3b2f4?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                        className="self-center mt-3.5 w-full aspect-[6.67]"
                      />
                    </div>
                    <div className="justify-center items-center px-16 py-5 mt-20 text-base leading-6 text-center text-white bg-blue-500 rounded-xl max-md:px-5 max-md:mt-10">
                      View
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-0 justify-between mt-10 max-md:flex-wrap max-md:max-w-full">
            <div className="z-10 justify-center items-center self-end px-5 mt-7 text-xl leading-7 text-gray-500 whitespace-nowrap bg-white rounded-full border border-solid aspect-[1.05] border-zinc-200 h-[45px]">
              3
            </div>
            <div className="px-9 pb-3 bg-white rounded-xl border border-solid border-black border-opacity-0 max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-center self-stretch my-auto text-sm leading-5 text-center text-gray-500 whitespace-nowrap max-md:mt-10">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                      className="aspect-[1.43] w-[147px]"
                    />
                    <div className="mt-4">Builder 1</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow mt-7 text-base leading-6 text-gray-600 max-md:mt-10 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                      <span className="font-bold">
                        WixPro 72-Inch Responsive Website Builder
                      </span>
                      - Comprehensive Digital Platform Creation Tool,
                      Streamlined Design Interface for Professional Websites and
                      Online Stores (Black/Blue)
                    </div>
                    <div className="mt-3.5 font-bold leading-[150%] text-slate-700 max-md:max-w-full">
                      Main highlights
                    </div>
                    <div className="self-start mt-4 ml-5 max-md:max-w-full">
                      [What You Get]: Receive the WixPro website builder suite,
                      access to premium design templates, an extensive library
                      of widgets and apps, and detailed step-by-step guides.
                    </div>
                    <div className="mt-8 text-blue-500 leading-[150%] max-md:max-w-full">
                      Show more
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col whitespace-nowrap max-md:mt-6">
                    <div className="flex flex-col items-center self-center px-8 py-5 max-w-full text-sky-800 bg-sky-50 rounded-none w-[145px] max-md:px-5">
                      <div className="text-3xl leading-10">9.3</div>
                      <div className="self-stretch mt-6 text-sm leading-5">
                        Exceptional
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/62af5d46e79744366108c30cc8adc0f06c419316e254bcb96fffb0c8505dc381?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                        className="mt-2.5 w-full aspect-[7.69]"
                      />
                    </div>
                    <div className="justify-center items-center px-16 py-5 mt-20 text-base leading-6 text-center text-white bg-blue-500 rounded-xl max-md:px-5 max-md:mt-10">
                      View
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-0 justify-between mt-10 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="z-10 justify-center items-center self-end px-5 mt-8 text-xl leading-7 text-gray-500 whitespace-nowrap bg-white rounded-full border border-solid aspect-[1.02] border-zinc-200 h-[45px]">
              4
            </div>
            <div className="px-11 pt-2.5 pb-7 bg-white rounded-xl border border-solid border-black border-opacity-0 max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[15%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-center self-stretch my-auto text-sm leading-5 text-center text-gray-500 whitespace-nowrap max-md:mt-10">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                      className="aspect-[1.37] w-[141px]"
                    />
                    <div className="mt-12 max-md:mt-10">CDK</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow mt-7 max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col max-md:max-w-full">
                      <div className="text-base leading-6 text-gray-600 max-md:max-w-full">
                        <span className="font-bold">
                          CDK Resposive Builder:
                        </span>{" "}
                        An extensive library of widgets and apps, and detailed
                        step-by-step guides
                      </div>
                      <div className="self-start px-1 pt-1.5 pb-3 mt-3 text-sm leading-5 text-sky-800 whitespace-nowrap bg-gray-100 rounded">
                        26% Off
                      </div>
                      <div className="mt-1 text-base font-bold leading-6 text-slate-700 max-md:max-w-full">
                        Main highlights
                      </div>
                      <div className="flex flex-col items-start py-2 pr-20 pl-3.5 mt-2 bg-orange-50 rounded-xl max-md:pr-5 max-md:max-w-full">
                        <div className="flex gap-2">
                          <div className="justify-center px-2.5 py-2 text-base leading-6 text-center text-blue-500 whitespace-nowrap bg-white rounded aspect-[1.43]">
                            9.9
                          </div>
                          <div className="flex-auto my-auto text-base leading-6 text-gray-600 capitalize">
                            building responsive
                          </div>
                        </div>
                        <div className="flex gap-2 mt-2 text-base leading-6 whitespace-nowrap">
                          <div className="justify-center px-2.5 py-2 text-center text-blue-500 bg-white rounded aspect-[1.43]">
                            8.9
                          </div>
                          <div className="flex-auto my-auto text-gray-600 capitalize">
                            Cool
                          </div>
                        </div>
                        <div className="flex gap-2 mt-2 text-base leading-6 whitespace-nowrap">
                          <div className="justify-center px-2.5 py-2 text-center text-blue-500 bg-white rounded aspect-[1.43]">
                            8.9
                          </div>
                          <div className="flex-auto my-auto text-gray-600 capitalize">
                            Docs
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 text-base leading-6 text-slate-700 max-md:max-w-full">
                        Why we love it
                      </div>
                      <div className="flex gap-2 self-start mt-3 text-base leading-6 text-gray-600 capitalize whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/90cb9db22dfef0f92a4ccd0e568907e8007672a69bc616d8beee27256c4f38b7?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                          className="w-6 aspect-square"
                        />
                        <div className="flex-auto my-auto">Documentation</div>
                      </div>
                      <div className="flex gap-2 self-start mt-1 text-base leading-6 text-gray-600 capitalize">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/90cb9db22dfef0f92a4ccd0e568907e8007672a69bc616d8beee27256c4f38b7?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                          className="w-6 aspect-square"
                        />
                        <div className="self-start mt-2">Easy Use</div>
                      </div>
                      <div className="flex gap-2 self-start mt-1 text-base leading-6 text-gray-600 capitalize">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/90cb9db22dfef0f92a4ccd0e568907e8007672a69bc616d8beee27256c4f38b7?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                          className="w-6 aspect-square"
                        />
                        <div className="my-auto">Out of box</div>
                      </div>
                    </div>
                    <div className="mt-3 text-base leading-6 text-blue-500 max-md:max-w-full">
                      Show more
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-center whitespace-nowrap max-md:mt-8">
                    <div className="flex flex-col items-center px-8 py-4 max-w-full text-sky-800 bg-sky-50 rounded-none w-[135px] max-md:px-5">
                      <div className="text-3xl leading-10">9.1</div>
                      <div className="self-stretch mt-7 text-sm leading-5">
                        Very Good
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d2545f9105753a67caa650a5f5d2382fa3cfd92920f016d5fb0047d86f7b5ac?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                        className="mt-2.5 w-full aspect-[6.67]"
                      />
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdaceae227ce58caed4cd345603502b572eb0005ee06b0658f20ddab61692cee?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                      className="mt-40 w-2.5 aspect-square max-md:mt-10"
                    />
                    <div className="justify-center items-center self-stretch px-16 py-5 mt-16 text-base leading-6 text-center text-white bg-blue-500 rounded-xl max-md:px-5 max-md:mt-10">
                      View
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-start mt-24 ml-8 text-3xl leading-10 text-slate-700 max-md:mt-10 max-md:max-w-full">
            Related deals you might like for
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f863181b166566a96cc261aa9fd2c584da20526678b9ffb270f104025506234e?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
            className="self-end mr-36 w-2.5 aspect-square max-md:mr-2.5"
          />
          <div className="flex flex-col mt-3.5 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pt-9 pb-5 mt-3.5 w-full bg-white rounded-xl max-md:mt-7">
                    <div className="flex flex-col items-center px-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                        className="max-w-full aspect-[1.37] w-[141px]"
                      />
                      <div className="flex gap-1 justify-between self-stretch mt-14 text-sky-800 max-md:mt-10">
                        <div className="grow justify-center px-2 py-2.5 text-sm leading-5 bg-gray-100 rounded-lg">
                          20% Off
                        </div>
                        <div className="grow justify-center py-2.5 pr-5 pl-2 text-sm leading-5 bg-gray-100 rounded-lg">
                          Limited time{" "}
                        </div>
                      </div>
                      <div className="mt-3 text-base font-bold leading-6 text-gray-500 whitespace-nowrap">
                        Webbuilder 1
                      </div>
                    </div>
                    <div className="flex flex-col px-5 mt-5">
                      <div className="text-base leading-6 text-gray-500">
                        Computer Modern clasic with wix support
                      </div>
                      <div className="flex gap-2.5 justify-between mt-3.5">
                        <div className="text-xl leading-7 text-gray-500">
                          $39.96
                        </div>
                        <div className="text-sm leading-5 text-gray-400">
                          $49.96
                        </div>
                        <div className="flex-auto text-sm leading-5 text-rose-500">
                          (20% Off)
                        </div>
                      </div>
                      <div className="shrink-0 mt-4 h-12 bg-blue-500 rounded-xl" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pt-9 pb-5 mt-2.5 w-full bg-white rounded-xl max-md:mt-6">
                    <div className="flex flex-col items-center px-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                        className="max-w-full aspect-[1.37] w-[141px]"
                      />
                      <div className="flex gap-1 justify-between self-stretch mt-14 text-sky-800 max-md:mt-10">
                        <div className="grow justify-center px-2 py-2.5 text-sm leading-5 bg-gray-100 rounded-lg">
                          20% Off
                        </div>
                        <div className="grow justify-center py-2.5 pr-5 pl-2 text-sm leading-5 bg-gray-100 rounded-lg">
                          Limited time{" "}
                        </div>
                      </div>
                      <div className="mt-3 text-base font-bold leading-6 text-gray-500 whitespace-nowrap">
                        Webbuilder 1
                      </div>
                    </div>
                    <div className="flex flex-col px-5 mt-5">
                      <div className="text-base leading-6 text-gray-500">
                        Computer Modern clasic with wix support
                      </div>
                      <div className="flex gap-2.5 justify-between mt-3.5">
                        <div className="text-xl leading-7 text-gray-500">
                          $39.96
                        </div>
                        <div className="text-sm leading-5 text-gray-400">
                          $49.96
                        </div>
                        <div className="flex-auto text-sm leading-5 text-rose-500">
                          (20% Off)
                        </div>
                      </div>
                      <div className="justify-center items-center px-16 py-5 mt-4 text-base leading-6 text-center text-white whitespace-nowrap bg-blue-500 rounded-xl max-md:px-5">
                        View Deal
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col pt-9 pb-5 w-full bg-white rounded-xl max-md:mt-3.5">
                    <div className="flex flex-col items-center px-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f495a3465c0db88858914036f4a7d285771e44954a0217088fb24b1c34c069df?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
                        className="max-w-full aspect-[1.37] w-[141px]"
                      />
                      <div className="flex gap-1 justify-between self-stretch mt-14 text-sky-800 max-md:mt-10">
                        <div className="grow justify-center px-2 py-2.5 text-sm leading-5 bg-gray-100 rounded-lg">
                          20% Off
                        </div>
                        <div className="grow justify-center py-2.5 pr-5 pl-2 text-sm leading-5 bg-gray-100 rounded-lg">
                          Limited time{" "}
                        </div>
                      </div>
                      <div className="mt-3 text-base font-bold leading-6 text-gray-500 whitespace-nowrap">
                        Webbuilder 1
                      </div>
                    </div>
                    <div className="flex flex-col px-5 mt-5">
                      <div className="text-base leading-6 text-gray-500">
                        Computer Modern clasic with wix support
                      </div>
                      <div className="flex gap-2.5 justify-between mt-3.5">
                        <div className="text-xl leading-7 text-gray-500">
                          $39.96
                        </div>
                        <div className="text-sm leading-5 text-gray-400">
                          $49.96
                        </div>
                        <div className="flex-auto text-sm leading-5 text-rose-500">
                          (20% Off)
                        </div>
                      </div>
                      <div className="justify-center items-center px-16 py-5 mt-4 text-base leading-6 text-center text-white whitespace-nowrap bg-blue-500 rounded-xl max-md:px-5">
                        View Deal
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-end py-12 pr-5 pl-2.5 mt-9 max-w-full bg-gray-50 w-[1052px]">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="text-3xl leading-10 text-gray-500 max-md:mt-10">
                    Sign up and get exclusive special deals
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex gap-0 text-sm tracking-wider leading-5 text-center text-white whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="max-w-full bg-white rounded-xl h-[52px] w-[348px]" />
                    <div className="justify-center px-5 py-5 bg-blue-500 rounded-none max-md:px-5">
                      Sign Up
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-12 mx-3 bg-gray-800 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 justify-between mt-2.5 mb-28 max-w-full w-[843px] max-md:flex-wrap max-md:mb-10">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-sm leading-5 whitespace-nowrap text-stone-300 max-md:mt-10">
                  <div className="text-base leading-6 text-white uppercase">
                    Categories
                  </div>
                  <div className="mt-6">Web Builder</div>
                  <div className="mt-8">Hosting</div>
                  <div className="mt-7 text-sm leading-5">Data Center</div>
                  <div className="mt-8">Robotic-Automation</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-sm leading-5 whitespace-nowrap text-stone-300 max-md:mt-10">
                  <div className="text-base leading-6 text-white uppercase">
                    Contact
                  </div>
                  <div className="mt-5">Contact</div>
                  <div className="mt-7">Privacy Policy</div>
                  <div className="mt-6">Terms Of Service</div>
                  <div className="mt-7 text-sm leading-5">Categories</div>
                  <div className="mt-6">About</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 my-auto text-sm leading-5 text-gray-300 whitespace-nowrap">
            <div className="grow">United States</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5d4989adb1e01645ec8844ce6ebf1735133f75f7971cfd4aaebec4b52f6c25b?apiKey=0ae2381bc7354bf6812cfcf0bd2c1746&"
              className="self-start aspect-[1.67] w-[15px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
