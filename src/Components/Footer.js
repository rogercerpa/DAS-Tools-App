import { Typography } from "@material-tailwind/react";
import Logo from "../assets/logo.png"

const FooterItems = [
  { name: 'About Us', description: '', href: '/aboutus', icon: "" },
  { name: 'License', description: '', href: '/License', icon: "" },
  { name: 'Contribute', description: '', href: '/Contribute', icon: "" },
  { name: 'Contact Us', description: '', href: 'ContactUs', icon: "" },
  // { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
 
export default function Example() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
      <img src={Logo} alt="Logo" className="h-8 w-auto" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          {FooterItems.map((item) => (
                      <li>
                      <Typography
                        as="a"
                        href={item.href}
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                      >
                        {item.name}
                      </Typography>
                    </li>
          ))}
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 CerpaMedia
      </Typography>
    </footer>
  );
}