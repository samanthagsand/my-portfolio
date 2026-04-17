function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I’m Samantha</h1>
        <p>Aspiring data analyst with a focus in crime and healthcare</p>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I’m a Computer Science student with a passion for data, technology, and building meaningful applications. I’m especially interested in data analysis and using tech to solve real world problems in healthcare and criminal justice.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <ProjectCard
            title="Personal Finance Analyzer (AI Project)"
            desc="Created a smart finance tool that learns from past transactions to automatically categorize expenses and analyze financial habits. The system helps users better understand where their money goes and supports smarter budgeting through clear visualizations and AI-driven insights."
          />
          <ProjectCard
            title="Exploratory Data Analysis (VCQ Dataset) "
            desc="This project analyzes the Voluntary Classroom Questionnaire (VCQ) dataset using Python. The notebook demonstrates data preparation, filtering, visualization, descriptive statistics, pivot tables, and statistical testing to explore patterns in student survey data."
          />
          <ProjectCard
            title="Budget Tracker Dashboard"
            desc="This project is a multi-sheet budget tracking dashboard built in Google Sheets to manage income, expenses, and savings.

It helps users monitor spending habits, track financial goals, and visualize how money is distributed across categories."
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: samanthasandoval191@yahoo.com</p>
        <p>GitHub: github.com/samanthagsand</p>
      </section>
    </main>
  );
}

function ProjectCard({ title, desc }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default Home;