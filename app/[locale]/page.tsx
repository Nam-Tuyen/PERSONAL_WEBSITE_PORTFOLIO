import {getLocale, getTranslations} from 'next-intl/server';
import LocaleSwitch from './components/LocaleSwitch';
import Nav from './components/Nav';
import {Locale} from '@/i18n/routing';

export default async function HomePage() {
  const locale = (await getLocale()) as Locale;
  const tHero = await getTranslations('Hero');
  const tContact = await getTranslations('Contact');
  const tAbout = await getTranslations('About');
  const tEducation = await getTranslations('Education');
  const tSkills = await getTranslations('Skills');
  const tCertifications = await getTranslations('Certifications');
  const tExperience = await getTranslations('Experience');
  const tProjects = await getTranslations('Projects');

  return (
    <>
      {/* Header + Switch */}
      <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: '20px 0'}}>
        <code style={{fontFamily: 'ui-monospace'}}>11011000000100001111</code>
        <LocaleSwitch current={locale} />
      </header>

      {/* Nav */}
      <Nav locale={locale} />

      {/* Hero */}
      <section id="home" className="section" style={{padding: '40px 0'}}>
        <div className="muted">{tHero('hello')}</div>
        <h1 style={{fontSize: '2.5rem', margin: '10px 0'}}>{tHero('name')}</h1>
        <p style={{fontSize: '1.2rem', margin: '10px 0'}}>{tHero('role')}</p>
        <blockquote style={{margin: '20px 0', fontStyle: 'italic', fontSize: '1.1rem'}}>{tHero('quote')}</blockquote>
        <div style={{display: 'flex', gap: 12, marginTop: '20px'}}>
          <a href="#" className="btn" style={{padding: '10px 20px', background: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px'}}>{tHero('download')}</a>
          <a href={`/${locale}#projects`} className="btn" style={{padding: '10px 20px', background: 'transparent', color: '#007bff', textDecoration: 'none', borderRadius: '5px', border: '1px solid #007bff'}}>{tHero('viewProjects')}</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section" style={{padding: '40px 0'}}>
        <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>{tAbout('title')}</h2>
        <p style={{lineHeight: '1.6', fontSize: '1.1rem'}}>{tAbout('description')}</p>
      </section>

      {/* Education */}
      <section id="edu" className="section" style={{padding: '40px 0'}}>
        <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>{tEducation('title')}</h2>
        <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px'}}>
          <h3 style={{fontSize: '1.5rem', marginBottom: '10px'}}>{tEducation('degree')}</h3>
          <p style={{fontSize: '1.1rem', marginBottom: '5px'}}>{tEducation('university')}</p>
          <p style={{color: '#666', marginBottom: '5px'}}>{tEducation('period')}</p>
          <p style={{color: '#666', marginBottom: '5px'}}>{tEducation('gpa')}</p>
          <p style={{color: '#666'}}>{tEducation('ielts')}</p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section" style={{padding: '40px 0'}}>
        <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>{tSkills('title')}</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
          <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px'}}>
            <h3 style={{fontSize: '1.2rem', marginBottom: '10px'}}>{tSkills('programming')}</h3>
            <p>Python • SQL • R</p>
          </div>
          <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px'}}>
            <h3 style={{fontSize: '1.2rem', marginBottom: '10px'}}>{tSkills('dataTools')}</h3>
            <p>Power BI • Tableau • Excel</p>
          </div>
          <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px'}}>
            <h3 style={{fontSize: '1.2rem', marginBottom: '10px'}}>{tSkills('productManagement')}</h3>
            <p>User Research • Product Discovery • Product Analytics</p>
          </div>
          <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px'}}>
            <h3 style={{fontSize: '1.2rem', marginBottom: '10px'}}>{tSkills('database')}</h3>
            <p>MySQL • PostgreSQL • MongoDB</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="awards" className="section" style={{padding: '40px 0'}}>
        <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>{tCertifications('title')}</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
          <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px'}}>
            <h3 style={{fontSize: '1.2rem', marginBottom: '10px'}}>{tCertifications('googleCert')}</h3>
            <p style={{color: '#666'}}>{tCertifications('clickToView')}</p>
          </div>
          <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px'}}>
            <h3 style={{fontSize: '1.2rem', marginBottom: '10px'}}>{tCertifications('nvidiaCert')}</h3>
            <p style={{color: '#666'}}>{tCertifications('clickToView')}</p>
          </div>
          <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px'}}>
            <h3 style={{fontSize: '1.2rem', marginBottom: '10px'}}>{tCertifications('journalArticle')}</h3>
            <p style={{color: '#666'}}>{tCertifications('clickToView')}</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="exp" className="section" style={{padding: '40px 0'}}>
        <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>{tExperience('title')}</h2>
        
        {/* Maybank Experience */}
        <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
          <h3 style={{fontSize: '1.5rem', marginBottom: '10px'}}>{tExperience('maybank.position')} – {tExperience('maybank.company')}</h3>
          <p style={{color: '#666', marginBottom: '10px'}}>{tExperience('maybank.period')} | {tExperience('maybank.location')}</p>
          <h4 style={{fontSize: '1.2rem', marginBottom: '10px'}}>{tExperience('maybank.description')}</h4>
          <ul style={{paddingLeft: '20px'}}>
            {tExperience('maybank.achievements').map((achievement: string, index: number) => (
              <li key={index} style={{marginBottom: '5px', lineHeight: '1.5'}}>{achievement}</li>
            ))}
          </ul>
        </div>

        {/* Agribank Experience */}
        <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px'}}>
          <h3 style={{fontSize: '1.5rem', marginBottom: '10px'}}>{tExperience('agribank.position')} – {tExperience('agribank.company')}</h3>
          <p style={{color: '#666', marginBottom: '10px'}}>{tExperience('agribank.period')} | {tExperience('agribank.location')}</p>
          <h4 style={{fontSize: '1.2rem', marginBottom: '10px'}}>{tExperience('agribank.description')}</h4>
          <ul style={{paddingLeft: '20px'}}>
            {tExperience('agribank.achievements').map((achievement: string, index: number) => (
              <li key={index} style={{marginBottom: '5px', lineHeight: '1.5'}}>{achievement}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section" style={{padding: '40px 0'}}>
        <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>{tProjects('title')}</h2>
        
        {/* Project 1 */}
        <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
          <h3 style={{fontSize: '1.5rem', marginBottom: '10px'}}>{tProjects('automatedReport.name')}</h3>
          <p style={{color: '#666', marginBottom: '15px'}}>{tProjects('automatedReport.period')}</p>
          <ul style={{paddingLeft: '20px', marginBottom: '15px'}}>
            {tProjects('automatedReport.description').map((desc: string, index: number) => (
              <li key={index} style={{marginBottom: '8px', lineHeight: '1.5'}}>{desc}</li>
            ))}
          </ul>
          <a href="#" style={{padding: '8px 16px', background: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px'}}>{tProjects('viewProject')}</a>
        </div>

        {/* Project 2 */}
        <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
          <h3 style={{fontSize: '1.5rem', marginBottom: '10px'}}>{tProjects('airbnbPredictor.name')}</h3>
          <p style={{color: '#666', marginBottom: '15px'}}>{tProjects('airbnbPredictor.period')}</p>
          <ul style={{paddingLeft: '20px', marginBottom: '15px'}}>
            {tProjects('airbnbPredictor.description').map((desc: string, index: number) => (
              <li key={index} style={{marginBottom: '8px', lineHeight: '1.5'}}>{desc}</li>
            ))}
          </ul>
          <a href="#" style={{padding: '8px 16px', background: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px'}}>{tProjects('viewProject')}</a>
        </div>

        {/* Project 3 */}
        <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px'}}>
          <h3 style={{fontSize: '1.5rem', marginBottom: '10px'}}>{tProjects('hrAnalytics.name')}</h3>
          <p style={{color: '#666', marginBottom: '15px'}}>{tProjects('hrAnalytics.period')}</p>
          <ul style={{paddingLeft: '20px', marginBottom: '15px'}}>
            {tProjects('hrAnalytics.description').map((desc: string, index: number) => (
              <li key={index} style={{marginBottom: '8px', lineHeight: '1.5'}}>{desc}</li>
            ))}
          </ul>
          <a href="#" style={{padding: '8px 16px', background: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px'}}>{tProjects('viewProject')}</a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section" style={{padding: '40px 0'}}>
        <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>{tContact('title')}</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 12}}>
          <div>
            <div><strong>Email:</strong> <a href="mailto:bingo.namtuyen@gmail.com">bingo.namtuyen@gmail.com</a></div>
            <div><strong>{tContact('phone')}:</strong> <a href="tel:+84921270404">0921270404</a></div>
            <div><strong>{tContact('location')}:</strong> {tContact('locationValue')}</div>
          </div>
          <div>
            <div><a href="https://www.linkedin.com/in/tuyen-le-nam-7614a1269/">LinkedIn</a></div>
            <div><a href="https://github.com/Nam-Tuyen">GitHub</a></div>
          </div>
        </div>
      </section>
    </>
  );
}
