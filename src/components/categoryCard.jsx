import { useNavigate, Link } from "react-router-dom";

export const CategoryCard = ({ categories }) => {
  const navigate = useNavigate();

  const handleClick = (category_id) => {
    navigate(`/sub/${category_id}`);
  };

  return (
    <div>
    

      <div className="w-full py-5 font-thin">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 lg:mx-20">
            {categories.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="bg-white  cursor-pointer  shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col h-full"
              >
                <div className=" aspect-square sm:aspect-square  overflow-hidden relative">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className=" w-full h-full object-fits hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div>
                  <h1 className="text-center text-gbrown py-1 px-1 text-xs font-semibold font-">
                    {item.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
