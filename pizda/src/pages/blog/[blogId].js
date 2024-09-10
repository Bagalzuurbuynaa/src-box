import { useRouter } from "next/router";
import useSWR from "swr";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
 
const BlogPage = () => {
  const router = useRouter();
  const { blogId } = router.query;
 
  const url = `https://dev.to/api/articles/${blogId}`;
  const { data: blog, error, isLoading } = useSWR(url, fetcher);
 
  if (error) {
    return <div>error</div>;
  }
 
  if (isLoading) {
    return <div>loading</div>;
  }
 
  const body_markdown = blog?.body_markdown;
 
  const title = blog?.title;
  const description = blog?.description;
  const image = blog?.cover_image;
  const date = blog?.published_at;
 
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="container max-w-[700px] mx-auto">
        <img src={image} />
        <h1 className="font-bold text-3xl">{title}</h1>
        <div>{description}</div>
        <div>{date}</div>
        <div className="prose ">
          <Markdown rehypePlugins={[rehypeHighlight]}>{body_markdown}</Markdown>
        </div>
      </div>
    </div>
  );
};
export default BlogPage;