export const Team = ({pfp,name,position})=>{
    return (
        <div>
             <div className={`max-w-[300px] items-center bg-white p-6 rounded-2xl shadow-lg transition duration-300 ease-in-out  }`}>
      <img className="w-[250px] rounded-lg transition ease-in-out duration-300 hover:scale-[102%]" src={pfp} alt={`${name}'s profile`} />
      <h3 className="text-md pt-1 font-semibold ">{name}</h3>
      <p className=" md:text-lg ">{position}</p>
         </div>
            


        </div>
    )
}