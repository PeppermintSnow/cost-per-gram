import AboutCard from "@/components/AboutCard";

type CardsType = {
  title: string;
  body: string | React.ReactNode;
}
const cards: CardsType[] = [
  {
    title: "User Input",
    body: "The user provides essential data, including the ingredient type, total price, net weight, and the required measurement. This foundational data serves as the basis for all subsequent calculations."
  },
  {
    title: "Unit Normalization",
    body: "Users can input various units of measurement, which are automatically converted to grams for consistency and standardization in calculations."
  },
  {
    title: "Cost per Gram",
    body: <>
      The cost per gram is calculated by dividing the total cost by the normalized net weight of the ingredient. This helps determine how much each gram of the ingredient costs.
  
      <pre className="mt-5 text-lg">
        costPerGram = totalCost / netWeight
      </pre>
    </> 
  },
  {
    title: "Cost per Use",
    body: <>
      The app calculates the cost per use, which is essential for pricing and recipe cost analysis. This is done by multiplying the cost per gram by the standardized measurement required for the recipe.

      <pre className="mt-5 text-lg">
        costPerUse = costPerGram * measurement
      </pre>
    </>
  },
  {
    title: "Aggregation",
    body: "The final step aggregates the data by summing all valid numeric values. This gives the total cost of the ingredients required for the recipe."
  }
];

const Home = (): React.ReactNode => {
  return (
    <>
      <main>
        <div
          className="flex flex-col justify-center items-center w-screen"
          style={{
            backgroundImage: 'url("/cost-per-gram/hero_alt.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '75vh'
          }}
        >
          <p className="text-5xl font-extrabold text-white text-center">
            About
          </p>
          <p className="text-xl font-bold text-purple-300 w-100 text-justify mt-3">
            costPerGram is an ingredient costing utility built for precision and efficiency. It automates unit conversions and pricing computations, providing users with accurate cost-per-measurement values based on raw ingredient data. Designed for reliability and scalability, the tool eliminates manual calculation errors and simplifies inventory cost analysis.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center [&>div]:p-3 my-5">
          <div className="flex flex-col w-full items-center">
            <p className="text-white text-3xl font-bold text-center">How is it computed?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {cards.map((card, index) => {
                return (
                    <AboutCard
                      key={index}
                      title={card.title}
                    >
                      {card.body}
                    </AboutCard>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
