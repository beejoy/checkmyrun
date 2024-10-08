const MemberCard = ({ data }) => {
  return (
    <div className="w-[320px] p-3 flex flex-col gap-y-1 text-sm outline-1 border-slate-300 border bg-white rounded-lg shadow-lg">
      <p>
        Code No.: <span className="font-bold">{data.ID}</span>
      </p>

      <p className="flex justify-between">
        <span>Name: {data["Fullname"]}</span>
        <span>
          Run Weeks: <span className="font-bold">{data["RunCount"]}</span>
        </span>
      </p>

      <p className="flex justify-between">
        <span>
          Age/Sex: {data["Age"]}yrs / {data["Sex"]}
        </span>
        <span>Last Run Week: {data["LastRunWeek"]}</span>
      </p>

      <p>Parent's Name: {data["Parent"]}</p>
    </div>
  );
};

export default MemberCard;
