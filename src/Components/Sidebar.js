import {React} from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarDaysIcon,
  FolderPlusIcon,
  ArrowsRightLeftIcon,
} from '@heroicons/react/24/outline'

const TeamFeatures = [
  { name: 'Agencies', description: 'List of all agencies', href: 'Agencies', icon: ArrowsRightLeftIcon },
  { name: 'AssociateProfile', description: "DAS Member Profile", href: 'AssociateProfile', icon: FolderPlusIcon },

]

const DashboardFeatures = [
  { name: 'QueueStatus', description: 'Queue Status & Report', href: 'QueueStatus', icon: ArrowsRightLeftIcon },
  { name: 'ScheduleView', description: "Weekly Schedule", href: 'ScheduleView', icon: FolderPlusIcon },

]

const ToolsFeatures = [
  { name: 'Coordination', description: 'daily work', href: 'Coordination', icon: ArrowsRightLeftIcon },
  { name: 'Project Creation', description: "triage, create project folder", href: 'ProjectCreation', icon: FolderPlusIcon },
  { name: 'Start-up', description: 'Start-up Calculator', href: 'Startup', icon: CalendarDaysIcon },
  { name: 'CSAT email', description: 'Monthly CSAT email', href: 'CSATemail', icon: CalendarDaysIcon },
  { name: 'DAS-Bot', description: 'DAS chatbot', href: 'chatbot', icon: CalendarDaysIcon },

]

const solutionsForPage = {
  "Dashboard": DashboardFeatures,
  "Tools": ToolsFeatures,
  "Team": TeamFeatures
}



const Sidebar = ({ currentPage }) => {

const solutions = solutionsForPage[currentPage];

  return (
<div className="w-screen max-w-xs flex-auto overflow-hidden   text-xs leading-6 shadow-sm ring-1 ring-gray-900/5 flex flex-col h-screen">
  <div className="p-4 overflow-auto flex-grow">
    <h1 className='font-semibold text-gray-900 text-xl'>{currentPage}</h1>
    {solutions.map((item) => (
      <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-sky-600" aria-hidden="true" />
        </div>
        <div>
          <Link to={item.href} className="font-semibold text-gray-900">
            {item.name}
            <span className="absolute inset-0" />
          </Link>
          <p className="mt-1 text-gray-600">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>


  );
};

export default Sidebar;

