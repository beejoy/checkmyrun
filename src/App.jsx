import MemberCard from "./components/MemberCard";
import runData from "./rundata.json";
import React, { useState } from "react";
import logo from "./assets/dharan-run-logo.jpg";

const App = () => {
  const [codenumber, setCodenumber] = useState("");
  const [name, setName] = useState("");
  const [runner, setRunner] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRunner(runData.filter((data) => data.ID === codenumber));
    setCodenumber("");
  };

  const handleSearchCodeNumber = (e) => {
    e.preventDefault();
    console.log(name.length);
    setRunner(
      runData.filter((data) =>
        data.Fullname.toLowerCase().match(name.length > 0 ? name : "xiaomi")
      )
    );
    setName("");
  };
  return (
    <>
      <div className="flex flex-col items-center mx-auto py-8 text-green-700 max-w-xs sm:max-w-xs">
        <img
          src={logo}
          alt="Dharan Run"
          className="rounded-full w-1/2 border-2 border-green-700 mb-8"
        />
        {/* <h1 className="font-bold text-2xl tracking-wider mb-8">
          WEEKLY DHARAN RUN
        </h1> */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 mb-0 items-center w-full"
        >
          <label htmlFor="code-number">Enter Code Number:</label>
          <input
            id="code-number"
            type="number"
            value={codenumber}
            placeholder="Code number"
            onChange={(e) => setCodenumber(Number(e.target.value))}
            className="text-green-700 border-green-700 outline-green-700 text-center px-5 py-2 rounded-full border-2 w-full"
          />
          <button
            type="submit"
            className="bg-green-700 py-2 rounded-full w-1/2 text-white hover:outline-1 hover:outline-green-700/40 hover:bg-green-600 hover:shadow-md"
          >
            Check
          </button>
        </form>
        {runner && runner.length === 1 ? (
          <div className="flex justify-between items-center mt-8 gap-2 w-full border-2 border-green-700 sm:max-w-xs">
            {runner.map((data) => (
              <React.Fragment key={data.ID}>
                <div className="w-3/5 p-3 font-semibold">
                  <p>Code No.: {data.ID}</p>
                  <p className="text-lg pt-2">{data["Fullname"]}</p>
                </div>

                <div className="bg-green-700 w-2/5 text-green-100 text-center py-4">
                  <p>
                    <span className="font-bold text-6xl">
                      {data["RunCount"]}
                    </span>
                    <br />
                    weeks
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="flex flex-col items-center mx-auto pb-10 text-green-700 min-w-max max-w-xs sm:max-w-xs">
        <form
          onSubmit={handleSearchCodeNumber}
          className="flex flex-col gap-2 mb-8 items-center w-full"
        >
          <label htmlFor="member-name">Enter Runner's Name:</label>
          <input
            id="member-name"
            type="text"
            placeholder="Full or partial name"
            value={name}
            onChange={(e) => setName(e.target.value.toLowerCase())}
            className="text-green-700 border-green-700 outline-green-700 text-center px-5 py-2 rounded-full border-2 w-full"
          />
          <button
            type="submit"
            className="bg-green-700 py-2 rounded-full w-1/2 text-white hover:outline-1 hover:outline-green-700/40 hover:bg-green-600 hover:shadow-md"
          >
            Search Code No.
          </button>
        </form>

        {runner && runner.length > 0 ? (
          <div className="flex flex-col gap-y-3 w-full sm:max-w-xs">
            {runner.map((data) => (
              <MemberCard data={data} key={data.ID} />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default App;
