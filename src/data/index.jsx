import { IoLogoJavascript, IoLogoPython } from 'react-icons/io5';
import { FaJava, FaCss3Alt } from "react-icons/fa6";
import { SiArduino, SiRuby, SiPhp, SiCplusplus, SiTensorflow, SiRubyonrails, SiTailwindcss } from "react-icons/si";
import { BiLogoReact, BiLogoSpringBoot } from "react-icons/bi";
import { IoLogoAngular } from "react-icons/io";
import { TbBrandDjango } from "react-icons/tb";
import { uosLogo } from "../assets";

export const educationLogos = {
  "uos": uosLogo
}

export const languages = [
  {
    "name": "english", 
    "proficiency": {"text": "native", "quantification": 85}
  },
  {
    "name": "mandarin", 
    "proficiency": {"text": "heritage", "quantification": 60}
  },
  // {
  //   "name": "taishanese", 
  //   "proficiency": {"text": "heritage", "quantification": 50}
  // },
  {
    "name": "cantonese", 
    "proficiency": {"text": "heritage", "quantification": 40}
  },
  {
    "name": "japanese", 
    "proficiency": {"text": "intermediate", "quantification": 20}
  },
  {
    "name": "french", 
    "proficiency": {"text": "intermediate", "quantification": 20}
  },
]

export const programmingLanguages = [
  {
    "name": "Python", "icon": IoLogoPython, 
    "proficiency": {"text": "proficient", "quantification": 80}, 
    "experience": ["Django", "TensorFlow", "Beautiful Soup", "PyQt", "ROS"]
  },
  {
    "name": "Java", "icon": FaJava, 
    "proficiency": {"text": "proficient", "quantification": 60}, 
    "experience": ["Spring", "JSoup"]
  },
  {
    "name": "JavaScript", "icon": IoLogoJavascript, 
    "proficiency": {"text": "proficient", "quantification": 60}, 
    "experience": ["HTML", "CSS", "Bootstrap", "Node.js", "TypeScript", "Angular", "React", "Tailwind CSS", "Postman"]
  },
  {
    "name": "Ruby", "icon": SiRuby, 
    "proficiency": {"text": "experienced", "quantification": 40}, 
    "experience": ["Ruby On Rails"]
  },
  {
    "name": "PHP", "icon": SiPhp, 
    "proficiency": {"text": "experienced", "quantification": 40}, 
    "experience": []
  },
  {
    "name": "C++", "icon": SiCplusplus, 
    "proficiency": {"text": "beginner", "quantification": 10}, 
    "experience": ["Arduino"]
  }
]

export const technologies = [
  {"name": "React", "icon": BiLogoReact},
  {"name": "Angular", "icon": IoLogoAngular},
  {"name": "CSS", "icon": FaCss3Alt},
  {"name": "Tailwind CSS", "icon": SiTailwindcss},
  {"name": "Spring", "icon": BiLogoSpringBoot},
  {"name": "Django", "icon": TbBrandDjango},
  {"name": "TensorFlow", "icon": SiTensorflow},
  {"name": "Ruby On Rails", "icon": SiRubyonrails},
  {"name": "Arduino", "icon": SiArduino}
]
