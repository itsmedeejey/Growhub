import { useNavigate, Link } from "react-router-dom";

export const CategoryCard = ({ categories }) => {
  const navigate = useNavigate();

  const handleClick = (category_id) => {
    navigate(`/sub/${category_id}`);
  };

  return (
    <div>
    

      <div className="w-full py-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {categories.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="bg-white cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col h-full"
              >
                <div className="aspect-[4.5/5] overflow-hidden relative">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div>
                  <h1 className="text-center text-gbrown py-3 px-1 text-lg font-bold font-playfair">
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
