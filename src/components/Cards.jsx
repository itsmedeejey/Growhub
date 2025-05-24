
export const Cards = ({ title, description, icon, className = "" }) => {
  return (
    <div className={` p-6 rounded-2xl shadow-lg transition duration-300 ease-in-out hover:scale-[102%] ${className}`}>
      {icon && <div className="mb-4 text-3xl">{icon}</div>}
      <h3 className="text-5xl  font-semibold mb-2">{title}</h3>
      <p className="pt-5 md:text-xl leading-snug md:leading-normal">{description}</p>
    </div>
  );
};

