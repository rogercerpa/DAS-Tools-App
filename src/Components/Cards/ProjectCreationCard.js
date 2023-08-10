import React, { useState } from 'react'
import { MagnifyingGlassIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import Menu from "../Menu"



export default function ProjectCreationCard({TABS,TABLE_HEAD, TABLE_ROWS, onTriageButtonClick }) {
  
  const [selectedProject, setSelectedProject] = useState(null);

  const handleTriageButtonClick = (rowData) => {
    // Update the state with the selected project data
    onTriageButtonClick(rowData);
  };

  return (
    <Card className="h-auto w-full md:max-w-md p-5">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between ">
          <div>
            <Typography variant="h5" color="blue-gray">
              Project List
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all your Projects
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Menu/>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value} className='bg-transparent'>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
          </div>
        </div>
      </CardHeader>
      <CardBody className=" px-0">
        <table className="mt-4 min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
  {TABLE_ROWS.map((row, rowIndex) => {
    const isLast = rowIndex === TABLE_ROWS.length - 1;
    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

    return (
      <tr key={rowIndex}>
        {TABLE_HEAD.map((key, index) => (
          <td key={index} className={classes}>
            <Typography variant="small" color="blue-gray" className="font-normal">
              {row[key]}
            </Typography>
          </td>
        ))}
        <td className={classes}>
          <Tooltip content="Edit User">
            
              <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300 sm:mt-0 sm:w-auto"
                    onClick={() => handleTriageButtonClick(row)}
                  
                  >
                    Triage
                  </button>
            
          </Tooltip>
        </td>
      </tr>
    );
  })}
</tbody>
        </table>

      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" color="blue-gray" size="sm">
            Previous
          </Button>
          <Button variant="outlined" color="blue-gray" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
     
    </Card>
  )
}
