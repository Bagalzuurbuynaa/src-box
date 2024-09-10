import Link from "next/link";
 
export const Header = () => {
  return (
    <div className="flex justify-around w-[1200px] h-[150px] mx-auto">
      <Link href="/Newproject">
        <img className="w-[100px] h-[50px] mt-3" src="/header.svg" />
      </Link>
      <div className="flex gap-4 mt-6 justify-center">
        <Link href="/">Home</Link>
        <Link href="/">Blog</Link>
        <Link href="/Contact">Contact</Link>
      </div>
      <div className="flex justify-center h-[30px] items-center container-fit mt-6">
        <input className="w-[170px] h-[30px]" placeholder="Search" />
        <img className="w-[20px] h-[20px]" src="/searchicon.png" />
      </div>
    </div>
  );
};