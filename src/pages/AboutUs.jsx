import { Navbar } from "../components/Navbar";
import { Mainsection } from "../components/Mainsection";
import { Cards } from "../components/Cards";
import { Team } from "../components/Team";
import { Footer } from "../components/Footer";
export const Aboutus = ()=>{

    return(<>
    <Navbar></Navbar>
    <div  className="max-w-screen ">
    
    
              <Mainsection></Mainsection>
              <div className="md:mx-10 mx-3 flex flex-col gap-5 md:flex-row">
                <Cards title="Who are we?"
                description="GrowHub is a dynamic social tech enterprise based in Guwahati, Assam, passionately dedicated to transforming the region's rich natural resources into exquisite, handcrafted products while empowering local artisan communities. We champion sustainable practices by upcycling agricultural waste like bamboo, cane, wildflowers, and natural fibers, alongside the timeless artistry of Bellmetal crafts and durable Cane Furniture, creating a diverse range of unique offerings."

                icon={""}
                className="bg-[#fff] text-[#000] md:max-w-[50%]"></Cards>



                 <Cards title="Our Journey of Innovation & Impact"
                description=" We are proud to be incubated at leading institutions fostering innovation: BioNEST IIT Guwahati , Assam Startup- The Nest and Atal Incubation Centre-Guru Gobind Singh Indraprastha University , further solidifying our commitment to building a strong and impactful venture from the heart of Northeast India. Our dedication to innovation and impact has also been recognized nationally, as we emerged winners of the prestigious Startup Maharathi Challenge 2025 at Startup Mahakumbh in the B2B Category. This achievement underscores our commitment to scaling sustainable solutions from our base in Guwahati to a wider market."


                icon={""}
                className="bg-rblue  text-white md:max-w-[50%]"></Cards>
                </div>

    <div className="max-w-screen mt-5 mx-3 md:mx-10 ">              
    <Cards title="Why Choose GrowHub ?"
                description="Support Sustainable Livelihoods: Your purchase directly empowers talented artisans across Northeast India, providing fair wages and fostering economic independence within their communities.

Embrace Eco-Conscious Choices: From upcycled agricultural waste to sustainably harvested cane and responsibly crafted bell metal, our products embody environmental responsibility, contributing to a circular economy within our region.

Discover Authentic Northeast Indian Craftsmanship: Explore a curated collection showcasing the diverse artistry of Assam and beyond, featuring intricate Bell metal work, elegant Cane Furniture, delicate wildflower crafts, robust bamboo creations, and textiles woven from natural fibers.

Your Reliable Partner for Unique Gifting: GrowHub is your trusted source for distinctive and meaningful gifts for institutions, corporate events, and personal functions. Impress with culturally rich and sustainable items that leave a lasting positive impact. "

                icon={""}
                className="bg-beige text-[#000]"></Cards>
              </div>
            
            </div >

            {/* team section */}
            <div className="mt-10 flex flex-row mx-7 max-w-screen rounded-lg p-3 justify-center items-center ">
              <h1 className="text-4xl text-center  font-bold rounded-lg p-3">Meet the talented team who make all this happen</h1>
            </div>
            <div className="flex flex-wrap justify-center items-start gap-10 mx-5 mt-10 pt-3 mb-10">

            <Team
              pfp="/sakilkl.png"
              name={"Sakil Ahmed"}
              position={"Founder & CEO"}
            />
            
            <Team
              pfp="/nilotpolaMaam.png"
              name={"Nilotpala Sahariah"}
              position={"Co-founder & Director"}
            />
            
            <Team
              pfp="/DrSwapnilSinha.png"
              name={"Dr. Swapnil Sinha"}
              position={"Mentor"}
            />
          </div>

              
    <Footer></Footer>
    </>)
}