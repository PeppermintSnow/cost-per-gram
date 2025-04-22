import AboutCard from "@/components/AboutCard";

type CardsType = {
  title: string;
  body: string | Record<string, JSX.Element>;
}
const cards: CardsType[] = [
  {
    title: "User Input",
    body: "The user provides the type of the ingredient, the price as a whole, its net weight, and the measurement needed. This is the foundation of all calculations."
  },
  {
    title: "Unit Normalization",
    body: "The user has the capability to input different units. These units are converted to grams accordingly for standardization."
  },
  {
    title: "Cost per Gram",
    body: <>
      Using the price and the normalized values of the net weight, we derive how much a gram costs for the ingredient.
      <pre>
        costPerGram = totalCost / netWeight
      </pre>
    </> 
  },
];

const Home = (): JSX.Element => {
  return (
    <>
      <main>
        <div
          className="flex flex-col justify-center items-center"
          style={{
            backgroundImage: 'url("/hero.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '75vh'
          }}
        >
          <p className="text-5xl font-extrabold text-white text-center -mt-5">
            About
          </p>
          <p className="text-xl font-bold text-purple-300 w-full md:w-100 text-justify mt-3">
            costPerGram is an ingredient costing utility built for precision and efficiency. It automates unit conversions and pricing computations, providing users with accurate cost-per-measurement values based on raw ingredient data. Designed for reliability and scalability, the tool eliminates manual calculation errors and simplifies inventory cost analysis.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center [&>div]:p-3 my-5">
          <div className="">
            <p className="text-white text-3xl font-bold text-center">How is it computed?</p>
            {cards.map((card, index) => {
              return <AboutCard key={index} title={card.title}>{card.body}</AboutCard>
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
