import Head from "next/head"
import Card from "../components/card"
import BasicTable from "../components/table"
import intentMap from "../components/intentMap"
import dataset from "../public/data"
  

const Home = (props) => {
  console.log(props);
 
  return (
    <>
      <div className="w-full p-20 ">
        <Head>
          <title>LongShortAI</title>
          <meta
            name="description"
            content=" Next provides a way to quickly get up and running with a fully configurable ECommerce site using Next.js."
          />
          <meta property="og:title" content="LongShortAI" key="title" />
        </Head>
        <div class="py-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <p class="text-xl font-bold mt-1 ml-32 font-style:Montserrat">
            Keyword: {props.data[0].topic}
          </p>
          <p class="font-bold mt-0 ml-32 mb-6 font-style:Montserrat">Database: {props.data.country}</p>
          <div class="flex justify-center">
            <div class="w-full m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div class="flex flex-col">
                <a
                  href="#"
                  class="max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <p class="font-normal text-gray-700 dark:text-gray-400">
                    Volume
                  </p>

                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                   {props.data[0].raw_broadmatch_data[0][1]}
                  </h5>
                </a>
              </div>
              <div class="flex flex-col p-7 pb-10">
              <p class="font-normal text-gray-700 dark:text-gray-400">
                   Keyword Difficulty  
                  </p>
                  <div class="flex flex-row">
                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                 {props.data[0].raw_broadmatch_data[0][1]}
                  </h5>
                  {/* <img
                  class="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="https://i.ibb.co/Sy9ytpH/icons8-pie-chart-60.png"
                  alt="Bonnie image"
                /> */}
                </div> 

                <span class="text-sm text-gray-500 dark:text-gray-400">
                  Possible
                </span>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
            <div class="flex flex-col">
              <a
                href="#"
                class="max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5> */}
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Intent
                </p>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                {intentMap(`${props.data[0].raw_broadmatch_data[0][2]}`)}
                </p>
              </a>
              <a
                href="#"
                class="max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5> */}
               <p class="font-normal text-gray-700 dark:text-gray-400">
                  Result
                </p>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                {props.data[0].raw_broadmatch_data[0][5]}
                </p>
              </a>
              <a
                href="#"
                class="max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5> */}
            <div class="flex flex-row">
            <div class="flex flex-col p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  CPC
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                {props.data[0].raw_broadmatch_data[0][3]}
                </p>
            </div>
            <div class="flex flex-col p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Result
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                {props.data[0].raw_broadmatch_data[0][4]}
                </p>
            </div>
            </div>
              </a>
            </div>
          </div>
          <div class="flex justify-around">
            <div class="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                <svg
                  aria-hidden="true"
                  class="mr-2 w-4 h-4 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Profile
              </button>
              <button
                type="button"
                class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                <svg
                  aria-hidden="true"
                  class="mr-2 w-4 h-4 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                </svg>
                Settings
              </button>
              <button
                type="button"
                class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                <svg
                  aria-hidden="true"
                  class="mr-2 w-4 h-4 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Downloads
              </button>
            </div>
            <button
              type="button"
              class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Green to Blue
            </button>
          </div>

          <div class="flex items-center ml-24 p-20 justify-center">
          <BasicTable
           columnNames={props.data[0].columnNames}
           raw_broadmatch_data={props.data[0].raw_broadmatch_data}
           raw_question_data={props.data[0].raw_question_data}
           raw_related_data={props.data[0].raw_related_data}
          />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const data = await dataset;
  return {
    props: { data } 
   
  };
}