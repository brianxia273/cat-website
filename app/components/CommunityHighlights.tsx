interface CommHighProps {
  heading: string;
  events: Array<[string, string]>;
}


export function CommunityHighlights({ heading, events }: CommHighProps) {
  return (<div>
    {events.map((pair, index) => {
      return (
        <div key={index}>
          <h3 className="mb-5 text-4xl text-black">{pair[0]}</h3>
          <p className="mb-10 text-theme-grey">{pair[1]}</p>
        </div>
      );
    })}
  </div>)
}