export default function Div3() {
  return (
    <div className="py-12">
      <div className="container mx-auto">
        {/* Div3a: Heading */}
        <h2 className="text-2xl font-bold text-primary text-center mb-8">
          Having trouble with your crops? Spotting unusual spots, discoloration,
          or wilting leaves? KrishiMitra is here to help!
        </h2>

        {/* Div3b and Div3c Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Div3b: Image Upload Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center">
              <p className="font-bold">
                Upload Pictures of Your Defected Plant{" "}
              </p>
            </div>

            <div className="border-2 border-dashed border-primary p-8 text-center mt-2">
              <div className="mb-4">
                <img
                  src="dropbox.png" // Replace with your image path
                  alt="Image"
                  className="mx-auto w-32 h-auto" // Adjust the width (e.g., w-32) and let the height scale automatically
                />
              </div>
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
            <div className="mt-4 flex space-x-4">
              <img
                src="patti1.jpg"
                alt="Image 1"
                className="w-24 h-24 rounded"
              />
              <img
                src="patti.jpg"
                alt="Image 2"
                className="w-24 h-24 rounded"
              />
            </div>
          </div>

          {/* Div3c: Text Section */}
          <div className="flex flex-col justify-center">
            <div className="bg-white/50 backdrop-blur-md shadow-lg rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">Overview</h3>
              <p className="mb-4">
                Early Blight is a fungal disease caused by{" "}
                <em>Alternaria solani</em>, commonly affecting tomato and potato
                plants. It can result in significant crop damage and reduced
                yield if not managed properly.
              </p>

              <h3 className="font-semibold text-lg mb-2">Symptoms</h3>
              <ul className="list-disc list-inside mb-4">
                <li>
                  Concentric dark spots with ring-like patterns on leaves, known
                  as "target spots."
                </li>
                <li>
                  Yellowing of affected leaves, which eventually leads to leaf
                  drying and death.
                </li>
                <li>Dark lesions on stems and fruits near the stem end.</li>
              </ul>

              <h3 className="font-semibold text-lg mb-2">Causes</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Thrives in warm, wet, and humid conditions.</li>
                <li>
                  Spread through rain splash, wind, contaminated seeds, and
                  farming tools.
                </li>
              </ul>

              <h3 className="font-semibold text-lg mb-2">Impact</h3>
              <ul className="list-disc list-inside mb-4">
                <li>
                  If untreated, Early Blight can cause severe yield losses.
                </li>
                <li>Affects both crop quality and overall productivity.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
