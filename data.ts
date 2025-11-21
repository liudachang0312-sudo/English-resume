import { ResumeData } from './types';

export const INITIAL_DATA: ResumeData = {
  name: {
    zh: "刘大昌",
    en: "Liu Chang"
  },
  title: {
    zh: "工艺开发 / 设备导入 / 综合解决方案专家",
    en: "Process Development / Equipment NPI / Integrated Solution Expert"
  },
  contact: {
    phone: "151-1008-6435",
    email: "751633032@qq.com",
    location: {
      zh: "河北廊坊 (北京户口)",
      en: "Langfang, Hebei (Beijing Hukou)"
    },
    birthDate: "1989.03",
    politicalStatus: {
      zh: "中共党员",
      en: "CPC Member"
    }
  },
  summary: {
    zh: "敏而好学，积极工作，善于沟通，有一定组织协调能力，具有高度工作热情和责任感。8项专利，英语口语可作为工作语言。",
    en: "Diligent, proactive, and communicative with strong organizational and coordination skills. Highly enthusiastic and responsible. Holder of 8 patents, proficient in professional English."
  },
  skills: [
    { zh: "Solidworks, Inventor, CAD", en: "Solidworks, Inventor, CAD" },
    { zh: "Ansys, CFX, Tol Analyst", en: "Ansys, CFX, Tol Analyst" },
    { zh: "Composer 工艺动画", en: "Composer Process Animation" },
    { zh: "DFM 流程 & 规划", en: "DFM Process & Planning" },
    { zh: "锂电池工艺 (模组/PACK)", en: "Li-ion Battery Process (Module/PACK)" }
  ],
  education: [
    {
      id: "edu-1",
      school: { zh: "北京交通大学", en: "Beijing Jiaotong University" },
      period: "2013.09 - 2015.07",
      degree: { zh: "硕士", en: "Master's Degree" },
      major: { zh: "机械工程", en: "Mechanical Engineering" },
      achievements: [
        { zh: "专业 TOP 5%", en: "Major TOP 5%" },
        { zh: "多次获得优秀员工、国家奖学金", en: "Multiple Excellent Employee Awards & National Scholarships" }
      ]
    },
    {
      id: "edu-2",
      school: { zh: "燕山大学", en: "Yanshan University" },
      period: "2009.09 - 2013.07",
      degree: { zh: "学士", en: "Bachelor's Degree" },
      major: { zh: "机械设计制造及其自动化", en: "Mechanical Design, Manufacturing & Automation" },
      achievements: [
        { zh: "学院 TOP 15%", en: "College TOP 15%" }
      ]
    }
  ],
  workExperience: [
    {
      id: "work-1",
      period: "2025.07 - Present",
      company: { zh: "厦门海辰储能科技股份有限公司", en: "Xiamen Hithium Energy Storage Technology Co., Ltd." },
      position: { zh: "设备开发高级工程师", en: "Senior Equipment Development Engineer" },
      responsibilities: [
        {
          zh: "负责美国海辰补电、模组、PACK、集装箱线导入相关工作；Base美国辅助完成各产线设备导入、qualify、试生产及爬坡阶段任务。",
          en: "Responsible for NPI of recharging, module, PACK, and container lines at Hithium US; Based in the US to assist in equipment commissioning, qualification, pilot runs, and production ramp-up."
        },
        {
          zh: "对接美国团队，完成项目从中国设备开发团队移交至美国运维团队；参加新产品设计变更评审，组织中美团队推进项目改造计划。",
          en: "Liaised with the US team to transfer projects from the Chinese development team to the US O&M team; participated in Engineering Change Order (ECO) reviews and organized cross-border teams for retrofit plans."
        },
        {
          zh: "通过飞书云文档开发设备故障统计系统，可以追溯设备DT时间、运维人员响应时间等信息。",
          en: "Developed an equipment downtime tracking system via Feishu Cloud Docs to trace downtime (DT) and O&M response times."
        }
      ]
    },
    {
      id: "work-2",
      period: "2023.07 - 2025.05",
      company: { zh: "Coulomb Solution Inc (纯美资)", en: "Coulomb Solutions Inc. (US-funded)" },
      position: { zh: "工程部/设备科经理", en: "Engineering Dept / Equipment Section Manager" },
      responsibilities: [
        {
          zh: "产线设备导入：负责规划美国德州工厂模组PACK生产线、美国加州工厂空压机装配线、小三电手动线。",
          en: "Equipment NPI: Planned the Module/PACK line in Texas and the Compressor/PDU/OBC manual lines in California."
        },
        {
          zh: "识别中美两国制造环境差异，评估国际项目风险，完成工艺及设备规划并整理项目预算，导入设备供应商并主导完成技术交流，协助PMO完成投资决策报告。",
          en: "Identified manufacturing differences between China and US, assessed risks, completed process/equipment planning and budgeting. Managed supplier selection and technical exchanges, assisting PMO with investment reports."
        },
        {
          zh: "对接合作方产品部门（CATL国际产品部、国内汽车零部件公司），对目标工业化产品进行工艺评估及量产化二次开发，确定国际合作策略。",
          en: "Collaborated with partners (e.g., CATL International) for process evaluation and secondary development for mass production industrialization; defined international cooperation strategies."
        },
        {
          zh: "部门工作：搭建公司内部知识库，完成《锂电池全流程工艺设备知识库》《公司设备设计导入标准规范》等标准化文档。",
          en: "Department Management: Established internal knowledge base; authored 'Lithium Battery Full-Process Equipment Knowledge Base' and 'Equipment Design & Import Standards'."
        }
      ]
    },
    {
      id: "work-3",
      period: "2021.06 - 2023.07",
      company: { zh: "广州小鹏汽车科技有限公司", en: "Guangzhou XPeng Automotive Technology Co., Ltd." },
      position: { zh: "研发部/资深工艺开发工程师", en: "R&D Dept / Senior Process Development Engineer" },
      responsibilities: [
        {
          zh: "量产导入：负责新产品量产工艺开发、导入，量产工厂规划及量产设备导入及验收--广州工厂、武汉工厂、肇庆工厂模组pack产品工艺开发及工厂、设备规划。",
          en: "Mass Production NPI: Process development, factory planning, and equipment acceptance for Module/PACK at Guangzhou, Wuhan, and Zhaoqing plants."
        },
        {
          zh: "工艺开发：负责新产品、新工艺开发及实验试制--负责大圆柱产品预研项目&小鹏汇天飞行汽车电池项目工艺开发、设备工装开发、试制实验项目。",
          en: "Process Development: Led pre-research for Large Cylindrical Cells and battery process development for XPeng Aeroht flying cars, including tooling development and trial runs."
        },
        {
          zh: "部门工作：负责日常部门管理工作及工艺开发组管理工作--部门能力建设规划完成试制线规划及设备导入（刀片电芯产品试制线）、涂胶及焊接工艺专题研发管理、部门专利体系化、数字化工艺文档系统开发。",
          en: "Management: Managed daily operations and process development team; planned pilot lines (Blade cell); managed Adhesive/Welding R&D; systematized patents and developed digital process documentation."
        }
      ]
    },
    {
      id: "work-4",
      period: "2018.05 - 2021.06",
      company: { zh: "无锡先导智能装备股份有限公司", en: "Wuxi Lead Intelligent Equipment Co., Ltd." },
      position: { zh: "产品经理 (方案主管)", en: "Product Manager (Solution Supervisor)" },
      responsibilities: [
        {
          zh: "负责电动汽车电池包装配项目以及智能制造相关项目，工作内容为：与客户对接需求、方案制作、成本评估及报价并最终参与招投标工作，负责战略客户跟进如一汽大众、上汽通用、宝马、日产、丰田、LG、SKI、Tesla等。",
          en: "Managed EV battery PACK assembly & smart manufacturing projects. Handled requirements gathering, solution design, cost estimation, quoting, and bidding. Managed key accounts: FAW-VW, SAIC-GM, BMW, Nissan, Toyota, LG, SKI, Tesla."
        },
        {
          zh: "熟悉主流三大类模组(方壳、软包、圆柱)及电池包PACK产品工艺，从客户角度分析工艺、提出针对性解决方案并协助客户进行工艺优化。",
          en: "Mastered Prismatic, Pouch, and Cylindrical module/PACK processes. Provided client-centric process analysis and optimization solutions."
        },
        {
          zh: "调研行业发展趋势、前沿技术并进行业内竞品分析：对电动汽车快充/换电方案、固态电池技术、电池包拆解回收技术、CtoP解决方案技术、数字双胞胎技术应用、VR/AR在工业自动化内的应用等技术进行调研。",
          en: "Researched industry trends: Fast charging/swapping, Solid-state batteries, Recycling, CtoP, Digital Twin, and VR/AR applications in industrial automation."
        },
        {
          zh: "负责方案部门日常建设工作：工作统筹安排及人员考核、降本专题专机研发、部门业务流程规范化、人员招聘面试、部门人员培训、对外宣传资料及宣传工作等。",
          en: "Managed solution department: Resource planning, KPI assessment, cost-reduction R&D, process standardization, recruiting, training, and marketing materials."
        }
      ]
    },
    {
      id: "work-5",
      period: "2015.07 - 2018.05",
      company: { zh: "北京机械工业自动化研究所", en: "Beijing Research Institute of Automation for Machinery Industry (RIAMB)" },
      position: { zh: "机械工程师", en: "Mechanical Engineer" },
      responsibilities: [
        {
          zh: "在杭州长江汽车、北汽新能源汽车(普莱德)、东软睿驰电动汽车、成都/天津银隆电动汽车电池包自动装配生产线，及安徽通润液压缸装备生产线项目中负责：非标机械结构设计；关键零部件强度仿真分析与3D模型渲染；标准件及外购件选型与系统集成；项目其他设备选型、技术交流、询价与采购；并赴现场辅助进行调试、技术支持工作。",
          en: "For projects (Changjiang EV, BAIC Pride, Neusoft Reach, Yinlong, Tongrun): Responsible for non-standard structural design, FEA simulation, 3D rendering, component selection, system integration, procurement, and on-site commissioning."
        },
        {
          zh: "参与北汽新能源pack装配线、空中导弹项目：甲方需求接触、方案提供、技术交流展示、标书撰写工作等售前工作。",
          en: "Pre-sales for BAIC BJEV PACK line & Missile projects: Requirements gathering, solution proposal, technical presentations, and tender writing."
        },
        {
          zh: "搭建PDM数据管理系统，负责数据归档及管理以及数据库的日常维护工作。",
          en: "Established PDM data management system; responsible for data archiving and database maintenance."
        }
      ]
    }
  ],
  projects: [
    {
      id: "proj-csi-1",
      company: { zh: "美国德州工厂模组PACK生产线（商用车方壳模组）", en: "Texas Factory Module/PACK Line (Commercial Vehicle Prismatic Module)" },
      position: { zh: "CSI项目经历", en: "CSI Project Experience" },
      period: "2023.07 - Present",
      responsibilities: [
        { zh: "(1) 对接CATL，结合美国生产环境重新开发BC3/BC5生产工艺，推进零部件美国本土化工作。", en: "(1) Liaised with CATL to re-develop BC3/BC5 processes for the US environment; promoted component localization." },
        { zh: "(2) 完成工厂初步规划，专业国际项目风险报告，完成预算评估。", en: "(2) Completed preliminary factory planning, international project risk reporting, and budget assessment." },
        { zh: "(3) 导入中国设备供应商，撰写技术标书，主持技术评审，推进设备招标定点。", en: "(3) Imported Chinese equipment suppliers, drafted technical specifications, led technical reviews, and facilitated equipment nomination." }
      ]
    },
    {
      id: "proj-csi-2",
      company: { zh: "美国加州工厂小三电半自动装配线（PDU/OBC/DCDC）", en: "California Factory Small E-Drive Semi-Auto Line (PDU/OBC/DCDC)" },
      position: { zh: "CSI项目经历", en: "CSI Project Experience" },
      period: "2024.01 - Present",
      responsibilities: [
        { zh: "(1) 目前为合作中方纯手动线装配，结合美国生产要求进行半自动化工艺开发。", en: "(1) Transformed the manual assembly process to a semi-automated process meeting US production requirements." },
        { zh: "(2) 供应商技术交流，协助完成项目招标定点。", en: "(2) Conducted supplier technical exchanges and assisted in project bidding and nomination." }
      ]
    },
    {
      id: "proj-csi-3",
      company: { zh: "美国加州工厂车载空气压缩机手动装配线", en: "California Factory On-board Compressor Manual Assembly Line" },
      position: { zh: "CSI项目经历", en: "CSI Project Experience" },
      period: "2024.05 - Present",
      responsibilities: [
        { zh: "(1) 协助解决现场质量问题，结合美国生产要求完成手动工艺路线美国本土移植。", en: "(1) Assisted in resolving on-site quality issues; transplanted manual process routes to the US environment." },
        { zh: "(2) 供应商技术交流，协助完成项目招标定点。", en: "(2) Conducted supplier technical exchanges and assisted in project bidding and nomination." }
      ]
    },
    {
      id: "proj-xpeng-1",
      company: { zh: "广州工厂模组PACK量产线（方壳大模组）", en: "Guangzhou Factory Module/PACK Mass Production Line (Large Prismatic Module)" },
      position: { zh: "小鹏项目经历", en: "XPeng Project Experience" },
      period: "2021.06 - 2023.07",
      responsibilities: [
        { zh: "(1) 供应商技术交流，协助完成项目招标定点。", en: "(1) Conducted supplier technical exchanges and assisted in project bidding and nomination." },
        { zh: "(2) 协助完成设备验收、现场调试导入。", en: "(2) Assisted in equipment acceptance and on-site commissioning/NPI." }
      ]
    },
    {
      id: "proj-xpeng-2",
      company: { zh: "武汉工厂模组PACK量产线（方壳CTP）", en: "Wuhan Factory Module/PACK Mass Production Line (Prismatic CTP)" },
      position: { zh: "小鹏项目经历", en: "XPeng Project Experience" },
      period: "2021.06 - 2023.07",
      responsibilities: [
        { zh: "(1) 产品量产工艺规划、量产厂房土建规划、投资成本评估及立项资料准备。", en: "(1) Mass production process planning, civil engineering planning, cost assessment, and project initiation preparation." },
        { zh: "(2) 供应商技术交流，协助完成项目招标定点。", en: "(2) Conducted supplier technical exchanges and assisted in project bidding and nomination." },
        { zh: "(3) 衔接研发与制造沟通、发起同步工程、协助完成设备验收、现场调试导入。", en: "(3) Bridged R&D and manufacturing communication, initiated simultaneous engineering, and assisted in acceptance and commissioning." }
      ]
    },
    {
      id: "proj-xpeng-blade",
      company: { zh: "刀片试制线及量产线（短刀MTP）", en: "Blade Trial & Mass Production Line (Short Blade MTP)" },
      position: { zh: "小鹏项目经历", en: "XPeng Project Experience" },
      period: "2021.10 - 2022.08",
      responsibilities: [
        { zh: "(1) 产品试制及量产工艺规划、试制及量产车间布局规划、投资成本评估及立项资料准备。", en: "(1) Process planning for trial/mass production, workshop layout planning, cost assessment, and project initiation preparation." },
        { zh: "(2) 供应商技术交流，协助完成项目招标定点。", en: "(2) Conducted supplier technical exchanges and assisted in project bidding and nomination." },
        { zh: "(3) 衔接研发与制造沟通、发起同步工程、协助完成设备验收（试制线已完成）。", en: "(3) Bridged R&D and manufacturing communication, initiated simultaneous engineering, and assisted in equipment acceptance (Trial line completed)." }
      ]
    },
    {
      id: "proj-xpeng-3",
      company: { zh: "大圆柱试制线（大圆柱CTP）", en: "Large Cylindrical Trial Line (Large Cylindrical CTP)" },
      position: { zh: "小鹏项目经历", en: "XPeng Project Experience" },
      period: "2021.12 - 2022.10",
      responsibilities: [
        { zh: "(1) 大圆柱产品工艺对标分析、试制及量产工艺规划。", en: "(1) Benchmarking analysis for large cylindrical products; planning for trial and mass production processes." },
        { zh: "(2) 产品A/B样试制工艺文件撰写、试制工装规划、主导完成试制并完成试制总结。", en: "(2) Authored A/B sample trial documentation, planned tooling, led trial execution, and summarized results." }
      ]
    },
    {
      id: "proj-lead-1",
      company: { zh: "LG 圆柱模组装配线", en: "LG Cylindrical Module Assembly Line" },
      position: { zh: "先导项目经历", en: "Lead Intelligent Project Experience" },
      period: "2018.07 - 2019.08",
      responsibilities: [
        { zh: "项目简介：本项目为韩国 LG 化学针对越南低速车市场开发的圆柱电芯模组 pack 项目 (含多个子项目，项目周期多次调整) ，包含一条模组线， 一套 pack 线， 模组线自动化程度要求较高。", en: "Project: Developed for LG Chem (Korea) for the Vietnam LSEV market. Included one cylindrical module line and one PACK line with high automation requirements. (Multiple sub-projects and schedule adjustments)." },
        { zh: "(1) 赴韩国拜访客户，介绍公司及部门，获取客户信任并收集客户需求。", en: "(1) Visited Korea to present company/department capabilities, gain trust, and gather requirements." },
        { zh: "(2) 全英文制作装配集成方案说明资料、项目实施计划并评估项目成本及报价。", en: "(2) Created full English technical proposals, implementation schedules, and cost/quotation assessments." }
      ]
    },
    {
      id: "proj-lead-2",
      company: { zh: "远景 (日产AESC) 软包电池模组装配线", en: "Envision (Nissan AESC) Pouch Battery Module Assembly Line" },
      position: { zh: "先导项目经历", en: "Lead Intelligent Project Experience" },
      period: "2018.10 - 2019.04",
      responsibilities: [
        { zh: "项目简介：本项目为海外系统集成项目，客户为日方技术团队(二期为中方技术团队主导)，对我方技术要求十分严格，多次赴日进行前期技术交流及后期设计评审。", en: "Project: Overseas system integration. The Japanese technical team (Phase 1) had strict requirements. Multiple visits to Japan for technical exchange and design reviews." },
        { zh: "(1) 赴日本拜访客户，介绍公司及部门，参与日方客户需求说明会。", en: "(1) Visited Japan to present capabilities and attend client requirement workshops." },
        { zh: "(2) 跟进客户需求，制作装配集成方案说明资料、项目实施计划并评估项目成本及报价。", en: "(2) Followed up on requirements, created integration proposals, implementation schedules, and cost assessments." },
        { zh: "(3) 赴日本进行技术评审，签订技术协议细则。", en: "(3) Attended technical reviews in Japan and signed detailed technical protocols." },
        { zh: "(4) 跟进设计实时进度、协调联系海外供应商、提炼并优化形成降本专机课题项目。", en: "(4) Tracked design progress, coordinated with overseas suppliers, and optimized cost-reduction initiatives." }
      ]
    },
    {
      id: "proj-lead-3",
      company: { zh: "一汽丰田(常熟)工厂模组线项目", en: "FAW Toyota (Changshu) Factory Module Line Project" },
      position: { zh: "先导项目经历", en: "Lead Intelligent Project Experience" },
      period: "2019.03 - 2019.05",
      responsibilities: [
        { zh: "项目简介：本项目为一汽丰田(常熟)工厂模组线项目，项目自动化程度较低，但对人机工程要求较高，日方客户对项目细节提出严格要求。", en: "Project: FAW Toyota Module Line (Changshu). Lower automation but high ergonomics requirements. Strict detail requirements from Japanese clients." },
        { zh: "(1) 拜访客户介绍公司技术实力、接待客户来访介绍先导标准与技术优势；", en: "(1) Visited client to present technical strength; hosted client visits to showcase standards and advantages." },
        { zh: "(2) 解读客户需求，组织学习丰田标准(TMS 标准)，组织制作对应机械、控制、人机方案，评估成本，并最终完成技术评分。", en: "(2) Interpreted requirements, studied Toyota standards (TMS), developed mechanical/control/ergonomic solutions, assessed costs, and completed technical scoring." }
      ]
    },
    {
      id: "proj-lead-4",
      company: { zh: "一汽大众 PACK 装配线", en: "FAW-VW PACK Assembly Line" },
      position: { zh: "先导项目经历", en: "Lead Intelligent Project Experience" },
      period: "2019.06 - 2019.10",
      responsibilities: [
        { zh: "项目简介：本项目为一汽新能源为红旗开发的 PACK 装配线项目，项目采用AGV 输送，自动化程度较高，例如 PACK 测试、PACK 上下线等工序均实现无人化操作。", en: "Project: PACK assembly line for FAW Hongqi. Utilized AGV transport with high automation (unmanned testing and loading/unloading)." },
        { zh: "(1) 对接德国、中国两方客户，介绍公司背景及技术实力与技术优势。", en: "(1) Liaised with both German and Chinese clients, presenting company background and technical strengths." },
        { zh: "(2) 跟进客户需求，制作装配集成方案说明资料、项目实施计划并评估项目成本及报价。", en: "(2) Followed up on requirements, created integration proposals, implementation plans, and cost/quotation assessments." },
        { zh: "(3) 参与项目实施阶段讨论，协助解决现场问题；", en: "(3) Participated in implementation discussions and assisted in resolving on-site issues." }
      ]
    },
    {
      id: "proj-lead-5",
      company: { zh: "Tesla (上海) 圆柱电芯模组装配线", en: "Tesla (Shanghai) Cylindrical Cell Module Assembly Line" },
      position: { zh: "先导项目经历", en: "Lead Intelligent Project Experience" },
      period: "2019.10 - 2019.12",
      responsibilities: [
        { zh: "项目简介：本项目为圆柱电芯模组装配线项目，客户对接团队为美国海外团队，项目时间紧、要求高、需要协调中、美、德各方资源。", en: "Project: Cylindrical cell module assembly line. Client team was US-based. Tight schedule and high requirements, necessitating coordination of CN/US/DE resources." },
        { zh: "(1) 制作项目方案，与美方对接，负责客户考察相关事宜。", en: "(1) Developed project proposals, liaised with the US team, and managed client site visits." },
        { zh: "(2) 核算成本、锁定方案细节并协助签订合同。", en: "(2) Calculated costs, locked down solution details, and assisted in contract signing." },
        { zh: "(3) 翻译核心设计原则，主导完成设计阶段与客户的沟通并协助完成 3 次外方驻场评审。", en: "(3) Translated core design principles, led design phase communication, and supported 3 on-site reviews by overseas teams." },
        { zh: "(4) 跟进项目实施，协助解决项目现场各类问题，汇总相关增减项合同。", en: "(4) Followed up on implementation, resolved on-site issues, and summarized contract variations." }
      ]
    },
    {
      id: "proj-lead-6",
      company: { zh: "上汽通用 HEV 软包模组装配线", en: "SAIC-GM HEV Pouch Module Assembly Line" },
      position: { zh: "先导项目经历", en: "Lead Intelligent Project Experience" },
      period: "2019.10 - 2019.12",
      responsibilities: [
        { zh: "项目简介：本项目为上汽通用针对 HEV 开发的小型软包模组线项目，产线为试验线，多项前沿技术如虚拟调试等也通过本项目进行调试。", en: "Project: Small pouch module pilot line for SAIC-GM HEV. Utilized cutting-edge technologies like virtual commissioning." },
        { zh: "(1) 对接客户，介绍公司技术实力、接待客户来访，了解客户需求，分析通用标准；", en: "(1) Liaised with client, hosted visits, analyzed requirements, and studied GM standards." },
        { zh: "(2) 组织制作方案，与客户进行技术交流并最终完成投标相关工作，获得客户认可；", en: "(2) Organized solution creation, technical exchanges, and bidding, ultimately winning client approval." },
        { zh: "(3) 评估客户现有美方产线，并制定利旧策略；", en: "(3) Evaluated the client's existing US line and formulated a reuse/retrofit strategy." }
      ]
    },
    {
      id: "proj-lead-7",
      company: { zh: "德国宝马模组及 PACK 装配线项目", en: "German BMW Module & PACK Assembly Line Project" },
      position: { zh: "先导项目经历", en: "Lead Intelligent Project Experience" },
      period: "2020.04 - 2020.08",
      responsibilities: [
        { zh: "项目简介：疫情期间开始对接，远程制作相关说明资料并在部门资源支持下进入德国宝马供应商名录。", en: "Project: Remote engagement during the pandemic. Created documentation and successfully entered the BMW supplier list with department support." },
        { zh: "(1) 对接德国宝马客户，制作介绍资料、宣传视频，协调制作能力展示 demo；", en: "(1) Liaised with German BMW client, created intro materials/videos, and coordinated capability demos." },
        { zh: "(2) 解读宝马全英标准，并组织制作方案；", en: "(2) Interpreted BMW's English standards and organized solution creation." }
      ]
    },
    {
      id: "proj-lead-8",
      company: { zh: "其他各类项目对接", en: "Other Projects" },
      position: { zh: "先导项目经历", en: "Lead Intelligent Project Experience" },
      period: "2018.05 - 2020.08",
      responsibilities: [
        { zh: "(1) 工信部两化研究所，智能制造实验项目。(AR/VR、智能物流等前沿技术应用试点项目)", en: "(1) MIIT Integration Institute Smart Manufacturing Pilot (AR/VR, Smart Logistics)." },
        { zh: "(2) Cadenza, Arrival 模组 pack 组装项目。(赴美进行技术交流，可独立进行技术交流)", en: "(2) Cadenza, Arrival Module/PACK projects (Visited the US for independent technical exchange)." },
        { zh: "(3) 德国宝马、长风动力、小鹏、车和家、中航锂电、捷威、多氟多等模组 pack 装配项目。", en: "(3) Module/PACK projects for BMW, Changfeng, XPeng, CHJ (Li Auto), CALB, JEVE, DFD, etc." },
        { zh: "(4) 江苏联通，企业私有云及 5G 网络试点项目。(主导签订战略合作协议)", en: "(4) Jiangsu Unicom Enterprise Private Cloud & 5G Pilot (Led strategic agreement signing)." }
      ]
    },
    {
      id: "proj-riamb-1",
      company: { zh: "银隆电池方壳模组及 PACK 自动装配线 (天津、成都厂区)", en: "Yinlong Battery Prismatic Module & PACK Auto Line (Tianjin/Chengdu)" },
      position: { zh: "北自所项目经历", en: "RIAMB Project Experience" },
      period: "2017.06 - 2018.05",
      responsibilities: [
        { zh: "项目简介：本项目为格力电器与珠海银隆合作的新能源汽车项目。我中心主要负责电池模组及 PACK 自动化装配线，为银龙新能源汽车提供电池包，包含电芯立体仓库、电芯分档检测、模组装配及检测线、PACK 装配及检测线。", en: "Project: Gree/Yinlong NEV project. Responsible for the automated battery module and PACK assembly lines, including cell AS/RS, sorting, module assembly/testing, and PACK assembly/testing." },
        { zh: "(1) 进一步推广应用 PDM 数据管理系统，负责管理所有设计图纸、BOM 等设计资料。", en: "(1) Promoted PDM system application; managed all design drawings and BOMs." },
        { zh: "(2) 赴珠海格力总公司，负责与格力相关部门进行技术对接，编制验收方案等。(独立完成)", en: "(2) Visited Gree HQ for technical liaison and acceptance planning (Independently completed)." },
        { zh: "(3) 对外协加工产品进行组装指导与质量验收。(独立完成)", en: "(3) Guided assembly and performed quality acceptance for outsourced products (Independently completed)." },
        { zh: "(4) 负责所有上料装置，自动翻转专机等设计工作。", en: "(4) Designed all loading mechanisms and automatic flipping machines." },
        { zh: "(5) 赴成都现场协助调试，负责技术支持。", en: "(5) Provided on-site commissioning and technical support in Chengdu." },
        { zh: "(6) 负责与涂胶厂商，线体厂商，及项目仿真模拟厂商进行技术交流。", en: "(6) Conducted technical exchanges with glue dispensing, conveyor, and simulation vendors." }
      ]
    },
    {
      id: "proj-riamb-2",
      company: { zh: "通润液压缸自动装配线", en: "Tongrun Hydraulic Cylinder Auto Assembly Line" },
      position: { zh: "北自所项目经历", en: "RIAMB Project Experience" },
      period: "2017.03 - 2017.11",
      responsibilities: [
        { zh: "项目简介：本项目为汽车用千斤顶液压缸(3 款) 自动装配线。包含缸体、活塞、调速阀等共 20 余种零件的装配任务，该产品全球销量领先，正弦自动化程度高。", en: "Project: Automated assembly line for 3 types of jack hydraulic cylinders (20+ parts). High automation." },
        { zh: "(1) 上料分料机构设计，缸体定位专机等专机设计，应用 robotstudio 进行机器人仿真。", en: "(1) Designed feeding/sorting mechanisms and cylinder positioning machines; performed RobotStudio simulation." },
        { zh: "(2) 以及与甲方公司方案沟通，上料振盆的选型与技术交流。", en: "(2) Communicated solutions with the client; selected vibratory bowl feeders." },
        { zh: "(3) 后期赴安徽现场协助调试负责技术支持。", en: "(3) Provided on-site commissioning and technical support in Anhui." }
      ]
    },
    {
      id: "proj-riamb-3",
      company: { zh: "北汽普莱德 PACK 自动装配线", en: "BAIC Pride PACK Auto Assembly Line" },
      position: { zh: "北自所项目经历", en: "RIAMB Project Experience" },
      period: "2016.07 - 2017.03",
      responsibilities: [
        { zh: "项目简介：普莱德电池包自动装配线是直接为北汽新能源汽车提供电池包供货，本项目分为北京、溧阳两个电场，为电池包半自动装配线。", en: "Project: Semi-automated PACK line for BAIC BJEV (Beijing and Liyang plants)." },
        { zh: "(1) 前期与甲方客户技术沟通，出方案，应用 composer 等软件制作动画，做方案展示。", en: "(1) Conducted technical communication, proposed solutions, and created Composer animations for presentation." },
        { zh: "(2) 设计产品上料装置。项目后期赴溧阳现场，协助调试负责技术支持。", en: "(2) Designed loading mechanisms. Provided on-site commissioning support in Liyang." }
      ]
    },
    {
      id: "proj-riamb-4",
      company: { zh: "东软睿驰方壳模组及 PACK 自动装配线", en: "Neusoft Reach Prismatic Module & PACK Auto Line" },
      position: { zh: "北自所项目经历", en: "RIAMB Project Experience" },
      period: "2016.05 - 2016.11",
      responsibilities: [
        { zh: "项目简介：本项目为沈阳东软睿驰电池包自动装配线。", en: "Project: Automated battery pack assembly line for Neusoft Reach (Shenyang)." },
        { zh: "(1) 上料机构设计，简单专机设计。", en: "(1) Designed loading mechanisms and simple special machines." },
        { zh: "(2) 负责对口协调激光焊接、车间内恒温房等供应商，进行技术对接。", en: "(2) Coordinated with laser welding and climate control room suppliers for technical alignment." },
        { zh: "(3) 后期赴现场负责技术支持工作。", en: "(3) Provided on-site technical support." }
      ]
    },
    {
      id: "proj-riamb-5",
      company: { zh: "长江新能源电动汽车方壳模组及 PACK 装配线", en: "Changjiang EV Prismatic Module & PACK Assembly Line" },
      position: { zh: "北自所项目经历", en: "RIAMB Project Experience" },
      period: "2014.05 - 2016.04",
      responsibilities: [
        { zh: "项目简介：本项目为杭州长江新能源汽车电池 PACK 自动装配线，为长江 EV 提供能源电池包，产线包括模组装配及检测线、PACK 装配及检测线。正线自动化程度高，是杭州市经典项目工程。", en: "Project: Automated PACK/Module line for Changjiang EV (Hangzhou). High automation level, recognized as a benchmark project in Hangzhou." },
        { zh: "(1) 我介入项目为中后期，主要负责现场调试技术支持。", en: "(1) Joined in the mid-to-late stage, responsible for on-site commissioning and technical support." },
        { zh: "(2) 压紧机构等简单专机设计。", en: "(2) Designed simple special machines such as clamping mechanisms." }
      ]
    }
  ]
};