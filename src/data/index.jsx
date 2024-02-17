import { IoLogoJavascript, IoLogoPython } from 'react-icons/io5'
import { FaJava, FaCss3Alt } from "react-icons/fa6"
import { SiArduino, SiRuby, SiPhp, SiCplusplus, SiTensorflow, SiRubyonrails, SiTailwindcss, SiCss3 } from "react-icons/si"
import { BiLogoReact, BiLogoSpringBoot } from "react-icons/bi"
import { IoLogoAngular } from "react-icons/io"
import { TbBrandDjango } from "react-icons/tb"

import {
  uosLogo,
  com1001,
  com1002,
  com1003,
  com1005,
  com1006,
  com1008,
  com1009,

  com2004,
  com2008,
  com2009,
  com2107,
  com2108,
  com2109,
  com3420,

  com3001,
  com3110,
  com3240,
  com3502,
  com3504,
  com3505,
  com3524,
  com3610
} from '../assets'

export const translatedLanguages = ["en", "cn"]

export const navLinks = [
  {
    id: "about",
    title: {"en": "About", "cn": "个人情况"},
  },
  {
    id: "skills",
    title: {"en": "Skills", "cn": "技能专长"},
  },
  {
    id: "projects",
    title: {"en": "Projects", "cn": "项目经验"},
  },
  {
    id: "contacts",
    title: {"en": "Contacts", "cn": "联系方式"},
  },
]

export const languages = [
  {
    "name": {"en": "English", "cn": "英语"}, 
    "proficiency": {"en": "Native", "cn": "母语", "quantification": 80}
  },
  {
    "name": {"en": "Mandarin", "cn": "普通话"}, 
    "proficiency": {"en": "Heritage", "cn": "传承语", "quantification": 50}
  },
  {
    "name": {"en": "Taishanese", "cn": "台山话"}, 
    "proficiency": {"en": "Heritage", "cn": "传承语", "quantification": 30}
  },
  {
    "name": {"en": "Cantonese", "cn": "粤语"}, 
    "proficiency": {"en": "Heritage", "cn": "传承语", "quantification": 20}
  },
  {
    "name": {"en": "Japanese", "cn": "日语"}, 
    "proficiency": {"en": "Beginner", "cn": "初学者", "quantification": 10}
  },
  {
    "name": {"en": "French", "cn": "法语"}, 
    "proficiency": {"en": "Beginner", "cn": "初学者", "quantification": 10}
  },
]

export const programmingLanguages = [
  {
    "name": "Python", 
    "proficiency": {"en": "Proficient", "cn": "熟练", "quantification": 60}, 
    "icon": (classNames) => (<IoLogoPython className={classNames} />), 
    "experience": ["Django", "TensorFlow", "Beautiful Soup", "PyQt", "ROS"]
  },
  {
    "name": "Java", 
    "proficiency": {"en": "Proficient", "cn": "熟练", "quantification": 60}, 
    "icon": (classNames) => (<FaJava className={classNames} />), 
    "experience": ["Spring", "JSoup"]
  },
  {
    "name": "JavaScript", 
    "proficiency": {"en": "Proficient", "cn": "熟练", "quantification": 60}, 
    "icon": (classNames) => (<IoLogoJavascript className={classNames} />), 
    "experience": ["HTML", "CSS", "Bootstrap", "Node.js", "TypeScript", "Angular", "React", "Tailwind CSS", "Postman"]
  },
  {
    "name": "Ruby", 
    "proficiency": {"en": "Experienced", "cn": "熟悉", "quantification": 40}, 
    "icon": (classNames) => (<SiRuby className={classNames} />), 
    "experience": ["Ruby On Rails"]
  },
  {
    "name": "PHP", 
    "proficiency": {"en": "Experienced", "cn": "熟悉", "quantification": 40}, 
    "icon": (classNames) => (<SiPhp className={classNames} />), 
    "experience": []
  },
  {
    "name": "C++", 
    "proficiency": {"en": "Beginner", "cn": "初学者", "quantification": 10}, 
    "icon": (classNames) => (<SiCplusplus className={classNames} />), 
    "experience": ["Arduino"]
  },
]

export const technologies = [
  {
    "name": "React", 
    "icon": (classNames) => (<BiLogoReact className={classNames} />), 
  },
  {
    "name": "Angular", 
    "icon": (classNames) => (<IoLogoAngular className={classNames} />), 
  },
  {
    "name": "CSS", 
    "icon": (classNames) => (<FaCss3Alt className={classNames} />), 
  },
  {
    "name": "Tailwind CSS", 
    "icon": (classNames) => (<SiTailwindcss className={classNames} />), 
  },
  {
    "name": "Spring", 
    "icon": (classNames) => (<BiLogoSpringBoot className={classNames} />), 
  },
  {
    "name": "Django", 
    "icon": (classNames) => (<TbBrandDjango className={classNames} />), 
  },
  {
    "name": "TensorFlow", 
    "icon": (classNames) => (<SiTensorflow className={classNames} />), 
  },
  {
    "name": "Ruby On Rails", 
    "icon": (classNames) => (<SiRubyonrails className={classNames} />), 
  },
  {
    "name": "Arduino", 
    "icon": (classNames) => (<SiArduino className={classNames} />), 
  },
]

export const projects = [
  {
    "name": {"en": "Language Exchange Platform", "cn": "语言交换程序"}, 
    "description": {
      "en": "A personal full-stack project where I self-taught and utilized the Angular framework for frontend, with the help of Bootstrap for presentation. The front end requests services from a REST API backend developed with Spring Boot. Also gained experiences with using Postman for testing backend service responses and using JSoup for web scraping language data.", 
      "cn": "一个个人全栈项目，我自学并使用 Angular 框架开发前端，演示使用 Bootstrap。前端从使用 Spring Boot 开发的 REST API 后端请求服务。此外，我还获得了使用 Postman 测试后端服务响应和使用 JSoup 进行网络语言数据搜刮的经验。"
    },
    "inProgress": true,
    "isAcademic": false,
    "links": ["https://github.com/jwu02/language-exchange-angular-frontend", "https://github.com/jwu02/language-exchange-springboot-backend"]
  },
  {
    "name": {"en": "Portfolio Website", "cn": "个人网站"}, 
    "description": {
      "en": "A personal website built with the React framework, made use of Tailwind CSS for inline component styling and Ant Design components for better presentation of data.", 
      "cn": "一个使用 React 框架构建的个人网站，使用 Tailwind CSS 进行内联组件样式设计，并使用 Ant Design UI 来更好地展示数据。"
    },
    "inProgress": false,
    "isAcademic": false,
    "links": ["https://github.com/jwu02/jwu02.github.io"]
  },
  {
    "name": {"en": "Named Entity Recognition (NER) System", "cn": "命名实体识别（NER）系统"}, 
    "description": {
      "en": "Developed from scratch as part of my dissertation project. The Multinomial Logistic Regression (MLR) algorithm was chosen for the implementation, with the help of NumPy for matrix calculations and Pandas for data sanitization and manipulation. The trained and finetuned model achieved results very close to what was capable of existing systems.", 
      "cn": "作为我的毕业论文项目的一部分，从零开始开发。在 NumPy 进行矩阵计算和使用 Pandas 进行数据处理和操作的帮助下，我选择了多项式逻辑回归 (MLR) 算法来实施该系统。经过训练和微调的模型取得了与现有系统非常接近的结果。"
    },
    "inProgress": false,
    "isAcademic": true,
    "links": []
  },
  {
    "name": {"en": "ESP32 Robot Car", "cn": "ESP32 机器人车"}, 
    "description": {
      "en": "Assembled and developed a remote-controlled robot car (via a WAP and served page) using C/C++, on an ESP32 development board (similar to an Arduino). Also installed an ultrasonic sensor for object detection and avoidance whilst the robot is exploring its environment.", 
      "cn": "使用 C/C++ 在 ESP32 开发板（类似于 Arduino）上组装和开发遥控机器人汽车（通过 WAP 和服务页面）。还安装了一个超声波传感器，用于在机器人探索环境时探测和避开物体。"
    },
    "inProgress": false,
    "isAcademic": true,
    "links": ["https://github.com/jwu02/com3505-robocar"]
  },
  {
    "name": {"en": "Robotics", "cn": "机器人学"}, 
    "description": {
      "en": "Programmed a small robot dog with Python ROS, in both a simulation and the actual hardware, navigating closed environments whilst completing tasks such as maze completion, obstacle avoidance, and beaconing (finding and moving towards a target).", 
      "cn": "在模拟和实际硬件中使用 Python ROS 对小型机器狗进行编程，使其能够在封闭的环境中航行，同时完成迷宫迷、避障和信标（寻找并向目标移动）等任务。"
    },
    "inProgress": false,
    "isAcademic": true,
    "links": ["https://github.com/jwu02/com2009-robotics-team-1"]
  },
  {
    "name": {"en": "Property Booking Desktop App", "cn": "物业预订桌面应用程序"}, 
    "description": {
      "en": "Developed as part of a group project, emulating a real-world agile software development process. Utilized UML for a formal requirements analysis and system design process. The application was developed following the MVC architecture, with Java as frontend and backend, linking to MySQL database.", 
      "cn": "作为小组项目的一部分进行开发，模拟现实世界中的敏捷软件开发过程。利用 UML 进行正式的需求分析和系统设计过程。应用程序采用 MVC 架构开发，前台和后台均为 Java，并与 MySQL 数据库相连。"
    },
    "inProgress": false,
    "isAcademic": true,
    "links": ["https://github.com/jwu02/com2008-homebreak-plc"]
  },
  {
    "name": {"en": "Chess Piece Image Classification System", "cn": "国际象棋棋子图像分类系统"}, 
    "description": {
      "en": "Developed as part of a machine learning course which involved learning various classification techniques, including both supervised and unsupervised. I implemented the system with both the Naive Bayes and k-nearest neighbor algorithms.", 
      "cn": "作为机器学习修选课的一部分开发，该修选课涉及学习各种分类技术，包括监督和非监督技术。我使用朴素贝叶斯算法和 k近邻算法实施了该系统。"
    },
    "inProgress": false,
    "isAcademic": true,
    "links": ["https://github.com/jwu02/com2004-chess-board-classification"]
  }
]

export const educations = [
  {
    "institution": {"en": "University of Sheffield", "cn": "谢菲尔德大学"},
    "logo": uosLogo,
    "degreeTitle": {"en": "BSc Computer Science", "cn": "计算机科学（本科）"},
    "degreeClassification": {
      "en": "2:1 (Class Two Division One Honours)", 
      "cn": "二等一（相当于中国的78-84）"
    },
    "startDate": "2020.09",
    "endDate": "2023.07",
    "modulesStudied": [
      [
        {
          "code": "com1001",
          "name": {"en": "Introduction to Software Engineering", "cn": "软件工程概论"}, 
          "description": {
            "en": "Involved a group project emulating an agile development process. Developed a student-mentor matching website with Ruby as the backend, using the Sinatra gem. The application is intended for students to learn about the industry they are interested in, that which the mentor is a part of.", 
            "cn": "参与模仿敏捷开发流程的小组项目。使用 Sinatra gem 开发了一个以 Ruby 为后台的学生与导师匹配网站。该应用程序旨在让学生了解他们感兴趣的行业以及导师所在的行业。"
          },
          "links": [],
          "starred": true,
          "image": com1001
        },
        {
          "code": "com1002",
          "name": {"en": "Foundations of Computer Science", "cn": "计算机科学基础"}, 
          "description": {
            "en": "A discrete maths course on logic and linear algebra.", 
            "cn": "逻辑和线性代数数学课程。"
          },
          "links": [],
          "starred": false,
          "image": com1002
        },
        {
          "code": "com1003",
          "name": {"en": "Java Programming", "cn": "Java 编程"}, 
          "description": {
            "en": "Built a good understanding of the Object-Oriented Programming paradigm and the Java language.", 
            "cn": "熟练掌握面向对象编程范例和 Java 语言。"
          },
          "links": [],
          "starred": true,
          "image": com1003
        },
        {
          "code": "com1005",
          "name": {"en": "Machines and Intelligence", "cn": "机器与智能"}, 
          "description": {
            "en": "Went on a deep dive into the history and philosophies of robotics. Then went on to learn various search algorithms like breadth/depth-first search, and the A* Algorithm. Involved a project implementing the depth and A* algorithms for pathfinding with an abstract overview of a map.", 
            "cn": "深入了解机器人技术的历史和理念。然后继续学习各种搜索算法，如广度/深度优先搜索和 A* 算法。涉及一个项目，通过对地图的抽象概述来实现深度和 A* 算法的寻路。"
          },
          "links": ["https://github.com/jwu02/com1005-ramblers-problem"],
          "starred": true,
          "image": com1005
        },
        {
          "code": "com1006",
          "name": {"en": "Devices and Networks", "cn": "设备和网络"}, 
          "description": {
            "en": "Involved learning digital logic, computer arithmetic, internet protocols, and data transmission over the internet.", 
            "cn": "涉及学习数字逻辑、计算机运算、互联网协议和互联网数据传输。"
          },
          "links": [],
          "starred": false,
          "image": com1006
        },
        {
          "code": "com1008",
          "name": {"en": "Web and Internet Technology", "cn": "网络和互联网技术"}, 
          "description": {
            "en": "(Re)Learned the fundamentals of HTML, CSS, and JavaScript, and built a personal-portfolio website (not this one) as an assignment.", 
            "cn": "(重新）学了 HTML、CSS 和 JavaScript 的基础知识，并作为一项作业建立了一个个人作品集网站（不是这个）。"
          },
          "links": [],
          "starred": false,
          "image": com1008
        },
        {
          "code": "com1009",
          "name": {"en": "Introduction to Algorithms and Data Structures", "cn": "算法与数据结构导论"}, 
          "description": {
            "en": "Learned fundamental data structures in Computer Science, as well as algorithm design and complexity analysis.", 
            "cn": "学习计算机科学的基本数据结构，以及算法设计和复杂性分析。"
          },
          "links": [],
          "starred": false,
          "image": com1009
        },
        {
          "code": "fce1001",
          "name": {"en": "Global Engineering Challenge Week", "cn": "全球工程挑战周"}, 
          "description": {
            "en": "Worked with students from other engineering disciplines, to tackle a real-world problem in an underdeveloped region. The proposal heavily involves the local community for gathering the plastic, that is then fed through a plastic extruder. The recycled plastic can then be used for 3D printing various things, to give back to the locals.", 
            "cn": "与其他工程学科的学生合作，解决欠发达地区的实际问题。该提案在很大程度上让当地社区参与收集塑料，然后将塑料送入塑料挤出机。回收的塑料可用于 3D 打印各种物品，回馈当地人。"
          },
          "links": [],
          "starred": true,
          "image": com1009
        }
      ],
      [
        {
          "code": "com2109",
          "name": {"en": "Automata, Computation and Complexity", "cn": "自动机、计算和复杂性"}, 
          "description": {
            "en": "Algorithms on steroids.", 
            "cn": "先进算法课程。"
          },
          "links": [],
          "starred": false,
          "image": com2109
        },
        {
          "code": "com2004",
          "name": {"en": "Data Driven Computing", "cn": "数据驱动计算"}, 
          "description": {
            "en": "A machine learning course which involved learning various classification techniques, including both supervised (Naive Bayes, k-nearest neighbor, deep learning) and unsupervised (clustering). Developed a chess piece image classification system implementing both the Naive Bayes and k-nearest neighbour algorithms.", 
            "cn": "机器学习课程，涉及学习各种分类技术，包括监督式（朴素贝叶斯、k近邻、深度学习）和无监督式（聚类）分类技术。开发了一个国际象棋棋子图像分类系统，采用了朴素贝叶斯算法和 k近邻算法。"
          },
          "links": ["https://github.com/jwu02/com2004-chess-board-classification"],
          "starred": true,
          "image": com2004
        },
        {
          "code": "com2008",
          "name": {"en": "Systems Design and Security", "cn": "系统设计与安全"}, 
          "description": {
            "en": "Involved a group project emulating a real-world agile software development process, with formal requirements analysis and system design process, utilizing UML diagrams. Developed a property booking desktop app following the MVC architecture, with Java as frontend and backend, linking to MySQL database.", 
            "cn": "参与一个小组项目，模拟真实世界的敏捷软件开发流程，利用 UML 图表进行正式的需求分析和系统设计流程。按照 MVC 架构开发了一个物业预订桌面应用程序，使用 Java 作为前端和后端，并与 MySQL 数据库相连。"
          },
          "links": ["https://github.com/jwu02/com2008-homebreak-plc"],
          "starred": true,
          "image": com2008
        },
        {
          "code": "com2108",
          "name": {"en": "Functional Programming", "cn": "函数式编程"}, 
          "description": {
            "en": "Learned the fundamentals of Haskell. Involved an assignment to program and solve a solitaire game with the language.", 
            "cn": "学了 Haskell 的基础知识。课程包括一项使用该语言编程并解决接龙游戏的作业。"
          },
          "links": [],
          "starred": false,
          "image": com2108
        },
        {
          "code": "com2009",
          "name": {"en": "Robotics", "cn": "机器人学"}, 
          "description": {
            "en": "Programmed a small robot dog with Python ROS, in both a simulation and the actual hardware, navigating closed environments whilst completing tasks such as maze completion, obstacle avoidance, and beaconing (finding and moving towards a target).", 
            "cn": "在模拟和实际硬件中使用 Python ROS 对小型机器狗进行编程，使其能够在封闭的环境中航行，同时完成迷宫迷、避障和信标（寻找并向目标移动）等任务。"
          },
          "links": ["https://github.com/jwu02/com2009-robotics-team-1"],
          "starred": true,
          "image": com2009
        },
        {
          "code": "com2107",
          "name": {"en": "Logic in Computer Science", "cn": "计算机科学中的逻辑"}, 
          "description": {
            "en": "Prove it.", 
            "cn": "证明一下。"
          },
          "links": [],
          "starred": false,
          "image": com2107
        },
        {
          "code": "com3420",
          "name": {"en": "Software Hut", "cn": "软件小屋"}, 
          "description": {
            "en": "Involved a group project emulating an agile development process to solve a real-world problem. Developed an extenuating circumstances system for university staff members, which aims to let students appeal to them, deadline extensions for example. The product is a website developed using Ruby on Rails for the front and back end.", 
            "cn": "涉及一个模仿敏捷开发流程的小组项目，以解决现实世界中的问题。为大学教职员工开发了一个情有可原系统，目的是让学生能够向教职员工申诉，例如延长截止日期。产品是一个使用 Ruby on Rails 进行前后端开发的网站。"
          },
          "links": [],
          "starred": true,
          "image": com3420
        },
        {
          "code": "fce2001",
          "name": {"en": "Engineering - You're Hired", "cn": "工程 - 你被录用了"}, 
          "description": {
            "en": "Involved a cross-disciplinary group project to address a real-world problem, with the theme of IoT. Came up with a proposal plan for developing a physical network of sensors for detecting floods. Also involves developing an application to warn and redirect drivers.", 
            "cn": "涉及一个以物联网为主题的跨学科小组项目，以解决现实世界中的问题。提出了一个开发物理传感器网络以检测洪水的建议计划。此外，还涉及开发一个应用程序，以警告和引导司机。"
          },
          "links": [],
          "starred": true,
          "image": null
        },
      ],
      [
        {
          "code": "com3610",
          "name": {"en": "Dissertation Project", "cn": "论文项目"}, 
          "description": {
            "en": "The title of the dissertation is Exploring Deep Learning for Named Entity Recognition (NER). Developed an NER system from scratch implementing the Multinomial Logistic Regression (MLR) algorithm. Also attempted at developing a Transformer neural network with TensorFlow/Keras (forward inference only).", 
            "cn": "论文题目是《探索深度学习在命名实体识别（NER）中的应用》。从零开始开发了一个 NER 系统，采用了多项式逻辑回归（MLR）算法。还尝试用 TensorFlow/Keras 开发了一个 Transformer 神经网络（仅前向推理）。"
          },
          "links": [],
          "starred": true,
          "image": com3610
        },
        {
          "code": "com3110",
          "name": {"en": "Text Processing", "cn": "文本处理"}, 
          "description": {
            "en": "Learned various text processing techniques. Involved two assignments: develop a document retrieval system, and a sentiment analysis system using a classifier implementing the Naive Bayes algorithm.", 
            "cn": "学习了各种文本处理技术。涉及两项任务：开发一个文档检索系统，以及使用实现 Naive Bayes 算法的分类器开发一个情感分析系统。"
          },
          "links": ["https://github.com/jwu02/com3110-information-retrieval-assignment", "https://github.com/jwu02/com3110-sentiment-anaylsis-assignment"],
          "starred": true,
          "image": com3110
        },
        {
          "code": "com3502",
          "name": {"en": "Speech Processing", "cn": "语音处理"}, 
          "description": {
            "en": "Touched upon the basics of linguistics, and the biology of human speech and hearing. Also gained some speech processing experience using filters.",
            "cn": "学习了语言学基础知识以及人类语言和听力的生物学知识。还获得了一些使用滤波器进行语音处理的经验。"
          },
          "links": [],
          "starred": false,
          "image": com3502
        },
        {
          "code": "com3524",
          "name": {"en": "Bioinspired Computing", "cn": "仿生计算"}, 
          "description": {
            "en": "Learned various modern artificial intelligence techniques and their inspiration from biological systems. Examples include evolution, multicellular tissues, neural systems, the immune system and swarms, inspiring abstractions such as evolutionary or swarm-based optimization algorithms.", 
            "cn": "学习了各种现代人工智能技术及其对生物系统的启发。例如，进化、多细胞组织、神经系统、免疫系统和蜂群，以及进化算法或基于蜂群的优化算法等抽象概念的启发。"
          },
          "links": [],
          "starred": true,
          "image": com3524
        },
        {
          "code": "com3001",
          "name": {"en": "Modelling and Simulation of Natural Systems", "cn": "自然系统建模与仿真"}, 
          "description": {
            "en": "Learning about differential equations with application to the Lotka-Volterra (aka. prey-predator) model. Involved a group assignment, researching the Lorenz System and simulating it.", 
            "cn": "学习微分方程，并将其应用于 Lotka-Volterra（又名猎物-捕食者）模型。涉及一项小组作业，研究洛伦兹系统并对其进行模拟。"
          },
          "links": [],
          "starred": true,
          "image": com3001
        },
        {
          "code": "com3240",
          "name": {"en": "Adaptive Intelligence", "cn": "自适应智能"}, 
          "description": {
            "en": "Coded a deep neural network from scratch and modified it for reinforcement learning on a simplified chess game.", 
            "cn": "从零开始编码深度神经网络，并对其进行修改，以便在简化的国际象棋游戏中进行强化学习。"
          },
          "links": ["https://github.com/jwu02/com3240-reinforcement-learning-assignment"],
          "starred": true,
          "image": com3240
        },
        {
          "code": "com3504",
          "name": {"en": "The Intelligent Web", "cn": "智能网"}, 
          "description": {
            "en": "Anything but the intelligent part. The course involved a web development group project to develop a bird sighting application. Made use of the following technologies: Socket.io for real-time client interactions (used to implement a chat functionality), Node.js for the backend, and MongoDB for data storage. (Short demo in GitHub repository)", 
            "cn": "没有包含一点智能元素。该课程涉及一个网络开发小组项目，开发一个鸟类观测应用程序。使用了以下技术： Socket.io 用于实时客户端交互（用于实现聊天功能），Node.js 用于后台，MongoDB 用于数据存储。(GitHub 代码库中有一个简短的演示）"
          },
          "links": ["https://github.com/jwu02/com3504_bird_watching"],
          "starred": true,
          "image": com3504
        },
        {
          "code": "com3505",
          "name": {"en": "The Internet of Things", "cn": "物联网"}, 
          "description": {
            "en": "An adult LEGO course. Assembled and developed a remote-controlled robot car using C/C++, on an ESP32 development board (similar to an Arduino). Also installed an ultrasonic sensor for object detection and avoidance whilst the robot is exploring its environment. (Short demo in GitHub repository)", 
            "cn": "一个成人乐高课程。组装并开发了自己的遥控机器人车，并在 ESP32 开发板（类似于 Arduino）上使用 C/C++ 进行编程。在机器人探索环境时，我还利用超声波传感器进行物体探测和避让。(GitHub 代码库中有一个简短的演示）"
          },
          "links": ["https://github.com/jwu02/com3505-robocar"],
          "starred": true,
          "image": com3505
        },
        {
          "code": "mgt388",
          "name": {"en": "Finance and Law for Engineers", "cn": "工程师的金融和法律"}, 
          "description": {
            "en": "^", 
            "cn": "^"
          },
          "links": [],
          "starred": false,
          "image": null
        }
      ]
    ]
  }
]

export const skills = [
  {
    "en": "Proficient with Python, Java and JavaScript, also familiar with TypeScript, PHP and Ruby",
    "cn": "熟练 Python、Java 和 JavaScript，也熟悉 TypeScript、PHP 和 Ruby"
  },
  {
    "en": "Experience with data processing and building deep learning models with Python packages such as Pandas, Numpy, Keras and TensorFlow",
    "cn": "具有使用 Pandas、Numpy、Keras 和 TensorFlow 等 Python 软件包进行数据处理和构建深度学习模型的经验"
  },
  {
    "en": "Also have experience with GUIs with PyQt, web scraping with BeautifulSoup and robot programming with ROS",
    "cn": "此外，还拥有使用 PyQt 制作图形用户界面、使用 BeautifulSoup 进行网络搜刮以及使用 ROS 进行机器人编程的经验"
  },
  {
    "en": "Experience with web development frameworks such as Angular, React, Django, RubyOnRails, and Spring Boot",
    "cn": "具有使用 Angular、React、Django、RubyOnRails 和 Spring Boot 等网页开发框架的经验"
  },
  // {
  //   "en": "Experience with database technologies such as MySQL and MongoDB",
  //   "cn": "具有使用 MySQL 和 MongoDB 等数据库技术的经验"
  // },
]

export const achievements = [
  {
    "year": "2017",
    "en": "Received an award for my continuous effort and willingness to help with producing videos for various events in school. Includes help promoting the work of a charity, aimed towards providing a better educational environment for children in Nepal",
    "cn": "因很乐意地持续奉献自己的劳力来帮助制作学校各种活动的视频而获奖。包括帮助宣传一家慈善机构的工作，该慈善机构的目标是在为尼泊尔儿童提供更好的教育环境"
  },
  {
    "year": "2018",
    "en": "Awarded for participation in the NCS (National Citizenship Service) program which involved two weeks of volunteering at a care home",
    "cn": "因参加 NCS（National Citizenship Service 国家公民服务）计划而获奖，该计划包括在一家护理院进行为期两周的志愿服务"
  },
  {
    "year": "2019",
    "en": "Received my UK manual driving license",
    "cn": "获得了我的英国手动驾驶证"
  },
  {
    "year": "2023",
    "en": "Received my Chinese manual driving license",
    "cn": "获得了我的中国手动驾驶证（转证只需考科目一）"
  }
]

export const selfEvaluations = [
  {
    "en": "I am a responsible individual equipped with strong learning skills. Through my dissertation, I have developed strong research skills, as well as confidence in my ability to deliver.",
    "cn": "我是一个责任感很强的人，具着强劲的学习能力。通过毕业论文，我掌握了扎实的研究技能，并对自己取得成果的能力充满信心。"
  },
  {
    "en": "After overcoming the many challenges and struggles of university, I have developed strong perseverance and self-motivation. Staying optimistic is key in the face of hardship.",
    "cn": "在克服了大学生活中的诸多挑战和困难之后，我培养了坚强的毅力和自我激励的能力。面对困难，保持乐观是关键。"
  },
  {
    "en": "I have good team working skills and am aware of the various management techniques and workflows, for effective collaboration with other software developers.",
    "cn": "我拥有良好的团队工作技能，也了解各种管理技术和工作流程，以便与其他软件开发人员一起有效地合作。"
  },
  {
    "en": "I am proactive and am always motivated to learn new things, to self-improve and expand my skill sets. This is an important trait to have in the ever-changing, fast-paced field of technology, where there is a constant need to keep up.",
    "cn": "我积极主动，总是主动学习新知识，自我完善并扩展技能组合。在这个瞬息万变、快节奏的技术领域，这是一个非常重要的特质。"
  }
]
