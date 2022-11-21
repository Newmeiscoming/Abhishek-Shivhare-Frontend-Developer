import { useState,useEffect } from "react"
import { Header} from "../components"
import { Link } from "react-router-dom"

export default function Launchpads() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchCrew = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/launchpads");
      const data = await res.json()
      setData(data)
    }

    fetchCrew()
  }, [])

console.log(data);
  return (
    <>  
        <Header/>
        <section className="py-32 max-width">
          <h1 className="heading text-center mb-10">Launchpads</h1>

          <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
            {data.map(({ id, images, name, details }) => (
              <Link to={`/launchpads/${id}`}>
                <article className="hover:scale-105 transition">
                  <img
                    src={images.large[0]}
                    alt={name}
                    className="h-64 object-cover"
                  />

                  <div className="bg-zinc-900 p-5">
                    <h2 className="text-lg text-white mb-3 font-bold">
                      {name}
                    </h2>
                    <p className="text-white opacity-75 mb-10">{`${details.substring(
                      0,
                      50
                    )}...`}</p>
                    <Link to={`/launchpads/${id}`} className="btn">
                      Read More &rarr;
                    </Link>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      
    </>
  )
}
