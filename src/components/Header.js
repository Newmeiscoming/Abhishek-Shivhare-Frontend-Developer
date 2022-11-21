import { Link } from "react-router-dom"
import logo from "../Assets/spacex.svg"

export default function Header() {
  

  return (
    <>
      <header className="absolute header flex items-center justify-between px-5  w-full">
        <div>
          <Link to="/">
            <img src={logo} className='w-96' alt="" />
          </Link>
        </div>

        <nav>
          <ul className="ul">
            <li className="mx-5 ">
              <Link to="/capsules" className="text-white text-lg hover:text-xl">
                Capsules
              </Link>
            </li>
            
            <li className="mx-5">
              <Link to="/crew" className="text-white text-lg hover:text-xl">
                Crew
              </Link>
            </li>
            
            <li className="mx-5">
              <Link to="/launchpads" className="text-white text-lg hover:text-xl">
                Launchpads
              </Link>
            </li>
            
            <li className="mx-5">
              <Link to="/rockets" className="text-white text-lg hover:text-xl ">
                Rockets
              </Link>
            </li>
          </ul>
        </nav>

       
      </header>
    </>
  )
}
