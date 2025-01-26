export default function Div1() {
    return (
      <div className=" py-12">
        <div className="container mx-auto">
          {/* Div1a and Div1b Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Div1a: Text */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-primary mb-4">
                Welcome to Krishimitra
              </h1>
              <p className="text-text font-bold text-[20px] ">
                Your one-stop solution for all agriculture-related services. We provide the best tools and resources for farmers.
              </p>
            </div>
  
            {/* Div1b: Image */}
            <div>
              <img src="screen2.png" alt="Agriculture" className="rounded-[10px] h-375px w-6675px ml-161" />
            </div>
          </div>
  
          {/* Div1c: Additional Text */}
          <div className="mt-8 text-center">
          <p className="text-text font-semibold text-[20px]">
            Let KrishiMitra be your trusted partner in achieving healthy crops, livestock, and soil for a thriving farm!
         </p>

          </div>
        </div>
      </div>
    );
  }