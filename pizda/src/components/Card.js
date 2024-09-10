export const Card = (props) => {
    const { image, title, date, tags } = props;
    return (
      <div className="px-4 py-2 border border-solid rounded w-fit">
        <img width={300} src={image} alt={title} />
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{tags}</p>
      </div>
    );
  };
   