import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SettingsPage = () => {
  return (
    <>
      <MetaTags title="Settings" description="Settings page" />

      <form className={"max-w-4xl mx-auto py-24"}>
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="col-span-full">
                <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Choose Avatar</label>
                <div class="mt-5 flex items-center gap-x-3">
                  <div className={"flex justify-between"}>
                    <button className={"border h-12 w-12 flex items-center justify-center rounded-full mr-4 hover:bg-purple-800 hover:text-white"}><i className="text-2xl fa-regular fa-circle-user"></i></button>
                    <button className={"border h-12 w-12 flex items-center justify-center rounded-full mr-4 hover:bg-purple-800 hover:text-white"}><i className="fa-xl fa-solid fa-hippo"></i></button>
                    <button className={"border h-12 w-12 flex items-center justify-center rounded-full mr-4 hover:bg-purple-800 hover:text-white"}><i className="fa-xl fa-solid fa-fish"></i></button>
                    <button className={"border h-12 w-12 flex items-center justify-center rounded-full mr-4 hover:bg-purple-800 hover:text-white"}><i className="fa-xl fa-solid fa-dragon"></i></button>
                    <button className={"border h-12 w-12 flex items-center justify-center rounded-full mr-4 hover:bg-purple-800 hover:text-white"}><i className="fa-xl fa-solid fa-otter"></i></button>
                    <button className={"border h-12 w-12 flex items-center justify-center rounded-full mr-4 hover:bg-purple-800 hover:text-white"}><i className="fa-xl fa-solid fa-kiwi-bird"></i></button>
                    <button className={"border h-12 w-12 flex items-center justify-center rounded-full mr-4 hover:bg-purple-800 hover:text-white"}><i className="fa-xl fa-solid fa-worm"></i></button>
                    <button className={"border h-12 w-12 flex items-center justify-center rounded-full mr-4 hover:bg-purple-800 hover:text-white"}><i className="fa-xl fa-solid fa-spider"></i></button>
                    <button className={"border h-12 w-12 flex items-center justify-center rounded-full mr-4 hover:bg-purple-800 hover:text-white"}><i className="fa-xl fa-solid fa-shrimp"></i></button>
                    <button className={"border h-12 w-12 flex items-center justify-center rounded-full mr-4 hover:bg-purple-800 hover:text-white"}><i className="fa-xl fa-solid fa-paw"></i></button>
                    <button className={"border h-12 w-12 flex items-center justify-center rounded-full mr-4 hover:bg-purple-800 hover:text-white"}><i className="fa-xl fa-solid fa-dove"></i></button>
                    <button className={"border h-12 w-12 flex items-center justify-center rounded-full mr-4 hover:bg-purple-800 hover:text-white"}><i className="fa-xl fa-solid fa-dog"></i></button>
                    <button className={"border h-12 w-12 flex items-center justify-center rounded-full mr-4 hover:bg-purple-800 hover:text-white"}><i className="fa-xl fa-solid fa-crow"></i></button>
                    <button className={"border h-12 w-12 flex items-center justify-center rounded-full mr-4 hover:bg-purple-800 hover:text-white"}><i className="fa-xl fa-solid fa-cat"></i></button>
                  </div>

                  {/*<button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>*/}
                </div>
              </div>
            </div>
          </div>

          <div className="border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">Set-up Your news preferences</label>
                <div className="mt-5 flex items-center gap-x-3">
                  <div className="flex flex-col gap-y-4">
                    <label className="relative inline-flex items-center mr-5 cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-900">General</span>
                    </label>

                    <label className="relative inline-flex items-center mr-5 cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-900">Business</span>
                    </label>

                    <label className="relative inline-flex items-center mr-5 cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-900">Entertainment</span>
                    </label>

                    <label className="relative inline-flex items-center mr-5 cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-900">Health</span>
                    </label>

                    <label className="relative inline-flex items-center mr-5 cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-900">Science</span>
                    </label>

                    <label className="relative inline-flex items-center mr-5 cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-900">Sports</span>
                    </label>

                    <label className="relative inline-flex items-center mr-5 cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-900">Technology</span>
                    </label>
                  </div>

                  {/*<button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>*/}
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
          <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
      </form>

    </>
  )
}

export default SettingsPage
