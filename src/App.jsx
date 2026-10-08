import { useState } from "react";
import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import Footer from "./components/Footer";

function App() {
  const [practiceCount, setPracticeCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  const completePractice = () => {
    setPracticeCount(practiceCount + 1);
  };

  const resetPractice = () => {
    setPracticeCount(0);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div>
      <Header />

      {showProfile && (
        <StudentProfile
          name="Anu"
          department="CSE"
          year="3rd Year"
          practiceCount={practiceCount}
        />
      )}

      <button onClick={completePractice}>
        Complete Practice
      </button>

      <button onClick={resetPractice}>
        Reset
      </button>

      <button onClick={toggleProfile}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      <Footer />
    </div>
  );
}

export default App;