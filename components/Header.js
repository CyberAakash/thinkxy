import React from "react";
// import { useEffect } from "react";
// import { useRouter } from "next/router";

// Here you would fetch and return the user
// const useUser = () => ({ user: null, loading: false });

function Header() {
  // const { user, loading } = useUser();
  // const router = useRouter();
  return (
    <>
      <div
        className="hero min-h-screen bg-[conic-gradient(var(--tw-gradient-stops))] from-teal-100 via-sky-500 to-blue-700"
        // style={{
        //   backgroundImage: `url("")`,
        // }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-center text-neutral-content flex flex-col">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Collaborate. Think. Learn.
            </h1>
            <p className="mb-5 text-slate-200">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          <button className="btn btn-primary w-2xl">Sign-in</button>
        </div>
      </div>
    </>
  );
}

export default Header;
