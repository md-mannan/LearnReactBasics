
export default function Square({value,onSquareClick}) {

// const [value,setValue]=useState(null);
    // function handleClick() {
    //     setValue(value)
    // }
  return (
    <button  className="d-inline border-2 cursor-pointer border-gray-400 w-1/3 bg-gray-200 font-bold text-9xl" onClick={onSquareClick}>{value}</button>
  )
}
