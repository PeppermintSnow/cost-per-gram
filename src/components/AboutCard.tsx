interface Props {
  title: string;
}

const AboutCard: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <div className="text-2xl bg-gray-800 font-extrabold text-white rounded-t-xl p-3 mt-5">
        {title}
      </div>
      <div className="text-xl text-white bg-purple-800 font-bold p-3 rounded-b-xl w-100 text-justify h-fit md:h-60">
        {children}
      </div>
    </div>
  );
}

export default AboutCard;
