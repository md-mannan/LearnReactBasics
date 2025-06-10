
function MyButton({count,onClick}) {

  return (
    <button onClick={onClick} className="min-w-30 text-white bg-indigo-500 border border-indigo-600 rounded py-2 px-4 cursor-pointer hover:bg-indigo-700 transition-all uppercase my-5">
      {count}
    </button>
  );
}
export default MyButton;
