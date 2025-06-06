import { useNavigate, Link, useParams } from "react-router-dom";


export const SubCatagoryCard = ({ categories }) => {
  const navigate = useNavigate();
  const { id: paramId } = useParams();

  const handleClick = (id) => {
    navigate(`/subproduct/${id}`); 
  };
const filteredCategories = categories.filter(
    (item) => String(item.category_id) === String(paramId)
  );

  return (
    <div>

  

      <div className="w-full py-5">
        <div className="max-w-7xl md:mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredCategories.map((item) => (
              <div
                key={item.category_id}
                onClick={() => handleClick(item.id)}
                className="bg-white cursor-pointer  shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col h-full"
              >
                <div className="aspect-square sm:aspect-[4/5] h-full  overflow-hidden relative " >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="relative w-full h-full object-fit md:object-cover  hover:scale-105 items-end transition-transform duration-200"
                  />

                </div>
                <div>
    <h1 className="  text-center   text-gbrown py-1 px-1 text-xs font-semibold font-">{item.name}</h1>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
