import Logo from "./Logo_small";
const Footer = () => {
  return (
    <footer className="w-full mt-24 bg-[#0E0E0E] flex justify-center">
      <section className="w-full xl:w-[75%] m-16">
        <section className="flex justify-between mb-36">
          <div>
            <Logo variant="white" />
          </div>

          <div className="flex basis-2/3 justify-evenly">
            <div className="text-[1.8rem]">
                <h3 className="text-white font-semibold ">About US</h3>
                <ul className="text-[#81859F]">
                  <li>Master Plan</li>
                  <li>Jobs</li>
                  <li>Invest</li>
                  <li>Pressroom</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
            </div>

            <div className="text-[1.8rem]">
                <h3 className="text-white font-semibold ">Explore EEVE</h3>
                <ul className="text-[#81859F]">
                  <li>Unlock my Robot Power</li>
                  <li>Starlight</li>
                  <li>Robot Platform</li>
                  <li>EEVE Roadmap</li>
                </ul>
            </div>
            <div className="text-[1.8rem]">
                <h3 className="text-white font-semibold ">Community & Support</h3>
                <ul className="text-[#81859F]">
                  <li>Willow X Community</li>
                  <li>Developer & Maker Access</li>
                  <li>Special Cases</li>
                </ul>
            </div>

          </div>
        </section>
        <section className="border-t border-t-[#252948]">
        </section>
      </section>
    </footer>
  );
};

export default Footer;
