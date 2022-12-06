import  styles  from '../styles/Skills.module.scss'

const Skills = () => {
   return (
      <div className={styles.skills}>
         <div className={styles.about_skills}>
               <h1 className={styles.skills_title}> Skills & Experience</h1>
               <p className={styles.skills_describe}>
                  <p> In my previous job , i have worked for 2 years as a commodity market research analyst where I organised  of marketing research, analysis of the market and brands of competitors, preparation of sales reports and sales analysis, product sales planning.</p>
                  <p>This  experience  has made to improve my planning skills and organisation.</p>
                  <p>Also i worked as an economist for 2 years made various sales reports and product price analyses.</p>
                  <p>This experience helpS me become persistent and have strategic thinking with excellent knowledge Microsoft Office and 1C Entrepreneur.</p>
               </p>
         
          </div>
         <div className={styles.skills_experience}> 
               <div className={styles.skills_list}>
                  <p>React</p>
                  <p>Redux</p>
                  <p>Next JS</p>
                  <p>Node JS</p>
                  <p>Typescript</p>
                  <p>Javascript</p>
                  <p>Git</p>
                  <p>HTML</p>
                  <p>Scc/Scss</p>
               </div>
            <section className={styles.experience}>
               <h2> Analyst in commodity market research </h2>
               <h3>LLC "MD Eurotrade", Kyiv</h3>
               <h4>11.2019 – 08.2021</h4>
               <p>Organization of marketing research, analysis of the market and brands of competitors</p>
               <p>Preparation of sales reports and sales analysis;</p>
            </section>
            <section className={styles.experience}>
               <h2> Economist of the planning and analytical department</h2>
               <h3>PJSC "Tavria, House of vintage cognacs", Nova Khahovka</h3>
               <h4>11.2017 - 07.2019</h4>
               <p>Compilation and submission of statistical reports</p>
               <p>Calculation of efficiency of export supply</p>
               <p>Development of free selling and retail prices for products.</p>
              </section>
               </div>
        </div>
      
   )
}

export default Skills;