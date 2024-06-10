import { Routes, Route, Swich, Link } from "react-router-dom";
import Image from "./Assets/png/Image.png";
import gif from "./Assets/svg/icons8-dots-loading.gif";
import SearchImage from "./Assets/png/search.png";
import Camera from "./Assets/png/camera.png";
import Mic from "./Assets/png/mic.png";

//======================================= Components ============================================================
//Navigation Bar

const Navbar = (props) => {
  return (
    <div>
      <div>
        <nav className="flex flex-row items-center justify-between gap-5 p-5">
          <ul className="flex items-center">
            <li>
              <Link to="/">{props.Navbar}</Link>
            </li>
          </ul>
          <ul className="flex items-center justify-end gap-5 text-sm">
            <li >
              <Link to="/gmail" className="hover:underline">Gmail</Link>
            </li>
            <li>
              <Link to="/images" className="hover:underline">Images</Link>
            </li>
            <li>
              <Link to="/items" className="hover:underline">Items</Link>
            </li>
            <li>
              <Link to="/items" className="">
                <img src={gif} alt="gif" className="w-6 h-8 rounded-full hover:bg-gray-400" />
              </Link>
            </li>
            <li>
              <Link to="/button">
                <button className="bg-[#1a73e8] px-8 py-2 text-white rounded-md hover:bg-blue-900 hover:shadow-md">
                  Sign in
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

//=========================================================================================================

//Items
const Items = () => {
  return (
    <div>
      <Navbar
        Navbar={<img src={Image} alt="image" className="w-[150px] h-10" />}
      />
      <h1 className="text-3xl font-bold underline">Items</h1>
    </div>
  );
};

//Images
const Images = () => {
  return (
    <div>
      <Navbar
        Navbar={<img src={Image} alt="image" className="w-[150px] h-10" />}
      />
      <h1 className="text-3xl font-bold underline">Images</h1>
    </div>
  );
};

//Gmail
const Gmail = () => {
  return (
    <div>
      <Navbar
        Navbar={<img src={Image} alt="image" className="w-[150px] h-10" />}
      />
      <h1 className="text-3xl font-bold underline">Gmail</h1>
    </div>
  );
};

//SVG
const SVG = () => {
  return (
    <div>
      <Navbar Navbar="Svg" />
    </div>
  );
};

//========================================== Pages ==========================================================

//Home
const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      {/* main div */}
      <div className="flex flex-col items-center gap-6 pt-24 grow">
        <img src={Image} alt="image" className="w-[272px] " />
        {/* searchBar */}
        <div className="flex flex-row w-full max-w-screen-sm p-1 px-2 py-2 border rounded-full">
          <img src={SearchImage} alt="image" className="w-6 h-6 " />
          <input
            type="text"
            className="focus:outline-none grow"
            placeholder="  Search"
          />
          <img src={Mic} alt="image" className="w-6 h-6 " />
          <img src={Camera} alt="image" className="w-6 h-6 ml-1 "/>
        </div>

        {/* Iam feeling lucky */}
        <div>
          <ul className="flex gap-4">
            <li>
              <Link to="/" className="px-4 py-2 bg-gray-100 border border-gray-100 hover:bg-gary-300 hover:border-gray-800">
                Google Search
              </Link>
            </li>
            <li>
              <Link to="/" className="px-4 py-2 bg-gray-100 border border-gray-100 hover:bg-gray-300 hover:border-gray-800">
                I am feeling lucky
              </Link>
            </li>
          </ul>
        </div>

        {/* language*/}
        <div className="flex">
          Google offered in:
          <ul className="flex gap-2">
            <li>
              <Link to="/" className="mx-1 text-blue-700 hover:underline">
                සිංහල
              </Link>
            </li>
            <li>
              <Link to="/" className="mx-1 text-blue-700 hover:underline">
                {" "}
                தமிழ்
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

//Footer
const Footer = () => {
  return (
    <div className="bg-gray-200">
      <div className="px-6 py-3">Sri Lanka</div>
      
      <div className="flex justify-between px-6 border border-t border-gray-400">
        <ul className="flex gap-3 py-3">
          <li className="hover:underline">About</li>
          <li className="hover:underline">Advertising</li>
          <li className="hover:underline">Bussiness</li>
          <li className="hover:underline">How Seach works</li>
        </ul>
        <ul className="flex gap-3 py-3">
          <li className="hover:underline">Privacy</li>
          <li className="hover:underline">Terms</li>
          <li className="hover:underline">settings</li>
        </ul>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gmail" element={<Gmail />}></Route>
        <Route path="/items" element={<Items />}></Route>
        <Route path="/Images" element={<Images />}></Route>
      </Routes>
    </div>
  );
};

export default App;
