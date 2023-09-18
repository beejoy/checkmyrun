const MemberCard = ({ data }) => {
  return (
    <div className="w-full p-3  text-sm outline-1 bg-white outline-green-700 rounded-lg shadow-md ">
      <p>
        Code No.: <span className="font-bold">{data.ID}</span>
      </p>
      <p className="flex justify-between">
        <span>Name: {data["Fullname"]}</span>
        <span>
          {data["Age"]}yrs / {data["Sex"]}
        </span>
      </p>
      <p>{data["Remarks"]}</p>
    </div>
  );
};

export default MemberCard;
