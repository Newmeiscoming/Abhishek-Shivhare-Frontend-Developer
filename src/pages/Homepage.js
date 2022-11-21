import { Header } from "../components";

export default function Homepage() {
 return (
    <div >
        <Header/>
        <section className="showcase">
          <div className="overlay">
            <article className="text-white border-solid border-4 h-2/3 absolute top-40  left-20 ">
              <h1 className="heading text-center capitalize mb-28">
                WELCOME TO THE WORLD OF spaceX  
              </h1>

              
                <h2 className="font-bold text-center border-b-2 border-white text-xl mb-3 pb-2 ">
                  ABOUT
                </h2>
                <p className="max-w-3xl mx-auto text-xl text-center mb-10 ">
                  SpaceX was founded by Elon Musk in the year 2002. It has 9500
                  employess, 4 vehicles, 3 launch sites, and 3 test sites and is
                  valued at USD 74,000,000,000 
                </p>
              
              <h2 className="font-bold text-center border-b-2 border-white text-xl mb-3 pb-2">
                  SUMARRY
                </h2>
              <p className="max-w-3xl text-xl mx-auto text-center">
                SpaceX designs, manufactures and launches advanced rockets and
                spacecraft. The company was founded in 2002 to revolutionize
                space technology, with the ultimate goal of enabling people to
                live on other planets.
              </p>
            </article>
          </div>
        </section>

    </div>
  );
}
