import Link from "next/link";
 
export const Footer = () => {
  return (
    <div className="bg-slate-50 w-full px-32 border-t-2">
      <div className="w-[1200px] mx-auto">
        <div className="flex gap-52 w-fit ">
          <div className="  h-fit">
            <p className="font-bold mt-5">About</p>
            <p className="mt-4 w-[280px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="mt-4">Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
          <div className="mt-12 gap-5">
            <Link href="/Newproject">Home</Link>
            <Link href="/">Blog</Link>
            <Link href="/Contact">Contact</Link>
          </div>
          <img className="mt-6 w-[140px] h-[50px]" src="/FooterLogo.svg" />
        </div>
        <div className="flex w-[1216px] mt-4 border-t-4 h-[120px]">
          <img className="mt-7 w-[230px] h-[58px]" src="/FooterLogo1.svg" />
          <div className="flex justify-end mt-6 w-[680px] gap-5">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};