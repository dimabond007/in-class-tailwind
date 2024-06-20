import React from "react";

function App() {
  return (
    <div className="max-w-[480px] m-auto px-[60px]">
      <h1 className="text-2xl font-bold mt-[72px] mb-12 text-center">
        Join Meeting
      </h1>
      <form>
        <div className="mb-4">
          <label for="join-confno" className="mb-[10px] text-gray-500 text-xs">
            Meeting ID or Personal Link Name
          </label>
          <input
            className="border-gray-300 border-2 rounded-xl h-10 px-4 w-full text-sm"
            id="join-confno"
            name="join-confno"
            placeholder="Enter Meeting ID or Personal Link Name"
          />
        </div>
        <div className="text-sm mb-4">
          By clicking "Join", you agree to our
          <a className="mx-1 text-blue-700">Terms of Services</a>
          and
          <a className="mx-1 text-blue-700">Privacy Statement</a>
        </div>
        <div>
          <a
            id="btnSubmit"
            disabled="disabled"
            className="rounded-xl text-gray-400 bg-gray-200 w-full block text-center py-1 px-4"
          >
            Join
          </a>
        </div>
      </form>
    </div>
  );
}

export default App;
