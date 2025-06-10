
const user={
    name:"Abdul Mannan",
    imageUrl:"https://i.imgur.com/yXOvdOSs.jpg",
    imageSize:90
}


export default function Profile() {
  return (
    <>
    <div className="my-10 card w-100 h-50 bg-white shadow-lg rounded-lg flex flex-col items-start justify-center p-5">
      <h1 className="text-xl font-bold text-gray-800">{user.name}</h1>
    <img className="rounded-full p-0.5 border-3 bg-green-400 border-indigo-600" src={user.imageUrl} alt={"Profile Photo "+user.name } style={{width:user.imageSize,height:user.imageSize}}/>
    
    
    </div>
    
    
    </>
  )
}
