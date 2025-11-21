import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient Mesh */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-50">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-tech-blue/10 blur-[100px] animate-gradient-x" />
        <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-tech-cyan/10 blur-[100px] animate-pulse" />
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-tech-purple/10 blur-[100px] animate-gradient-x" style={{ animationDelay: '2s' }} />
      </div>

      {/* CSS Wave Animation */}
      <div className="absolute bottom-0 w-full h-32">
        <svg className="relative block w-[calc(100%+1.3px)] h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-white/40 animate-wave" 
                style={{ animationDuration: '20s' }}>
            </path>
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-[150px] opacity-40 transform scale-y-[-1]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
           <path fill="#0ea5e9" fillOpacity="0.1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 border-2 border-tech-blue/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-tech-purple/20 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
    </div>
  );
};

export default Background;