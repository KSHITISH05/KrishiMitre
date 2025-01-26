// export default function Div2() {
//     return (
//       <div className="bg-white py-12">
//         <div className="container mx-auto">
//           <img src="farm.jpg" alt="Full Width" className="w-full h-[550] rounded-lg shadow-lg" />
//         </div>
//       </div>
//     );
//   }
export default function Div2() {
  return (
    <div className=" py-12 relative">
      <div className="container mx-auto relative">
        {/* Blurred Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="farm.jpg"
            alt="Background"
            className="w-full h-[550px] object-cover rounded-[50px] shadow-lg blur-sm"
          />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 h-[550px] flex items-center justify-center">
          {/* Centered Image */}
          <div className="relative z-20">
            <img
              src="phone.jpg"
              alt="Overlay"
              className="h-[550px] w-auto rounded-[50px] shadow-lg object-contain" // Decreased roundedness
            />
          </div>

          {/* Responsive Paragraph Divs */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-6 p-6">
            {/* Top Left */}
            <div className=" ml-20 absolute top-6 left-6 w-40 bg-white/50 backdrop-blur-sm px-6 py-8 rounded-lg shadow-lg">
              <h3 className="font-bold text-sm mb-1">Plant & Cattle Health Diagnosis</h3>
              <p className="text-xs">
              Upload images of plants or cattle to identify health issues and receive suggested treatments
              </p>
            </div>

            {/* Top Right */}
            <div className="mr-20 absolute top-6 right-6 w-40 bg-white/50 backdrop-blur-sm px-6 py-8 rounded-lg shadow-lg">
              <h3 className="font-bold text-sm mb-1">Symptom Based Solutions</h3>
              <p className="text-xs">
              Input symptoms for personalized advice and solutions tailored to your specific needs.
             </p>
            </div>

            {/* Bottom Left */}
            <div className="ml-20 absolute bottom-6 left-6 w-40 bg-white/50 backdrop-blur-sm px-6 py-8 rounded-lg shadow-lg">
              <h3 className="font-bold text-sm mb-1">Soil Health Monitoring</h3>
              <p className="text-xs">
              Regularly monitor soil health to enhance crop productivity and maintain optimal growing conditions.
              </p>
            </div>

            {/* Bottom Right */}
            <div className="mr-20 absolute bottom-6 right-6 w-40 bg-white/50 backdrop-blur-sm px-6 py-8 rounded-lg shadow-lg">
              <h3 className="font-bold text-sm mb-1">Vaccination Reminders</h3>
              <p className="text-xs">
              Set up reminders for important cattle vaccinations to ensure the health and well-being of your livestock
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


