// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="bg-primary p-4 text-white">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Left: Logo and Title */}
//         <div className="flex items-center">
//           <img src="/leaf-logo.png" alt="Leaf Logo" className="h-8 w-8 mr-2" />
//           <span className="text-xl font-bold">Krishimitra</span>
//         </div>

//         {/* Center: Navigation Links */}
//         <div className="flex space-x-6">
//           <Link href="/" className="hover:text-secondary">Home</Link>
//           <Link href="/services" className="hover:text-secondary">Services</Link>
//           <Link href="/plants" className="hover:text-secondary">Plants</Link>
//           <Link href="/cattles" className="hover:text-secondary">Cattles</Link>
//           <Link href="/contact" className="hover:text-secondary">Contact Us</Link>
//         </div>

//         {/* Right: Signup Button and Dark Mode Toggle */}
//         <div className="flex items-center space-x-4">
//           <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-opacity-90">
//             Sign Up
//           </button>
//           <div className="flex items-center">
//             <span className="mr-2">Dark Mode</span>
//             <label className="switch">
//               <input type="checkbox" />
//               <span className="slider round"></span>
//             </label>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="bg-primary p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo and Title */}
        <div className="flex items-center ">
          <img src="leaf.jpg" alt="Leaf Logo" className="h-8 w-8 mr-2 rounded-lg bg-green-600" />
          <span className="text-xl font-bold">Krishimitra</span>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-secondary">
            Home
          </Link>
          <Link href="/services" className="hover:text-secondary">
            Services
          </Link>
          <Link href="/plants" className="hover:text-secondary">
            Plants
          </Link>
          <Link href="/cattles" className="hover:text-secondary">
            Cattles
          </Link>
          <Link href="/contact" className="hover:text-secondary">
            Contact Us
          </Link>
        </div>

        {/* Right: Signup Button and Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <button className="bg-secondary text-black px-4 py-2 rounded hover:bg-opacity-90">
            Sign Up
          </button>
          {/* <ThemeToggle /> Add the ThemeToggle component here */}
        </div>
      </div>
    </nav>
  );
}