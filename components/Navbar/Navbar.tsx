import BtnRouter from "../BtnRouter";
// import { useRouter } from 'next/navigation';
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { RiMenu3Line } from "react-icons/ri";
import UserAccountNav from "../UserAccountNav";
import SearchBar from "../searchBar";
import Menu from "./Menu";

const Navbar = async () => {
  // const router = useRouter();
  const session = await getServerSession(authOptions);

  return (
    <div className="navbar bg-[#7C32A1] ">
      {/** Menu */}
      <div className="navbar-start">
        <BtnRouter
          style="btn btn-ghost normal-case text-xl text-white"
          content="LearniFy"
          path="/"
        />
        <Menu />
      </div>

      <div className="navbar-end lg:space-x-4 lg:mr-4">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden text-white text-2xl"
          >
            <RiMenu3Line />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[20rem]"
          >
            <li>
              {/** add handle Search  */}
              <SearchBar />
            </li>
            <li>
              <div className="divider"></div>{" "}
            </li>
            <li>
              <a>Kelas</a>
            </li>
            <li>
              <BtnRouter content="Blog" style="" path="/blog" />
            </li>
            <li>
              <BtnRouter content="Masuk/Daftar" style="" path="/masuk" />
            </li>
          </ul>
        </div>
        {/** */}
        <div className="lg:form-control hidden">
          <input
            type="text"
            placeholder="Belajar apa hari ini.."
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        {session?.user ? (
          <UserAccountNav />
        ) : (
          <BtnRouter
            style="btn hidden lg:flex"
            path="/masuk"
            content="Masuk/Daftar"
          />
        )}

        {/* <button className="btn hidden lg:flex">Masuk/Daftar</button> */}
      </div>
    </div>
  );
};

export default Navbar;
