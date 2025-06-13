import { Fragment } from "react";

export default function Square({value,onSquareClick}) {
  return (
    <Fragment>
      <button onClick={onSquareClick} className="border border-indigo-600 hover:bg-indigo-200 w-20 h-20 text-3xl font-extrabold cursor-pointer">{value}</button>
    </Fragment>
  );
}
