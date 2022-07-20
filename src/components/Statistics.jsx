import { useEffect, useState } from "react";

function Statistics() {
  // Repo Amount
  const [githubRepoNum, setGitHubRepoNum] = useState();
  // Total Stars
  const [githubStarsNum, setGitHubStarsNum] = useState();
  // Followers
  const [githubFollowers, setGitHubFollowers] = useState();
  // Following
  const [githubFollowing, setGitHubFollowing] = useState();

  // Fetch Repo Amount
  useEffect(() => {
    fetch("https://api.github.com/users/hambergjesse/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setGitHubRepoNum(result.length);
          console.log(result.length);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  // Fetch Total Stars
  useEffect(() => {
    fetch("https://api.github.com/users/hambergjesse/starred")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setGitHubStarsNum(result.length);
          console.log(result.length);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  // Fetch Followers & Following
  useEffect(() => {
    fetch("https://api.github.com/users/hambergjesse")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setGitHubFollowers(result.followers);
          setGitHubFollowing(result.following);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="Statistics">
      <div className="stat-display">
        <h1>{githubRepoNum}</h1>
        <p>repositories</p>
      </div>
      <div className="stat-display">
        <h1>{githubStarsNum}</h1>
        <p>total stars</p>
      </div>
      <div className="stat-display">
        <h1>{githubFollowers}</h1>
        <p>followers</p>
      </div>
      <div className="stat-display">
        <h1>{githubFollowing}</h1>
        <p>following</p>
      </div>
    </div>
  );
}

export default Statistics;
