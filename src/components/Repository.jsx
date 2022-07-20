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
          setGitHubRepoName(result[5].name);
          setGitHubRepoLang(result[5].language);
          setGitHubRepoDesc(result[5].description);
          setGitHubRepoLink(result[5].html_url);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="Repository">
      <a href={githubRepoLink} target="_blank">
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
