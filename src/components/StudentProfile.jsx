import { useEffect } from "react";

function StudentProfile({ name, department, year, practiceCount }) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${practiceCount}`;

    return () => {
      document.title = previousTitle;
    };
  }, [practiceCount]);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Year: {year}</p>
      <p>Practice Sessions Completed: {practiceCount}</p>
    </div>
  );
}

export default StudentProfile;