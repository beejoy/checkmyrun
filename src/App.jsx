import runData from "./rundata.json";
import React, { useState } from "react";

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
    setRunner(
      runData.filter((data) => data.Fullname.toLowerCase().match(`${name}`))
    );
    setName("");
  };
  return (
    <>
      <div className="flex flex-col items-center mx-auto py-10 text-green-700 min-w-max max-w-xs sm:max-w-xs">
        <h1 className="font-bold text-xl mb-8">Weekly Dharan Run</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 mb-8 items-center w-full"
        >
          <label htmlFor="code-number">Enter Your Code Number:</label>
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
          <div className="flex justify-between items-center gap-2 w-full border-2 border-green-700 sm:max-w-xs">
            {runner.map((data) => (
              <>
                <div key={data.ID} className="w-3/5 p-3 font-semibold">
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
              </>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="flex flex-col items-center mx-auto py-10 text-green-700 min-w-max max-w-xs sm:max-w-xs">
        <form
          onSubmit={handleSearchCodeNumber}
          className="flex flex-col gap-2 mb-8 items-center w-full"
        >
          <label htmlFor="member-name">Enter Runner Name:</label>
          <input
            id="member-name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <div className="flex flex-col gap-y-4 w-full sm:max-w-xs">
            {runner.map((data) => (
              <>
                <div
                  key={data.ID}
                  className="w-full p-3 bg-green-100 text-sm outline-1 outline-green-700 rounded-lg shadow-md shadow-green-700"
                >
                  <p>Code No.: {data.ID}</p>
                  <p>
                    Name: {data["Fullname"]}, ({data["Age"]}/{data["Sex"]})
                  </p>
                  <p>{data["Remarks"]}</p>
                </div>
              </>
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
