interface headingProps {
  heading: string;
  events: Array<[string, string]>;
}

export default function TextBlock(data: headingProps) {
  return (
    <div className="m-20">
      <h2 className="text-theme-red text-7xl mb-10 font-semibold">
        {data.heading}
      </h2>
      {data.events.map((pair, index) => {
        return (
          <>
            <h3 className="mb-5 text-4xl text-black">{pair[0]}</h3>
            <p className="mb-10 text-theme-grey">{pair[1]}</p>
          </>
        );
      })}
    </div>
  );
}
