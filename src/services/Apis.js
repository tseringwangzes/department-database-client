import { commonrequest } from "./ApiCall";
import {BACKEND_URL} from "./helper";


export const registerfunction = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/register`,data)
}

export const sentOtpFunction = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/sendotp`,data)
}

export const userVerify = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/login`,data)
}

export const usergetfunc = async()=>{
    return await commonrequest("GET",`${BACKEND_URL}/user/details`,"");
}
export const userfunc = async(data)=>{
    return await commonrequest("GET",`${BACKEND_URL}/user/getall`,data);
}
export const st_ach = async()=>{
    return await commonrequest("GET",`${BACKEND_URL}/user/stachievem`,"");
}
export const st_semi = async()=>{
    return await commonrequest("GET",`${BACKEND_URL}/user/stsemi`,"");
}

export const st_publi = async()=>{
    return await commonrequest("GET",`${BACKEND_URL}/user/stpubli`,"");
}

export const stforvisits = async()=>{
    return await commonrequest("GET",`${BACKEND_URL}/user/stforvisits`,"");
}
export const stproj = async()=>{
    return await commonrequest("GET",`${BACKEND_URL}/user/stproj`,"");
}

export const st_award_csv = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/insert_csv`,data)
}

export const addmorefunction = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/adddata`,data)
}

export const ft_awards = async()=>{
    return await commonrequest("GET",`${BACKEND_URL}/user/faculty/awards`,);
}

export const ft_achievements = async()=>{
    return await commonrequest("GET",`${BACKEND_URL}/user/faculty/achievements`,"");
}

export const ft_seminars = async()=>{
    return await commonrequest("GET",`${BACKEND_URL}/user/faculty/seminars`,"");
}

export const ft_foreign = async()=>{
    return await commonrequest("GET",`${BACKEND_URL}/user/faculty/foreign`,"");
}

export const ft_publications = async()=>{
    return await commonrequest("GET",`${BACKEND_URL}/user/faculty/publications`,"");
}

export const ft_projects = async()=>{
    return await commonrequest("GET",`${BACKEND_URL}/user/faculty/projects`,"");
}

export const FtyAddAwards = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/faculty/addawards`,data)
}

export const achievementEdit = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/editachievements`,data)
}

export const foreignEdit = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/editforeign`,data)
}

export const seminarEdit = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/editseminar`,data)
}

export const publicationEdit = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/editpublication`,data)
}

export const projectEdit = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/editproject`,data)
}

export const FtyEditAchievements = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/faculty/editachievements`,data)
}

export const FtyEditSeminars = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/faculty/editseminars`,data)
}

export const FtyEditForeign = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/faculty/editforeign`,data)
}

export const FtyEditPublications = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/faculty/editpublication`,data)
}

export const FtyEditProjects = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/faculty/editproject`,data)
}

export const send_reminder = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/st_reminder`,data)
}