import Logo from "../Logo/Logo_small";
import fb from "../../assets/icons/fb.png";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin.png";
import twitter from "../../assets/icons/new-twitter.png";
import us from "../../assets/icons/us.png";
import FooterList from "./FooterList";

const aboutUs = [
  "Master Plan",
  "Jobs",
  "Invest",
  "Pressroom",
  "Blog",
  "Contact",
];
const explore = [
  "Unlock my Robot Power",
  "Starlight",
  "Robot Platform",
  "EEVE Roadmap",
];
const comunity = [
  "Willow X Community",
  "Developer & Maker Access",
  "Special Cases",
];

const footerNav = [
  "March22 Recap",
  "Privacy Policy",
  "General Terms",
  "Contact",
];

const socialIcons = [
  { src: fb, alt: "fb" },
  { src: instagram, alt: "instagram" },
  { src: twitter, alt: "twitter" },
  { src: linkedin, alt: "linkedin" },
];

const Footer = () => {
  return (
    <footer className="w-full mt-24 footer flex justify-center text-[1.2rem] md:text-[1.8rem]">
      <section className="w-full xl:w-[75%] m-16">
        <section className="flex flex-col lg:flex-row justify-between mb-24 md:mb-36">
          <div className="mb-8">
            <Logo variant="white" />
          </div>

          <div className="flex  gap-8 lg:gap-0 flex-row w-full lg:basis-2/3 justify-evenly">
            <FooterList header="About US" items={aboutUs} />
            <FooterList header="Explore EEVE" items={explore} />
            <FooterList header="Community & Support" items={comunity} />
          </div>
        </section>

        <section className="flex flex-col xl:flex-row gap-8 items-center border-t border-t-[#252948] py-8 pb-16 justify-evenly">
          <div className="flex [&>*]:px-4">
            {socialIcons.map((item) => (
              <img key={item.src} src={item.src} alt={item.alt} />
            ))}
          </div>
          <ul className="flex [&>*]:px-4 md:[&>*]:px-8 justify-evenly w-full">
            {footerNav.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="flex items-center gap-8">
            <img src={us} alt="usa" />
            <p>United States (English)</p>
          </div>
        </section>

        <section className="w-full flex justify-center text-[#323544]">
          <p>EEVE © 2024. All rights reserved</p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
