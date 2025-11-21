import React, { useState, useEffect, useRef } from 'react';
import { 
  Edit2, Share2, Save, Globe, Plus, Trash2, Upload, 
  MapPin, Phone, Mail, Calendar, BatteryCharging, Briefcase 
} from 'lucide-react';
import Background from './components/Background';
import Typewriter from './components/Typewriter';
import { INITIAL_DATA } from './data';
import { ResumeData, Language, WorkExperienceItem } from './types';

const App: React.FC = () => {
  const [data, setData] = useState<ResumeData>(INITIAL_DATA);
  const [language, setLanguage] = useState<Language>(Language.CN);
  const [isEditing, setIsEditing] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [photoUrl, setPhotoUrl] = useState<string>("简历.jpg");
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load initial state (including checking for read-only hash)
  useEffect(() => {
    const loadData = () => {
      const savedData = localStorage.getItem('resumeData');
      if (savedData) {
        setData(JSON.parse(savedData));
      }
      
      const savedPhoto = localStorage.getItem('resumePhoto');
      if (savedPhoto) {
        setPhotoUrl(savedPhoto);
      }

      if (window.location.hash === '#readonly') {
        setIsReadOnly(true);
      }
    };
    loadData();
  }, []);

  const handleSave = () => {
    localStorage.setItem('resumeData', JSON.stringify(data));
    localStorage.setItem('resumePhoto', photoUrl);
    setIsEditing(false);
    alert(language === Language.CN ? '保存成功！' : 'Saved successfully!');
  };

  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}#readonly`;
    navigator.clipboard.writeText(url).then(() => {
      alert(language === Language.CN ? '链接已复制到剪贴板！' : 'Link copied to clipboard!');
    });
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === Language.CN ? Language.EN : Language.CN);
  };

  // Content Helper
  const t = (obj: any) => {
    if (typeof obj === 'object' && obj !== null && ('zh' in obj)) {
      return obj[language];
    }
    return obj;
  };

  const handleTextChange = (path: string, value: string) => {
      const keys = path.split('.');
      setData(prev => {
          const newData = JSON.parse(JSON.stringify(prev));
          let current = newData;
          for(let i=0; i<keys.length-1; i++){
              current = current[keys[i]];
          }
          // Update the specific language key
          if(current[keys[keys.length-1]] && typeof current[keys[keys.length-1]] === 'object'){
             current[keys[keys.length-1]][language] = value;
          } else {
              // Fallback for non-localized strings like phone
              current[keys[keys.length-1]] = value;
          }
          return newData;
      });
  }

  // Work Experience Handlers
  const addWorkExperience = () => {
    const newJob: WorkExperienceItem = {
      id: `work-${Date.now()}`,
      company: { zh: "新公司名称", en: "New Company Name" },
      position: { zh: "新职位", en: "New Position" },
      period: "2025 - Present",
      responsibilities: [
        { zh: "在此处添加工作职责...", en: "Add responsibilities here..." }
      ]
    };
    setData(prev => ({
      ...prev,
      workExperience: [newJob, ...prev.workExperience]
    }));
  };

  const removeWorkExperience = (id: string) => {
    setData(prev => ({
      ...prev,
      workExperience: prev.workExperience.filter(w => w.id !== id)
    }));
  };

  const addResponsibility = (itemId: string, type: 'workExperience' | 'projects') => {
      setData(prev => {
        const list = prev[type] || [];
        const newList = list.map(w => {
              if (w.id === itemId) {
                  return {
                      ...w,
                      responsibilities: [...w.responsibilities, { zh: "新职责描述", en: "New description" }]
                  };
              }
              return w;
          });
        return { ...prev, [type]: newList };
      });
  }

  const updateResponsibility = (itemId: string, index: number, value: string, type: 'workExperience' | 'projects') => {
       setData(prev => {
          const list = prev[type] || [];
          const newList = list.map(w => {
              if (w.id === itemId) {
                  const newResps = [...w.responsibilities];
                  newResps[index] = { ...newResps[index], [language]: value };
                  return { ...w, responsibilities: newResps };
              }
              return w;
          });
          return { ...prev, [type]: newList };
      });
  }

  // Project Handlers
  const addProject = () => {
    const newProject: WorkExperienceItem = {
      id: `proj-${Date.now()}`,
      company: { zh: "新项目名称", en: "New Project Name" },
      position: { zh: "项目角色", en: "Project Role" },
      period: "2025",
      responsibilities: [
        { zh: "在此处添加项目详情...", en: "Add project details here..." }
      ]
    };
    setData(prev => ({
      ...prev,
      projects: [newProject, ...(prev.projects || [])]
    }));
  };

  const removeProject = (id: string) => {
    setData(prev => ({
      ...prev,
      projects: (prev.projects || []).filter(p => p.id !== id)
    }));
  };


  // Render Helpers
  const EditableText = ({ path, value, className, multiline = false }: { path: string, value: string, className?: string, multiline?: boolean }) => {
    if (!isEditing) return <span className={className}>{value}</span>;
    
    if (multiline) {
        return (
            <textarea 
                value={value} 
                onChange={(e) => handleTextChange(path, e.target.value)}
                className={`w-full border-b border-tech-blue bg-transparent outline-none focus:border-tech-purple transition-colors ${className}`}
            />
        );
    }
    return (
        <input 
            type="text" 
            value={value} 
            onChange={(e) => handleTextChange(path, e.target.value)}
            className={`w-auto min-w-[50px] border-b border-tech-blue bg-transparent outline-none focus:border-tech-purple transition-colors ${className}`}
        />
    );
  };

  return (
    <div className="min-h-screen relative pb-20">
      <Background />

      {/* Header / Toolbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
               <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-tech-purple">
                  {t(data.name)}
               </div>
               {/* Decorative dash */}
               <div className="hidden md:block mx-4 h-4 w-[1px] bg-slate-300"></div>
               <div className="hidden md:block text-sm text-slate-500 max-w-xs truncate">
                  {t(data.title)}
               </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4">
              <button 
                onClick={toggleLanguage}
                className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors flex items-center gap-1"
                title="Switch Language"
              >
                <Globe size={18} />
                <span className="text-xs font-medium uppercase">{language}</span>
              </button>

              {!isReadOnly && (
                <>
                  {isEditing ? (
                    <button 
                        onClick={handleSave}
                        className="flex items-center gap-2 px-4 py-2 bg-tech-blue hover:bg-tech-cyan text-white rounded-full text-sm font-medium transition-all shadow-lg shadow-tech-blue/30"
                    >
                        <Save size={16} />
                        {language === Language.CN ? '保存' : 'Save'}
                    </button>
                  ) : (
                    <button 
                        onClick={() => setIsEditing(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-full text-sm font-medium transition-all"
                    >
                        <Edit2 size={16} />
                        {language === Language.CN ? '编辑' : 'Edit'}
                    </button>
                  )}
                  
                  <button 
                    onClick={() => addWorkExperience()}
                    className="flex items-center gap-2 px-3 py-2 md:px-4 bg-slate-900 text-white hover:bg-slate-800 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap"
                  >
                    <Plus size={16} />
                    {language === Language.CN ? '增加经历' : 'Add Job'}
                  </button>

                   <button 
                    onClick={() => addProject()}
                    className="flex items-center gap-2 px-3 py-2 md:px-4 bg-tech-purple text-white hover:bg-purple-700 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap"
                  >
                    <Plus size={16} />
                    {language === Language.CN ? '增加项目' : 'Add Project'}
                  </button>
                </>
              )}

              <button 
                onClick={handleShare}
                className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                title="Share"
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 space-y-6">
                <div className="text-sm font-semibold text-tech-blue tracking-wider uppercase">
                   {language === Language.CN ? "欢迎来到我的主页" : "Welcome to my portfolio"}
                </div>
                <Typewriter language={language} />
                
                <div className="text-lg text-slate-600 leading-relaxed max-w-xl">
                   <EditableText path="summary" value={t(data.summary)} multiline />
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm text-slate-600">
                   <div className="flex items-center gap-2">
                       <Phone size={16} className="text-tech-blue" />
                       <EditableText path="contact.phone" value={data.contact.phone} />
                   </div>
                   <div className="flex items-center gap-2">
                       <Mail size={16} className="text-tech-blue" />
                       <EditableText path="contact.email" value={data.contact.email} />
                   </div>
                   <div className="flex items-center gap-2">
                       <MapPin size={16} className="text-tech-blue" />
                       <EditableText path="contact.location" value={t(data.contact.location)} />
                   </div>
                   <div className="flex items-center gap-2">
                       <Calendar size={16} className="text-tech-blue" />
                       <EditableText path="contact.birthDate" value={data.contact.birthDate} />
                   </div>
                </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                    {/* Decorative Circles */}
                    <div className="absolute inset-0 rounded-full border border-slate-200 animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute -inset-4 rounded-full border border-slate-100 border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
                    
                    <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-2xl group bg-slate-100">
                         <img 
                            src={photoUrl} 
                            alt="Profile" 
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                         />
                         {isEditing && (
                             <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                                 <div className="text-white flex flex-col items-center gap-2">
                                     <Upload size={24} />
                                     <span className="text-xs">Change Photo</span>
                                 </div>
                             </div>
                         )}
                         <input 
                            type="file" 
                            ref={fileInputRef} 
                            className="hidden" 
                            accept="image/*"
                            onChange={handlePhotoUpload}
                         />
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-0 right-0 bg-white p-3 rounded-2xl shadow-lg flex items-center gap-2 animate-bounce" style={{ animationDuration: '3s' }}>
                        <div className="bg-green-100 p-1.5 rounded-full">
                            <BatteryCharging size={20} className="text-green-600" />
                        </div>
                        <div>
                             <div className="text-xs font-bold text-slate-800">8 Patents</div>
                             <div className="text-[10px] text-slate-500">Innovation</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Skills */}
        <section>
             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                 <span className="w-2 h-8 bg-tech-purple rounded-full"></span>
                 {language === Language.CN ? "核心技能" : "Key Skills"}
             </h2>
             <div className="flex flex-wrap gap-3">
                 {data.skills.map((skill, idx) => (
                     <div key={idx} className="px-4 py-2 bg-white border border-slate-100 shadow-sm rounded-xl text-slate-700 text-sm font-medium hover:border-tech-blue hover:text-tech-blue transition-colors cursor-default">
                         {t(skill)}
                     </div>
                 ))}
             </div>
        </section>

        {/* Education */}
        <section>
             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                 <span className="w-2 h-8 bg-tech-cyan rounded-full"></span>
                 {language === Language.CN ? "教育经历" : "Education"}
             </h2>
             <div className="grid md:grid-cols-2 gap-6">
                 {data.education.map(edu => (
                     <div key={edu.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                         <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                             <div className="text-6xl font-bold text-slate-900">
                                 {edu.degree.en.includes("Master") ? "M" : "B"}
                             </div>
                         </div>
                         <div className="relative z-10">
                             <div className="text-sm text-tech-blue font-semibold mb-1">{edu.period}</div>
                             <h3 className="text-xl font-bold text-slate-800">{t(edu.school)}</h3>
                             <div className="text-slate-600 font-medium mt-1">{t(edu.major)} | {t(edu.degree)}</div>
                             {edu.achievements && (
                                 <ul className="mt-4 space-y-1">
                                     {edu.achievements.map((ach, i) => (
                                         <li key={i} className="text-sm text-slate-500 flex items-start gap-2">
                                             <span className="mt-1.5 w-1.5 h-1.5 bg-tech-purple rounded-full flex-shrink-0"></span>
                                             {t(ach)}
                                         </li>
                                     ))}
                                 </ul>
                             )}
                         </div>
                     </div>
                 ))}
             </div>
        </section>

        {/* Work Experience */}
        <section>
             <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <span className="w-2 h-8 bg-tech-blue rounded-full"></span>
                    {language === Language.CN ? "工作经历" : "Work Experience"}
                </h2>
             </div>
             
             <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                 {data.workExperience.map((work, idx) => (
                     <div key={work.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                         
                         {/* Timeline Dot */}
                         <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-200 group-hover:bg-tech-blue transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
                             <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                         </div>

                         {/* Card */}
                         <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 ml-16 md:ml-0 relative">
                             {isEditing && (
                                 <button 
                                    onClick={() => removeWorkExperience(work.id)}
                                    className="absolute top-4 right-4 text-red-400 hover:text-red-600"
                                 >
                                     <Trash2 size={16} />
                                 </button>
                             )}
                             
                             <div className="flex flex-col gap-1 mb-4">
                                 <span className="text-sm font-bold text-tech-blue uppercase tracking-wider">
                                    <EditableText path={`workExperience.${idx}.period`} value={work.period} />
                                 </span>
                                 <h3 className="text-lg font-bold text-slate-800">
                                     <EditableText path={`workExperience.${idx}.company`} value={t(work.company)} />
                                 </h3>
                                 <div className="text-slate-600 font-medium">
                                     <EditableText path={`workExperience.${idx}.position`} value={t(work.position)} />
                                 </div>
                             </div>
                             
                             <ul className="space-y-3">
                                 {work.responsibilities.map((resp, rIdx) => (
                                     <li key={rIdx} className="text-sm text-slate-600 flex items-start gap-3 group/li">
                                         <span className="mt-1.5 w-1.5 h-1.5 bg-slate-300 group-hover/li:bg-tech-cyan rounded-full flex-shrink-0 transition-colors"></span>
                                         {isEditing ? (
                                             <textarea 
                                                 value={t(resp)} 
                                                 onChange={(e) => updateResponsibility(work.id, rIdx, e.target.value, 'workExperience')}
                                                 className="w-full bg-slate-50 border-b border-slate-200 p-1 text-sm focus:outline-none focus:border-tech-blue"
                                                 rows={3}
                                             />
                                         ) : (
                                             <span className="leading-relaxed">{t(resp)}</span>
                                         )}
                                     </li>
                                 ))}
                                 {isEditing && (
                                     <button 
                                        onClick={() => addResponsibility(work.id, 'workExperience')}
                                        className="text-xs text-tech-blue hover:underline flex items-center gap-1 mt-2"
                                     >
                                         <Plus size={12} /> Add Responsibility
                                     </button>
                                 )}
                             </ul>
                         </div>
                     </div>
                 ))}
             </div>
        </section>

        {/* Project Experience */}
        {data.projects && (
            <section>
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <span className="w-2 h-8 bg-tech-purple rounded-full"></span>
                        {language === Language.CN ? "项目经历" : "Project Experience"}
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                    {data.projects.map((project, idx) => (
                        <div key={project.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow relative">
                            {isEditing && (
                                <button 
                                onClick={() => removeProject(project.id)}
                                className="absolute top-4 right-4 text-red-400 hover:text-red-600"
                                >
                                    <Trash2 size={16} />
                                </button>
                            )}

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800">
                                        <EditableText path={`projects.${idx}.company`} value={t(project.company)} />
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                                        <Briefcase size={14} />
                                        <EditableText path={`projects.${idx}.position`} value={t(project.position)} />
                                    </div>
                                </div>
                                <div className="text-sm font-bold text-tech-purple bg-purple-50 px-3 py-1 rounded-full self-start md:self-auto whitespace-nowrap">
                                     <EditableText path={`projects.${idx}.period`} value={project.period} />
                                </div>
                            </div>

                            <ul className="space-y-3 border-t border-slate-50 pt-4">
                                {project.responsibilities.map((resp, rIdx) => (
                                    <li key={rIdx} className="text-sm text-slate-600 flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-tech-purple rounded-full flex-shrink-0"></span>
                                        {isEditing ? (
                                            <textarea 
                                                value={t(resp)} 
                                                onChange={(e) => updateResponsibility(project.id, rIdx, e.target.value, 'projects')}
                                                className="w-full bg-slate-50 border-b border-slate-200 p-1 text-sm focus:outline-none focus:border-tech-purple"
                                                rows={2}
                                            />
                                        ) : (
                                            <span className="leading-relaxed">{t(resp)}</span>
                                        )}
                                    </li>
                                ))}
                                {isEditing && (
                                    <button 
                                    onClick={() => addResponsibility(project.id, 'projects')}
                                    className="text-xs text-tech-purple hover:underline flex items-center gap-1 mt-2"
                                    >
                                        <Plus size={12} /> Add Detail
                                    </button>
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        )}

      </main>
      
      <footer className="mt-20 py-10 text-center text-slate-400 text-sm relative z-10">
         <p>© {new Date().getFullYear()} Liu Chang. All rights reserved.</p>
         <p className="text-xs mt-2 opacity-50">Designed with AI & Passion</p>
      </footer>
    </div>
  );
};

export default App;