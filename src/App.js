import First from './pages/First';
import Profile from './pages/Profile';
import StaffHome from './pages/StaffHome';
import Login from './pages/Login';
import Register from './pages/Register';
import Otp from './pages/Otp';
import Error from './pages/Error';
import Headers from './components/Headers';
import Headers1 from './components/Headers1';

import { Routes, Route } from "react-router-dom"
import Awards from './pages/Awards';
import StaffCsv from './pages/StaffCsv';
import StaffStudent from './pages/StaffStudent';
import StaffForeign from './pages/StaffForeign';
import StaffProject from './pages/StaffProject';
import StaffPublications from './pages/StaffPublications';
import StaffSeminar from './pages/StaffSeminar';
import StaffFaculty from './pages/StaffFaculty';
import Achievements from './pages/Achievements';
import Seminars from './pages/Seminars';
import Foreign from './pages/Foreign';
import Publications from './pages/Publications';
import Projects from './pages/Projects';
import Home from './pages/Home.js';
import AchievementEdit from './pages/AchievementEdit.js';
import ForeignEdit from './pages/ForeignEdit.js';
import PublicationsEdit from './pages/PublicationEdit';
import ProjectEdit from './pages/ProjectsEdit';
import SeminarEdit from './pages/SeminarEdit.js';
import Addmore from './pages/Addmore.js';
import FtyProfile from './pages/FtyProfile';
import FtyAwards from './pages/FtyAwards';
import FtyApprove from './pages/FtyApprove';
import FtyAchievements from './pages/FtyAchievements';
import FtySeminars from './pages/FtySeminars';
import FtyForeign from './pages/FtyForeign';
import FtyPublications from './pages/FtyPublications';
import FtyProjects from './pages/FtyProjects';
import FtyAwardsEdit from './pages/FtyAwardsEdit';
import FtyAchievementsEdit from './pages/FtyAchievementsEdit';
import FtySeminarsEdit from './pages/FtySeminarsEdit';
import FtyForeignEdit from './pages/FtyForeignEdit';
import FtyPublicationsEdit from './pages/FtyPublicationsEdit';
import FtyProjectsEdit from './pages/FtyProjectsEdit';
import AchievementAdd from './pages/AchievementAdd.js';
import ForeignAdd from './pages/ForeignAdd.js';
import ProjectAdd from './pages/ProjectAdd.js';
import PublicationAdd from './pages/PublicationAdd.js';
import SeminarAdd from './pages/SeminarAdd.js';
import FtyAwardAdd from './pages/FtyAwardAdd.js';
import FtyAchievementAdd from './pages/FtyAchievementAdd.js';
import FtyPublicationAdd from './pages/FtyPublicationAdd.js';
import FtyProjectAdd from './pages/FtyProjectAdd.js';
import FtySeminarAdd from './pages/FtySeminarAdd.js';
import FtyForeignAdd from './pages/FtyForeignAdd.js';
import StaffReminder from './pages/StaffReminder';
import Admin from './pages/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path='/' element={<First />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/StaffHome' element={<StaffHome />} />
        <Route path='/Profile/Awards/Home.js/:id' element={<Home />} />
        <Route path='/Profile/Achievements/AchievementEdit.js/:id' element={<AchievementEdit />} />
        <Route path='/user/otp' element={<Otp />} />
        <Route path='/Profile/Achievements' element={<Achievements />} />
        <Route path='/Profile/Seminars' element={<Seminars />} />
        <Route path='/Profile/Awards' element={<Awards />} />
        
        <Route path='/StaffHome/StaffCsv' element={<StaffCsv />} />
        <Route path='/StaffHome/StaffStudent' element={<StaffStudent />} />
        <Route path='/StaffHome/StaffFaculty' element={<StaffFaculty />} />
        <Route path='/StaffHome/StaffProject' element={<StaffProject />} />
        <Route path='/StaffHome/StaffForeign' element={<StaffForeign />} />
        <Route path='/StaffHome/StaffPublications' element={<StaffPublications />} />
        <Route path='/StaffHome/StaffSeminar' element={<StaffSeminar />} />
        <Route path='/StaffHome/StaffReminder' element={<StaffReminder />} />


        <Route path='/StaffHome/StaffStudent/Addmore.js' element={<Addmore />} />
        <Route path='/StaffHome/StaffStudent/FtyAwardAdd.js' element={<FtyAwardAdd/>}/>
        <Route path='/StaffHome/StaffStudent/Home.js/:id' element={<Home />} />
        <Route path='/StaffHome/StaffStudent/FtyAwardsEdit.js/:id' element={<FtyAwardsEdit />} />

        <Route path='/StaffHome/StaffFaculty/AchievementEdit.js/:id' element={<AchievementEdit />} />
        <Route path='/StaffHome/StaffFaculty/FtyAchievementsEdit.js/:id' element={<FtyAchievementsEdit />} />
        <Route path='/StaffHome/StaffFaculty/AchievementAdd.js' element={<AchievementAdd />} />
        <Route path='/StaffHome/StaffFaculty/FtyAchievementAdd.js' element={<FtyAchievementAdd />} />

        <Route path='/StaffHome/StaffSeminar/SeminarsEdit.js/:id' element={<SeminarEdit />} />
        <Route path='/StaffHome/StaffSeminar/SeminarAdd.js' element={<SeminarAdd />} />
        <Route path='/StaffHome/StaffSeminar/FtySeminarsEdit.js/:id' element={<FtySeminarsEdit />} />
        <Route path='/StaffHome/StaffSeminar/FtySeminarAdd.js' element={<FtySeminarAdd />} />

        <Route path='/StaffHome/StaffForeign/ForeignEdit.js/:id' element={<ForeignEdit />} />
        <Route path='/StaffHome/StaffForeign/FtyForeignEdit.js/:id' element={<FtyForeignEdit />} />
        <Route path='/StaffHome/StaffForeign/ForeignAdd.js' element={<ForeignAdd />} />
        <Route path='/StaffHome/StaffForeign/FtyForeignAdd.js' element={<FtyForeignAdd />} />


        <Route path='/StaffHome/StaffPublications/PublicationsEdit.js/:id' element={<PublicationsEdit />} />
        <Route path='/StaffHome/StaffPublications/FtyPublicationsEdit.js/:id' element={<FtyPublicationsEdit />} />
        <Route path='/StaffHome/StaffPublications/PublicationAdd.js' element={<PublicationAdd />} />
        <Route path='/StaffHome/StaffPublications/FtyPublicationAdd.js' element={<FtyPublicationAdd />} />



        <Route path='/StaffHome/StaffProject/ProjectsEdit.js/:id' element={<ProjectEdit />} />
        <Route path='/StaffHome/StaffProject/FtyProjectsEdit.js/:id' element={<FtyProjectsEdit />} />
        <Route path='/StaffHome/StaffProject/ProjectAdd.js' element={<ProjectAdd />} />
        <Route path='/StaffHome/StaffProject/FtyProjectAdd.js' element={<FtyProjectAdd />} />

        <Route path='/Profile/Project' element={<Projects />} />
        <Route path='/Profile/Foreign' element={<Foreign />} />
        <Route path='/Profile/Publications' element={<Publications />} />
        <Route path='/Profile/Awards/Addmore.js' element={<Addmore />} />
        <Route path='/Profile/Publications/PublicationsEdit.js/:id' element={<PublicationsEdit />} />
        <Route path='/Profile/Foreign/ForeignEdit.js/:id' element={<ForeignEdit />} />
        <Route path='/Profile/Seminars/SeminarsEdit.js/:id' element={<SeminarEdit />} />
        <Route path='/Profile/Project/ProjectsEdit.js/:id' element={<ProjectEdit />} />

        <Route path='/faculty/Profile' element={<FtyProfile />} />
        <Route path='/faculty/Awards' element={<FtyAwards />} />
        <Route path='/faculty/Approve' element={<FtyApprove />} />
        <Route path='/faculty/Achievements' element={<FtyAchievements />} />
        <Route path='/faculty/Seminars' element={<FtySeminars />} />
        <Route path='/faculty/foreign' element={<FtyForeign />} />
        <Route path='/faculty/Publications' element={<FtyPublications />} />
        <Route path='/faculty/Projects' element={<FtyProjects />} />
        <Route path='/faculty/Awards/FtyAwardsEdit.js/:id' element={<FtyAwardsEdit />} />
        <Route path='/faculty/Achievements/FtyAchievementsEdit.js/:id' element={<FtyAchievementsEdit />} />
        <Route path='/faculty/Seminars/FtySeminarsEdit.js/:id' element={<FtySeminarsEdit />} />
        <Route path='/faculty/foreign/FtyForeignEdit.js/:id' element={<FtyForeignEdit />} />
        <Route path='/faculty/Publications/FtyPublicationsEdit.js/:id' element={<FtyPublicationsEdit />} />
        <Route path='/faculty/Projects/FtyProjectsEdit.js/:id' element={<FtyProjectsEdit />} />


        <Route path='/Profile/Achievements/AchievementAdd.js' element={<AchievementAdd />} />
        <Route path='/Profile/Seminars/SeminarAdd.js' element={<SeminarAdd />} />
        <Route path='/Profile/Project/ProjectAdd.js' element={<ProjectAdd />} />
        <Route path='/Profile/Foreign/ForeignAdd.js' element={<ForeignAdd />} />
        <Route path='/Profile/Publications/PublicationAdd.js' element={<PublicationAdd />} />


        <Route path='/faculty/Awards/FtyAwardAdd.js' element={<FtyAwardAdd />} />
        <Route path='/faculty/Achievements/FtyAchievementAdd.js' element={<FtyAchievementAdd />} />
        <Route path='/faculty/Seminars/FtySeminarAdd.js' element={<FtySeminarAdd />} />
        <Route path='/faculty/foreign/FtyForeignAdd.js' element={<FtyForeignAdd />} />
        <Route path='/faculty/Publications/FtyPublicationAdd.js' element={<FtyPublicationAdd />} />
        <Route path='/faculty/Projects/FtyProjectAdd.js' element={<FtyProjectAdd />} />

        <Route path='/Admin' element={<Admin/>}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
