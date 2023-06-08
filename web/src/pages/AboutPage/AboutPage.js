import { MetaTags } from '@redwoodjs/web'
import Slider from 'src/components/Slider';

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <main className="">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 mt-12">

          <div className="text-center font-gruppo">
            <h1 className=" text-3xl capitalize tracking-tight text-gray-900">
              Meet our team
            </h1>
            <p className="lowercase text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>

          <div className="mt-12">
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              <li className="sm:ml-[25%]">
                <div className="flex flex-col gap-x-6 sm:items-start items-center">
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Palina Pauliuchenka</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">Software Engineer / Program Manager</p>
                  </div>
                  <div>
                    <ul className="list-disc text-sm font-mono lowercase ml-5">
                      <li className="block">- UX Design</li>
                      <li className="block">- front-end development</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="sm:ml-[25%]">
                <div className="flex flex-col gap-x-6 sm:items-start items-center">
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Joseph Antonucci</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">Software Engineer / Unit Tester</p>
                  </div>
                  <div>
                    <ul className="list-disc text-sm font-mono lowercase ml-5">
                      <li className="block">- unit testing</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="sm:ml-[25%]">
                <div className="flex flex-col gap-x-6 sm:items-start items-center">
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Samridhya Mukherjee</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">Software Engineer / Back-End Developer</p>
                  </div>
                  <div>
                    <ul className="list-disc text-sm font-mono lowercase ml-5">
                      <li className="block">- login form</li>
                      <li className="block">- login authentication</li>
                      <li className="block">- login requirements</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="sm:ml-[25%]">
                <div className="flex flex-col gap-x-6 sm:items-start items-center">
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Sean Ramirez</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">Software Engineer / Back-End Developer</p>
                  </div>
                  <div>
                    <ul className="list-disc text-sm font-mono lowercase ml-5">
                      <li className="block">- sign-up form</li>
                      <li className="block">- sign-up authentication</li>
                      <li className="block">- sign-up requirements</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="sm:ml-[25%]">
                <div className="flex flex-col gap-x-6 sm:items-start items-center">
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Carlos Bonilla</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">Software Engineer / Back-End Developer</p>
                  </div>
                  <div>
                    <ul className="list-disc text-sm font-mono lowercase ml-5">
                      <li className="block">- sign-in form</li>
                      <li className="block">- sign-in authentication</li>
                    </ul>
                  </div>
                </div>
              </li>

            </ul>
          </div>

          <div className="mx-auto w-full mt-6">
            <Slider />
          </div>

        </div>
      </main>
    </>
  )
}

export default AboutPage
