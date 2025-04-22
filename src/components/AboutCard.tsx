interface Props {
  title: string;
}

const AboutCard: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <div className="text-2xl bg-gray-600 font-extrabold text-white rounded-t-xl p-3 w-fit mt-5">
        {title}
      </div>
      <div className="text-xl text-white bg-purple-700 font-bold p-3 rounded-xl rounded-ss-none w-100">
        {children}
      </div>
    </>
  );
}

export default AboutCard;
