import { useEffect, useState } from "react";
import githubMark from "./img/Github-Mark.png";

function NavAndUser() {
  // Profile Picture
  const [githubPfp, setGitHubPfp] = useState();
  // First and Last Name
  const [githubFullName, setGitHubFullName] = useState();
  // Username
  const [githubUsername, setGitHubUsername] = useState();
  // Profile
  const [githubProfile, setGitHubProfile] = useState();

  // Fetch Data
  useEffect(() => {
    fetch("https://api.github.com/users/hambergjesse")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setGitHubPfp(result.avatar_url);
          setGitHubFullName(result.name);
          setGitHubUsername(result.login);
          setGitHubProfile(result.html_url);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="NavAndUser">
      <nav className="Header">
        {/* Github Logo */}
        <img src={githubMark} alt="" />
        {/* Hamburger Menu */}
        <div className="hamburgerMenu">
          <div className="hamBar"></div>
          <div className="hamBarMid"></div>
          <div className="hamBar"></div>
        </div>
      </nav>
      {/* Profile Picture */}
      <div className="Avatar">
        <img src={githubPfp} className="Avatar" alt="" />
      </div>
      {/* Name & Username */}
      <h1>{githubFullName}</h1>
      <p>@{githubUsername}</p>
      {/* Follow Button */}
      <a href={githubProfile} target="_blank" rel="noreferrer">
        <div className="followButton">
          <h2>Follow</h2>
        </div>
      </a>
    </div>
  );
}

export default NavAndUser;
