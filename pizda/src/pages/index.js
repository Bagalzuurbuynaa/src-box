import useSWR from "swr";
import { Card } from "../components/Card";
import { CardDaisy } from "../components/CardDaisy";
import { Carousel } from "../components/Carousel";
import { useRouter } from "next/router";
import Link from "next/link";
import { Contact } from "../pages/Contact";
import { useState } from "react";
 
const fetcher = (...args) => fetch(...args).then((res) => res.json());
 
const MainPage = () => {
  const router = useRouter();
 
  const url = "https://dev.to/api/articles";
  const { data: blogdata, error, isLoading } = useSWR(url, fetcher);
 
  const [count, setCount] = useState(9);
  const handle = () => {
    setCount(count + 6);
  };
 
  if (isLoading) {
    return <p>...loading</p>;
  }
 
  if (error) {
    return <p>...sorry error</p>;
  }
  const ViewAllData = () => blogdata;
  const sliceDataT = blogdata.slice(0, 4);
 
  const slicedData = blogdata.slice(0, count);
 
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="carousel w-[1200px] h-[600px]">
        {blogdata.map((sel) => {
          return (
            <Carousel
              index={sel.id}
              key={sel.id}
              image={sel.cover_image}
              title={sel.title}
              date={sel.published_at}
            />
          );
        })}
      </div>
      <div className="font-bold w-[1200px] mx-auto mb-8 mt-12 text-2xl">
        Trending
      </div>
      <div className="flex gap-[10px]">
        {sliceDataT.map((card) => {
          return (
            <CardDaisy
              key={card.id}
              image={card.cover_image}
              title={card.title}
              date={card.published_at}
            />
          );
        })}
      </div>
      <div className="font-bold w-[1200px] mx-auto mb-10 mt-10 text-2xl">
        All Blog Post
      </div>
      <div className="flex justify-between">
        <div className="flex font-bold gap-4">
          <Link href="/Newproject">
            <p>All</p>
          </Link>
          {blogdata.map((category) => {
            return <div>{category.tag_list}</div>;
          })}
        </div>
        <div onClick={ViewAllData} className="flex font-bold hover:bg-black">
          View ALl
        </div>
      </div>
      <div className="max-w-[1200px] grid grid-cols-3 mx-auto">
        {slicedData.map((blog) => {
          return (
            <Link href={`blog/${blog.id}`} key={blog.id}>
              <Card
                image={blog.cover_image}
                title={blog.title}
                date={blog.published_at}
                tags={blog.tags}
              />
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center ">
        <button
          onClick={handle}
          className="bg-white border-2 w-[120px] h-[48px]"
        >
          LoadMore
        </button>
      </div>
    </div>
  );
};
export default MainPage;
 
 