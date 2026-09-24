import { useState } from 'react';
import './styles.css';

function App() {
  const quizzes = [
    {
      question: "What is the average of 10, 20, and 30?",
      options: ["15", "20", "25", "30"],
      answer: "20"
    },
    {
      question: "Which data structure works on FIFO?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      answer: "Queue"
    },
    {
      question: "If coding is 65% and aptitude is 78%, which needs more focus?",
      options: ["Aptitude", "Coding", "Both equal", "Neither"],
      answer: "Coding"
    }
  ];

  const [quiz, setQuiz] = useState(null);
  const [selected, setSelected] = useState("");
  const [mentorPlan, setMentorPlan] = useState("");

  const generateQuiz = () => {
    const randomQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];
    setQuiz(randomQuiz);
    setSelected("");
  };

  const askMentor = () => {
    setMentorPlan(
      "This week: focus 45 minutes daily on coding fundamentals, 20 minutes on aptitude drills, and 15 minutes on communication practice. Take 2 mock interviews and review weak areas every Sunday."
    );
  };

  return (
    <>
      <nav className="navbar">
        <div className="container nav-inner">
          <div className="brand">
            <div className="brand-badge">AI</div>
            <span>Smart Student Learning & Placement Assistant</span>
          </div>

          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#modules">Modules</a>
            <a href="#practice">Practice</a>
            <a href="#tools">AI Tools</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">AI-driven learning, mock interviews, and placement readiness</span>
            <h1>From confusion to confidence - a complete path to placement success</h1>
            <p>
              Personalized roadmaps, adaptive practice, real-time analytics, and AI mock
              interviews - all in one student-first platform built for better outcomes.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary">Talk to AI Mentor</button>
              <button className="btn btn-secondary">Explore Modules</button>
            </div>

            <div className="stats">
              <div className="stat-card glass">
                <h3>+85%</h3>
                <p>Avg placement improvement</p>
              </div>
              <div className="stat-card glass">
                <h3>1200+</h3>
                <p>Practice tests</p>
              </div>
              <div className="stat-card glass">
                <h3>24/7</h3>
                <p>AI guidance</p>
              </div>
            </div>
          </div>

          <div className="dashboard-card glass">
            <div className="dashboard-top">
              <div>
                <h3>Interactive Dashboard Preview</h3>
                <p style={{ color: "var(--muted)", marginTop: "4px" }}>
                  Student performance and roadmap insights
                </p>
              </div>
              <span className="badge-live">Live Analytics</span>
            </div>

            <div className="mini-grid">
              <div className="mini-card">
                <h4>Adaptive Roadmap</h4>
                <p style={{ color: "var(--muted)" }}>
                  Tailored weekly plans based on your strengths.
                </p>
              </div>
              <div className="mini-card">
                <h4>Mock Interviews</h4>
                <p style={{ color: "var(--muted)" }}>
                  AI feedback on answers, confidence, and speech.
                </p>
              </div>
            </div>

            <div className="hero-panel-footer">
              <div className="mini-card">
                <h4>Aptitude Progress</h4>
                <div className="bar"><span style={{ width: "78%" }}></span></div>
              </div>
              <div className="mini-card">
                <h4>Coding Progress</h4>
                <div className="bar"><span style={{ width: "65%" }}></span></div>
              </div>
              <div className="mentor-box">
                AI Mentor Suggestion: Focus on coding consistency and timed reasoning drills this week.
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="features" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Core Features</h2>
            <p>
              A student-first platform that combines structured preparation, instant feedback,
              and engaging practice in one place.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card glass">
              <div className="icon">🧭</div>
              <h3>Personalized Roadmaps</h3>
              <p>AI builds a study plan that adapts as you progress and improves based on performance.</p>
            </div>

            <div className="feature-card glass">
              <div className="icon">📊</div>
              <h3>Real-time Analytics</h3>
              <p>Visualize strengths, weak topics, progress trends, and improvement patterns clearly.</p>
            </div>

            <div className="feature-card glass">
              <div className="icon">🧪</div>
              <h3>Smart Mock Tests</h3>
              <p>Take timed tests with detailed solutions, topic-wise analysis, and improvement tips.</p>
            </div>

            <div className="feature-card glass">
              <div className="icon">🎤</div>
              <h3>AI Interview Coach</h3>
              <p>Practice HR and technical interviews with instant answer and speech feedback.</p>
            </div>

            <div className="feature-card glass">
              <div className="icon">💡</div>
              <h3>Concept Paths</h3>
              <p>Learn by concept using micro-lessons, short quizzes, and progressive checkpoints.</p>
            </div>

            <div className="feature-card glass">
              <div className="icon">🏆</div>
              <h3>Leaderboard & Rewards</h3>
              <p>Gamified milestones and rankings keep students motivated and consistent.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Modules - Deep Dive</h2>
            <p>
              Comprehensive preparation across academics, aptitude, technical readiness, and communication skills.
            </p>
          </div>

          <div className="modules-grid">
            <div className="module-card glass">
              <h3>AI Learning Module</h3>
              <p>
                Adaptive schedules, concept-based learning paths, performance recommendations,
                and daily or weekly progress reports.
              </p>
              <ul>
                <li>Personalized weekly plan</li>
                <li>Micro-lessons with quick checks</li>
                <li>Progress heatmaps and smart suggestions</li>
              </ul>
            </div>

            <div className="module-card glass">
              <h3>Aptitude, Reasoning & Technical</h3>
              <p>
                Quantitative aptitude, logical reasoning, DSA practice, company-specific sets,
                and coding analytics for targeted improvement.
              </p>
              <ul>
                <li>Timed aptitude drills</li>
                <li>Step-by-step problem solutions</li>
                <li>Code-run analytics and performance scoring</li>
              </ul>
            </div>

            <div className="module-card glass">
              <h3>Communication Skills</h3>
              <p>
                AI mock interviews, resume support, speech and pronunciation feedback, and HR guidance
                for better interview confidence.
              </p>
              <ul>
                <li>HR question practice</li>
                <li>Answer quality feedback</li>
                <li>Pronunciation and speaking confidence review</li>
              </ul>
            </div>

            <div className="module-card glass">
              <h3>Feasibility & Integration</h3>
              <p>
                Cloud-native architecture, simple college onboarding, and scalable access for
                students from all streams.
              </p>
              <ul>
                <li>Easy institutional integration</li>
                <li>Scalable for large student groups</li>
                <li>Accessible anytime across devices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="practice" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Interactive Practice</h2>
            <p>
              Try a quick aptitude drill and get roadmap guidance instantly with a lightweight React interface.
            </p>
          </div>

          <div className="practice-layout">
            <div className="practice-card glass">
              <h3>Quick Aptitude Drill</h3>
              <p>
                Generate a short multiple-choice quiz tailored to your learning path and test your readiness.
              </p>

              <div style={{ marginTop: "18px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button className="btn btn-primary" onClick={generateQuiz}>Generate Quiz</button>
                <button className="btn btn-secondary" onClick={askMentor}>Ask AI Mentor for a Plan</button>
              </div>

              {quiz && (
                <div className="quiz-box">
                  <h4>{quiz.question}</h4>

                  <div className="quiz-options">
                    {quiz.options.map((option, index) => {
                      let className = "quiz-option";

                      if (selected) {
                        if (option === quiz.answer) className += " correct";
                        else if (option === selected) className += " wrong";
                      }

                      return (
                        <div
                          key={index}
                          className={className}
                          onClick={() => !selected && setSelected(option)}
                        >
                          {option}
                        </div>
                      );
                    })}
                  </div>

                  {selected && (
                    <p style={{ marginTop: "14px", color: "#dbe8ff" }}>
                      {selected === quiz.answer
                        ? "Correct answer. Great job."
                        : `Not quite. The correct answer is ${quiz.answer}.`}
                    </p>
                  )}
                </div>
              )}

              {mentorPlan && (
                <div className="mentor-response">
                  <strong>AI Mentor Plan:</strong>
                  <p style={{ marginTop: "8px", color: "#dce8ff" }}>{mentorPlan}</p>
                </div>
              )}
            </div>

            <div className="snapshot-card glass">
              <h3>Progress Snapshot</h3>
              <p>Track strengths, identify weak areas, and improve consistently with guided analytics.</p>

              <div className="progress-list">
                <div className="progress-item">
                  <strong><span>Aptitude</span><span>78%</span></strong>
                  <div className="bar"><span style={{ width: "78%" }}></span></div>
                </div>

                <div className="progress-item">
                  <strong><span>Coding</span><span>65%</span></strong>
                  <div className="bar"><span style={{ width: "65%" }}></span></div>
                </div>

                <div className="progress-item">
                  <strong><span>Communication</span><span>72%</span></strong>
                  <div className="bar"><span style={{ width: "72%" }}></span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="two-col-bottom">
            <div className="testimonial-card glass">
              <h3>What students say</h3>
              <p>
                "The AI mock interview and roadmap system helped me organize my preparation.
                I improved my confidence and cleared my placement rounds much faster."
              </p>
              <p style={{ marginTop: "14px", color: "#ffffff", fontWeight: "700" }}>- Interview Ace</p>
            </div>

            <div id="tools" className="tools-card glass">
              <h3>AI Tools</h3>
              <div className="tools-list">
                <div className="tool-item">
                  <strong>AI Mentor Chat</strong>
                  <p>Ask for study plans, summaries, interview tips, and revision strategies.</p>
                </div>
                <div className="tool-item">
                  <strong>Quiz Generator</strong>
                  <p>Get instant MCQs tailored to your roadmap, topic, or performance gaps.</p>
                </div>
                <div className="tool-item">
                  <strong>Mock Interview</strong>
                  <p>Practice answers and receive feedback on communication and confidence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-card glass">
            <h3 style={{ marginBottom: "10px", color: "#fff" }}>
              Smart Student Learning & Placement Assistant
            </h3>
            <p>AI-driven learning - Mock interviews - Placement readiness</p>
            <p style={{ marginTop: "10px" }}>Contact | Sign Up</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;