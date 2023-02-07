function MortgageDisplay(props) {
  return (
    <div className=" text-center border-4 rounded-lg shadow-lg text-2xlrounded-lg font-bold text-neutral-200 border-blue-800 w-1/3 p-8 bg-slate-700">
      {" "}
      <p className="text-center text-3xl mb-4">{props.title}</p>
      <form action="">
        <label >
          <p>Total Home Price:</p>
          <input
            type="text"
            className="border-2 border-blue-800 rounded-lg w-full p-2"
          />
        </label>
        <label htmlFor="">
          <p className="text-center"> Amount Borrowed: </p>
          <input
            type="text"
            className="border-2 border-blue-800 rounded-lg w-full p-2"
          />
        </label>
        <label htmlFor="">
          <p className="text-center"> Interest Rate: </p>
        </label>
        <input
          type="text"
          className="border-2 border-blue-800 rounded-lg w-full p-2"
        />
      </form>
    </div>
  );
}

export default MortgageDisplay;
