import { useEffect, useState } from "react";

function Repository() {
  // Random Repo
  const [githubRepoName, setGitHubRepoName] = useState();
  const [githubRepoDesc, setGitHubRepoDesc] = useState();
  const [githubRepoLang, setGitHubRepoLang] = useState();
  const [githubRepoLink, setGitHubRepoLink] = useState();

  // Fetch Data
  useEffect(() => {
    fetch("https://api.github.com/users/hambergjesse/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          // Pick random repo number from result's length
          const randomNum = Math.floor(Math.random() * result.length);
          setGitHubRepoName(result[randomNum].name);
          setGitHubRepoLang(result[randomNum].language);
          setGitHubRepoDesc(result[randomNum].description);
          setGitHubRepoLink(result[randomNum].html_url);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="Repository">
      <a href={githubRepoLink} target="_blank" rel="noreferrer">
        <div className="Repos-Wrapper">
          <h1>{githubRepoName}</h1>
          <p>{githubRepoDesc}</p>
          <div className="Repos-Info">
            <div className="Repos-Language">
              <div className="JS-Yellow-Circle"></div>
              <p>{githubRepoLang}</p>
            </div>
            <div className="Repos-Category"></div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Repository;
