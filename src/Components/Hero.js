import { Link } from 'react-router-dom';

export default function Hero() {


  return (
    <div >
      <div className="relative  lg:px-2">
        <div className="mx-auto max-w-2xl  sm:py-48 lg:py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Dashboard to enrich your Design Applications Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Within this application, you'll discover a comprehensive suite of tools essential for realizing your design and application endeavors in a seamless manner.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/Dashboard"
                className="rounded-md bg-sky-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Get started
              </Link>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}