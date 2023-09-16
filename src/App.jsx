import runData from "./rundata.json";
import React, { useState } from "react";

const App = () => {
  const [codenumber, setCodenumber] = useState("");
  const [runner, setRunner] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRunner(runData.filter((data) => data.ID === codenumber));
    setCodenumber("");
  };
  return (
    <div className="flex flex-col items-center mx-auto py-10 text-green-700 max-w-xs sm:max-w-xs">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 mb-4 items-center"
      >
        <label htmlFor="txn-code">Enter Your Code Number:</label>
        <input
          id="txn-code"
          value={codenumber}
          placeholder="Code number"
          onChange={(e) => setCodenumber(Number(e.target.value))}
          className="text-green-700 border-green-700 outline-green-700 text-center px-5 py-2 rounded-full border-2 w-full"
        />
        <button
          type="submit"
          className="bg-green-600 py-2 rounded-full w-1/2 text-white hover:outline-1 hover:outline-green-800/40 hover:bg-green-500 hover:shadow-md"
        >
          Check
        </button>
      </form>
      {runner && runner.length > 0 ? (
        <div className="flex justify-between gap-2 w-full border-2 border-green-700 sm:max-w-xs">
          {runner.map((data) => (
            <>
              <div key={data.ID} className="w-2/3 p-3 font-semibold">
                <p>Code No.: {data.ID}</p>
                <p className="text-xl pt-2">{data["Fullname"]}</p>
              </div>

              <div className="bg-green-700 w-1/3 text-green-100 text-center py-4">
                <p>
                  <span className="font-bold text-4xl">{data["RunCount"]}</span>
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
  );
};

export default App;
