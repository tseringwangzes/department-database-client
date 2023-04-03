import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFileCsv } from '@fortawesome/free-solid-svg-icons'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import TourIcon from '@mui/icons-material/Tour';
import ImportContactsSharpIcon from '@mui/icons-material/ImportContactsSharp';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import StarsIcon from '@mui/icons-material/Stars';




export const SidebarData = [
    {
        title:"Home",
        icon:<FontAwesomeIcon icon={faHome} />,
        link:"/StaffHome"
    },
    {
        title:"Awards",
        icon:<EmojiEventsIcon />,
        link:"/StaffHome/StaffStudent"
    },
    {
        title:"Achievements",
        icon:<StarsIcon />,
        link:"/StaffHome/StaffFaculty"
    },
    {
        title:"Workshops/Seminar Organised",
        icon:<PeopleIcon />,
        link:"/StaffHome/StaffSeminar"
    },
    {
        title:"Foreign Visits",
        icon:<TourIcon />,
        link:"/StaffHome/StaffForeign"
    },
    {
        title:"Publications/Patents",
        icon:<ImportContactsSharpIcon />,
        link:"/StaffHome/StaffPublications"
    },
    {
        title:"Project Grants",
        icon:<CurrencyExchangeSharpIcon />,
        link:"/StaffHome/StaffProject"
    },
    {
        title:"Upload CSV Data",
        icon:<FontAwesomeIcon icon={faFileCsv} />,
        link:"/StaffHome/StaffCsv"
    },
    {
        title:"Send Reminders",
        icon:<FontAwesomeIcon icon={faEnvelope} />,
        link:"/StaffHome/StaffReminder"
    }
]