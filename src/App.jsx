import MemberCard from "./components/MemberCard";
import runData from "./rundata.json";
import React, { useState } from "react";
import logo from "./assets/dharan-run-logo.jpg";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [runner, setRunner] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchTerm.match(/[a-z]/)
      ? setRunner(
          runData.filter((data) =>
            data.Fullname.toLowerCase().match(
              searchTerm.length > 0 ? searchTerm : "xiaomi"
            )
          )
        )
      : setRunner(runData.filter((data) => data.ID === Number(searchTerm)));
    setSearchTerm("");
  };

  return (
    <>
      <div className="flex flex-col items-center mx-auto py-8 text-green-700 max-w-xs sm:max-w-xs">
        <img
          src={logo}
          alt="Dharan Run"
          className="rounded-full w-1/2 border-2 border-green-700 mb-8"
        />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 mb-0 items-center w-full"
        >
          <input
            id="code-number"
            type="text"
            value={searchTerm}
            placeholder="Enter code number or name"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            className="text-green-700 border-green-700 outline-green-700 outline-1 text-center px-5 py-2 rounded-md border w-full"
          />
          <button
            type="submit"
            className="bg-green-700 py-2 px-10 rounded-md text-white hover:outline-1 hover:outline-green-700/40 hover:bg-green-600 hover:shadow-md"
          >
            Search
          </button>
        </form>
      </div>

      <div className="flex flex-col items-center mx-auto py-8 text-green-700 max-w-xs sm:max-w-xs md:max-w-2xl">
        {runner && runner.length > 0 ? (
          <>
            <div className="flex flex-col gap-y-3 w-full">
              <h2 className="text-center font-semibold mb-2">
                {runner.length} {runner.length === 1 ? "record" : "records"}
              </h2>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-y-4 sm:max-w-xs md:max-w-2xl">
              {runner.map((data) => (
                <MemberCard data={data} key={data.ID} />
              ))}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default App;
