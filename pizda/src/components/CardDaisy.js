export const CardDaisy = (props) => {
    const { title, image } = props;
   
    return (
      <div className="card w-[289px] h-[328px] bg-base-100 image-full shadow-xl">
        <figure>
          <img className="" src={image} />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Technology!</button>
          </div>
          <div className="card-actions">
            <p>{title}</p>
          </div>
        </div>
      </div>
    );
  };
   