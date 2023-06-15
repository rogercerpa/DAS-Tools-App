import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
 
const menuItems = [
  {
    Name: "Roger Cerpa",
    description:
      "Senior Analyst",
  },
  {
    Name: "Galan Wako",
    description:
      "Senior Analyst",
  },
  {
    Name: "Jeff Galloway",
    description:
      "Senior Manager",
  },
];
 
export default function MenuButton() {
  const [openMenu, setOpenMenu] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false),
  };
 
  return (
    <Menu open={openMenu} handler={setOpenMenu}>
      <MenuHandler>
        <Button
          {...triggers}
          variant="text"
          className="flex items-center gap-3 text-base font-normal capitalize tracking-normal"
        >
          Analyst Name{" "}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList
        {...triggers}
        className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid"
      >
        <Card
          color="blue"
          shadow={false}
          variant="gradient"
          className="col-span-3 grid h-full w-full place-items-center rounded-md"
        >
          <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
        </Card>
        <ul className="col-span-4 flex w-full flex-col gap-1">
          {menuItems.map(({ Name, description }) => (
            <a href="#" key={Name}>
              <MenuItem className="hover:bg-gray-400">
                <Typography variant="h6" color="blue-gray" className="mb-1 ">
                  {Name}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {description}
                </Typography>
              </MenuItem>
            </a>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
}