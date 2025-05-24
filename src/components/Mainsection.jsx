export const Mainsection = ()=>{
    return(<>
    <section className=" p-5 mt-5 mx-2 md:mx-5 justify-center">
 <div className="flex flex-col md:flex-row items-start gap-4">
      {/* Left Content */}
      <div className="flex-1">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gbrown">
          Our Story, Vision, <br /> and Values
        </h1>
      </div>


      {/* Right Content */}
      <div className="flex-1 text-sm text-gray-600 font-thin md:pt-20 ">
        <p>
          Learn about our commitment to excellence, innovation, and the
          principles that guide our work every day.
        </p>
      </div>
    </div>

    {/* Image */}
    <div className="relative mt-8">
      <img
        src="/logo.png"
        alt="Spiral design"
        className="w-full h-[160px] md:h-auto object-fill md:object-cover rounded-tl-3xl md:rounded-tl-[100px] rounded-br-3xl md:rounded-br-[100px]"
      />

    
</div>
    </section>    
    </>)
}