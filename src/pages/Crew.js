import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Header } from "../components"

export default function Crew() {
  const [crew, setCrew] = useState([])

  useEffect(() => {
    const fetchCrew = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/crew")
      const data = await res.json()
      setCrew(data)
    }

    fetchCrew()
  }, [])

  return (
    <>
     
        <Header/>
        <section className="py-30">
          <h1 className="heading text-center mb-10">Crew</h1>

          <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
            {crew.map(({ id, name, image }) => (
              <Link  key={id} to={`/crew/${id}`}>
                <article className="relative hover:scale-105 transition">
                  <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="h-96 w-full object-cover"
                  />
                  <h2 className="absolute bottom-5 left-5 font-bold text-white text-lg tracking-wide">
                    {name}
                  </h2>
                </article>
              </Link>
            ))}
          </div>
        </section>

    </>
  )
}
