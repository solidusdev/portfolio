import React from "react";
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from "@material-ui/icons/School";

export const experience = [
    {
        timeline_position: "right",
        timeline_date: "10/18 - Current",
        timeline_icon: <WorkIcon />,
        img_logo_src: require("../images/logos/newhouse.png"),
        img_logo_alt: "logo",
        img_max_width: "200px",
        title: "Front End Developer",
        description: "Experienced in creating dynamic, modular, and responsive web applications using frameworks such as ReactJS and Bootstrap. Experienced in translating wireframes to fully functional pixel-perfect code. Experienced with customizing Shopify themes using Git and GitHub."
    },
    {
        timeline_position: "left",
        timeline_date: "07/18 - 10/18",
        timeline_icon: <WorkIcon />,
        img_logo_src: require("../images/logos/colotek.png"),
        img_logo_alt: "logo",
        img_max_width: "200px",
        title: "UX/UI Designer",
        description: "Experienced in creating prototypes & wireframes with Adobe XD and Sketch. Participated in UI design reviews and worked with developers to bring wireframes to life."
    },
    {
        timeline_position: "right",
        timeline_date: "05/17 - 01/18",
        timeline_icon: <WorkIcon />,
        img_logo_src: require("../images/logos/carr.jpg"),
        img_logo_alt: "logo",
        img_max_width: "180px",
        title: "Parts Runner",
        description: "Delivered hardware to Technicians and Clients around Manhattan. Assisted Technicians with replacing machine parts."
    },
    {
        timeline_position: "left",
        timeline_date: "06/16 - 07/16",
        timeline_icon: <WorkIcon />,
        img_logo_src: require("../images/logos/google.png"),
        img_logo_alt: "logo",
        img_max_width: "170px",
        title: "Android Development Bootcamp",
        description: "Developed Android apps using Java and Android Studio. Participated in pair programming and code reviews."
    },
    {
        timeline_position: "right",
        timeline_date: "08/12 - 12/16",
        timeline_icon: <SchoolIcon />,
        img_logo_src: require("../images/logos/cuny.png"),
        img_logo_alt: "logo",
        img_max_width: "170px",
        title: "Bachelor of Science",
        description: <span>Computer Science (Accredited)<br />Associate Applied Science 2014<br/>2014 – 2015 Dean’s List<br />GPA: 3.36</span>
    }
];