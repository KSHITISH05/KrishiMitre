export default function Div3() {
  return (
    <div className=" py-12">
      <div className="container mx-auto">
        {/* Div3a: Heading */}
        <h2 className="text-2xl font-bold text-[#634a10] text-center mb-8">
          Is your cattle showing signs of illness or unusual behavior?
          KrishiMitra is here to support you in keeping your livestock
          healthy and thriving.
        </h2>

        {/* Div3b and Div3c Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Div3c: Text Section (Now on the left) */}
          
          <div className="flex flex-col justify-center">
    <div className="bg-white/50 backdrop-blur-md shadow-lg rounded-lg p-6">
      <h3 className="font-semibold text-lg mb-4">Overview</h3>
      <p className="mb-4">
        Mastitis is a bacterial infection of the udder, commonly found in dairy cattle. It is one of the most prevalent and economically significant diseases in cattle farming.
      </p>

      <h3 className="font-semibold text-lg mb-2">Symptoms</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Swelling, redness, or heat in the udder.</li>
        <li>Clotted or discolored milk.</li>
        <li>Reduced milk production.</li>
        <li>Pain or discomfort in the affected area.</li>
      </ul>

      <h3 className="font-semibold text-lg mb-2">Causes</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Poor milking hygiene.</li>
        <li>Injuries to the udder.</li>
        <li>Dirty living conditions.</li>
      </ul>

      <h3 className="font-semibold text-lg mb-2">Impact</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Decreased milk yield.</li>
        <li>Poor milk quality.</li>
        <li>Additional costs for treatment and management.</li>
      </ul>

      <p>
        This disease is easily detected through visible symptoms and routine milk testing, making it a critical condition to monitor for dairy farmers.
      </p>
    </div>
  </div>

          {/* Div3b: Image Upload Section (Now on the right) */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center">
              <p className="font-bold">Upload Pictures of the Cattle</p>
            </div>
            <div className="border-2 border-dashed border-primary p-8 text-center mt-2">
              {/* Image Container */}
              <div className="mb-4">
                <img
                  src="dropbox.png" // Replace with your image path
                  alt="Image"
                  className="mx-auto w-32 h-auto" // Adjust the width (e.g., w-32) and let the height scale automatically
                />
              </div>

              {/* Paragraph */}
              <p className="text-text">Drop your images here</p>
            </div>
            <div className="mt-4 flex space-x-4">
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90">
                Upload/Browse
              </button>
              <button className="bg-secondary text-black px-4 py-2 rounded hover:bg-opacity-90">
                Submit
              </button>
            </div>
            {/* <div className="mt-4 flex space-x-4">
              <img
                src="/image1.jpg"
                alt="Image 1"
                className="w-24 h-24 rounded"
              />
              <img
                src="/image2.jpg"
                alt="Image 2"
                className="w-24 h-24 rounded"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
