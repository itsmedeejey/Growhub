export const CatagoryCard = ({catagories})=>{
    return(
        <div>
        <div className="w-full  py-8">
      <div className="max-w-7xl  md:mx-auto ">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {catagories.map((item) => (
              <div
                key={item.id}
                className="bg-white cursor-pointer rounded-lg shadow hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col h-full"
              >
                <div className="aspect-auto   overflow-hidden relative">
                  
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200 "
                  />
                </div>
                <div><h1 className=" py-3 px-1 text-lg font-bold font-playfair">{item.name}</h1></div>
                </div>
                ))}
                </div>

        </div>
        </div>
        </div>
    )
}
