export const Contact = () => {
    return (
      <div className="container  mx-auto max-w-fit">
        <div>
          <div className="w-fit  ">
            <p className="w-[196px] h-[40px] font-bold text-3xl">Contact Us</p>
            <p className="w-[640px] h-[103px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="flex gap-6 p-[10px]">
            <div className="w-[270px] h-[133px] border border-solid p-[10px] rounded-lg">
              <p className="font-bold text-xl">Address</p>
              <p className="text-size-[24px] w-[260px] h-[52px]">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
            <div className="w-[270px] h-[133px] border border-solid p-[10px] rounded-lg ">
              <p className="font-bold text-xl">Contact</p>
              <p className="text-size-[24px] w-[260px] h-[52px]">
                313-332-8662 info@email.com
              </p>
            </div>
          </div>
        </div>
        <div className="w-[643px] h-[443px] bg-slate-100 rounded-lg p-[25px]">
          <p className="font-semibold ">Leave a Message</p>
          <div className="">
            <input
              className="border-[2px] m-[15px] w-[200px] h-[33px]"
              placeholder="Your Name"
            ></input>
            <input
              className="border-[2px] m-[15px] w-[200px] h-[33px]"
              placeholder="Your Email"
            ></input>
          </div>
          <div>
            <input
              className="border-[2px] m-[15px] w-[500px] h-[35px]"
              placeholder="Subject"
            ></input>
          </div>
          <div>
            <textarea
              className="w-[500px] h-[1use50px] border-[2px] mx-[15px] my-[10px]"
              placeholder="Write a message"
            />
            <button className="btn btn-active btn-primary mx-[15px] my-[10px]">
              Send Message
            </button>
          </div>
        </div>
      </div>
    );
  };
  export default Contact;