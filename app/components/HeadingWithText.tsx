type props = { subheading : string, paragraph : string}

export const HeadingWithText = ({ subheading, paragraph } : props ) : any => {
    return <div className="flex flex-col">
        <h6>{subheading}</h6>
        <p>{paragraph}</p>
    </div>;
}