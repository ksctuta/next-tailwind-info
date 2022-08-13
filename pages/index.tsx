import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    // <div className='flex flex-col px-5 py-10 space-y-5 bg-slate-400'>
    // grid min-h-screen gap-10 px-20 py-20 lg:grid-cols-2 xl:grid-cols-3 bg-slate-400 xl:place-content-center
    // <div className="dark:md:hover:bg-teal-400 bg-[url('/vercel.svg')]">
    //  <h2 className="text-[97851px] text-[#000]">Hello</h2>
    // Test
    <div className="grid min-h-screen gap-10 px-20 py-20 lg:grid-cols-2 xl:grid-cols-3 bg-slate-400 xl:place-content-center">
      <div className="flex flex-col justify-between p-6 bg-white shadow-xl dark:lg:bg-black sm:bg-red-400 md:bg-teal-400 lg:bg-indigo-400 xl:bg-yellow-400 2xl:bg-orange-400 rounded-3xl">
        <span className="text-3xl font-semibold dark:text-white">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex justify-between my-2 odd:bg-blue-200 even:bg-yellow-200"
            >
              <span className="text-gray-500 dark:text-gray-100">Gray Chair</span>
              <span className="font-semibold dark:text-white">$19</span>
            </div> 
          ))}
        </ul>
        {/* {["a", "b", "c", ""].map((c, i) => (
          // <li key={i} className="py-2 bg-red-500 empty:bg-blue-500">{c}</li>
          <li key={i} className="py-2 bg-red-500 empty:hidden">
            {c}
          </li>
        ))} */}
        {/* <div className="flex justify-between my-2">
          <span className="text-gray-500">Gray Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Gray Chair</span>
          <span className="font-semibold">$19</span>
        </div> */}
        <div className="flex justify-between pt-2 mt-2 border-t-2 border-dashed">
          <span className="dark:text-white">Total</span>
          <span className="font-semibold dark:text-white">$10</span>
        </div>
        {/* <div className="w-2/4 p-3 mx-auto mt-5 text-center text-white bg-blue-500 rounded-xl">
          Checkout
        </div> */}
        <button className="flex justify-center w-3/4 p-3 mx-auto mt-5 text-center text-white bg-blue-500 rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500 dark:bg-black dark:border-white dark:border dark:hover:bg-white dark:hover:text-black">
          Checkout
        </button>
      </div>
      <div className="overflow-hidden bg-white shadow-xl rounded-2xl group">
        {/* bg-blue-500 */}
        <div className="p-6 portrait:bg-indigo-600 landscape:bg-teal-500 pb-14 lg:pb-32 xl:pb-64">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div className="relative p-6 bg-white rounded-3xl -top-5">
          <div className="relative flex items-end justify-between -top-16">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orers</span>
              <span className="font-medium">$340</span>
            </div>
            <div
              className="w-24 h-24 transition-colors bg-red-400 rounded-full group-hover:bg-red-300"
            />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white shadow-xl lg:col-span-2 xl:col-span-1 rounded-3xl">
        <div className="flex items-center justify-between mb-5">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️4.9</span>
            <span className="rounded-md shadow-xl">💖</span>
          </div>
        </div>
        <div className="mb-5 bg-zinc-400 h-72" />
        <div className="flex flex-col">
          <span className="text-xl font-medium">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="flex items-center justify-between mt-3 mb-5">
            <div className="space-x-2">
              <button className="w-5 h-5 transition bg-yellow-500 bg-opacity-50 rounded-full hover:ring-2 ring-offset-2 ring-yellow-500"></button>
              <button className="w-5 h-5 transition bg-indigo-500 bg-opacity-50 rounded-full hover:ring-2 ring-offset-2 ring-indigo-500"></button>
              <button className="w-5 h-5 transition bg-teal-500 bg-opacity-50 rounded-full hover:ring-2 ring-offset-2 ring-teal-500"></button>
              {/* <input type="radio" />
              <input type="radio" />
              <input type="radio" /> */}
            </div>
            <div className="flex items-center space-x-5">
              <button className="flex items-center justify-center w-8 text-xl font-medium text-gray-500 bg-blue-200 rounded-lg aspect-square">
                -
              </button>
              <span>1</span>
              <button className="flex items-center justify-center w-8 text-xl font-medium text-gray-500 bg-blue-200 rounded-lg aspect-square">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-medium">$450</span>
          <button className="px-5 py-2 text-xs text-center text-white bg-blue-500 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="p-6 bg-white shadow-xl rounded-3xl">
        <form className="flex flex-col p-5 space-y-2 ">
          <input
            type="text"
            required
            //disabled
            placeholder="Username"
            className="p-1 border border-gray-400 rounded-md peer "
          />
          <span className="hidden peer-invalid:block peer-invalid:text-red-500">
            아이디를 입력하세요.
          </span>
          <span className="hidden peer-valid:block peer-valid:text-teal-500">
            사용가능한 아이디입니다.
          </span>
          {/* <span className="hidden peer-hover:block peer-hover:text-amber-500">
            아이디 포커스
          </span> */}
          <input
            type="text"
            required
            //disabled
            placeholder="Password"
            className="p-1 border border-gray-400 rounded-md peer "
          />
          <span className="hidden peer-invalid:block peer-invalid:text-red-500">
            비밀번호를 입력하세요.
          </span>
          <span className="hidden peer-valid:text-teal-500 peer-valid:block">
            비밀번호는(숫자,문자,특수문자를 한가지씩 포함한 8~20자 이여야 합니다.)
          </span>
          {/* <span className="hidden peer-hover:block peer-hover:text-amber-500">
            비밀번호 포커스
          </span> */}
          <input
            type="email"
            required
            //disabled
            placeholder="you@example.com"
            className="p-1 border border-gray-400 rounded-md peer "
          />
          <span className="invisible peer-invalid:visible peer-invalid:text-sm peer-invalid:text-pink-600">
            유효한 이메일 주소를 입력하세요.
          </span>
          <span className="hidden peer-valid:text-teal-500 peer-valid:block">
            사용가능한 이메일 형태입니다.
          </span>
          {/* <span className="hidden peer-hover:block peer-hover:text-amber-500">
            비밀번호 포커스
          </span> */}
          <input type="submit" value="Login" className="bg-white" />
        </form>
        {/* <form className="flex flex-col p-5 space-y-2 ">
          <input
            type="text"
            required
            placeholder="Username"
            className="p-1 border border-gray-400 rounded-md peer "
          />
          <span className="hidden peer-invalid:block peer-invalid:text-red-500">
            This input is invalid
          </span>
          <span className="hidden peer-valid:block peer-valid:text-teal-500">
            Awesome username
          </span>
          <span className="hidden peer-hover:block peer-hover:text-amber-500">
            Hello
          </span>
          <input type="submit" value="Login" className="bg-white" />
        </form> */}
      </div>
      <div className="p-6 bg-white shadow-xl rounded-3xl">
        <p className="first-letter:text-7xl first-letter:hover:text-purple-400">Hello Everyone!</p>
        <input type="file" className="file:transition-colors file:cursor-pointer file:border-0 file:rounded-xl file:px-5 file:bg-purple-400 file:text-white file:hover:text-purple-400 file:hover:bg-white file:hover:border file:hover:border-purple-400"/>
        {/* <ul className="list-disc marker:text-teal-500">
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul> */}
        {/* <details className="select-none open:text-white open:bg-indigo-400">
          <summary className="cursor-pointer selection-none">what is my fav. food.</summary>
          <span className="selection:bg-indigo-600 selection:text-white">김치</span>
        </details> */}
      </div>
    </div>
  );
};

export default Home;
// .group:hover .avatar{

// }
