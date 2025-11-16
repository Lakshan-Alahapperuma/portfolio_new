export default function Experience() {
  const experienceData = [
    { 
      icon: '📚',
      date: '2020 — Present',
      title: 'Teaching — Sasnaka Sansada Foundation', 
      desc: 'Taught mathematics to high school students across multiple schools.',
      achievements: ['Mentored 50+ students', 'Created learning materials', 'Improved student engagement']
    },
    { 
      icon: '💼',
      date: '2019 — 2021',
      title: 'Web & Project Development', 
      desc: 'Led development of full-stack web applications for real-world use cases.',
      achievements: ['Built VetiPlus platform', 'Managed project timelines', 'Collaborated with teams']
    },
    { 
      icon: '🎯',
      date: '2022',
      title: 'UI/UX Design Contributor', 
      desc: 'Designed user interfaces and improved user experience across multiple projects.',
      achievements: ['Created design systems', 'Conducted user testing', 'Optimized conversions']
    }
  ]

  return (
    <section id="experience" className="section" aria-labelledby="exp-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="exp-heading">Experience & Activities</h2>
          <p className="section-subtitle">Professional journey and accomplishments</p>
        </div>

        <ul className="timeline" role="list" aria-label="Work and activity timeline">
           {experienceData.map((exp, idx) => (
            <li key={idx} className="item" aria-labelledby={`exp-${idx}-title`} aria-describedby={`exp-${idx}-desc`}>
              <div className="timeline-icon" aria-hidden="true">{exp.icon}</div>
              <div className="timeline-content">
                <h4 id={`exp-${idx}-title`}>{exp.title}</h4>
                <time className="timeline-date" dateTime={exp.date.replace(/\s/g, '')} aria-label={`Dates: ${exp.date}`}>{exp.date}</time>
                <p id={`exp-${idx}-desc`}>{exp.desc}</p>
                <ul className="achievements" aria-label={`Achievements for ${exp.title}`}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>✓ {achievement}</li>
                  ))}
                </ul>
              </div>
            </li>
           ))}
        </ul>
       </div>
     </section>
   )
 }
