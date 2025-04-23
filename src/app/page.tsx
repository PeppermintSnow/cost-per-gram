import Link from "next/link";

const Home = (): JSX.Element => {
  return (
    <>
      <main className="bg-gray-900">
        <div
          className="flex flex-col justify-center items-center"
          style={{
            backgroundImage: 'url("/cost-per-gram/hero.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90vh'
          }}
        >
          <p className="text-5xl font-extrabold text-white text-center -mt-5">
            Costing App
          </p>
          <p className="text-xl font-bold text-purple-600 text-center mt-3">
            Hassle-free costing!
          </p>
          <Link
            href="app"
            className="p-3 bg-purple-800 hover:bg-purple-700 rounded-xl text-lg text-white font-bold cursor-pointer transition max-w-fit mt-5"
          >
            Start costing
          </Link>
        </div>
      </main>
    </>
  );
}

export default Home;
