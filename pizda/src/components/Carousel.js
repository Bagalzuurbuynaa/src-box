export const Carousel = (props) => {
    const { image, title, date, index } = props;
    return (
      <div id={index} className="carousel-item relative ">
        <img className="w-[1200px] h-[600px]" src={image} />
        <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href={index} className="btn btn-circle">
            ❮
          </a>
          <a href={index} className="btn btn-circle">
            ❯
          </a>
        </div>
   
        <div className="w-[500px] h-[200px] absolute p-[40px] bg-white rounded-2xl ml-[20px] mt-[380px]">
          <p className="flex items-center justify-center w-[90px] h-[30px] text-sm bg-blue-600 rounded-md text-white">
            Technology
          </p>
          <h4 className="text-3xl mt-[13px]">{title}</h4>
          <p className="text-slate-400 mt-[px]">{date}</p>
        </div>
      </div>
    );
  };
   
   