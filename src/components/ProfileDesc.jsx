import { useEffect, useState } from "react";

function ProfileDesc() {
  const [githubJobTitle, setGitHubJobTitle] = useState();
  const [githubLocation, setGitHubLocation] = useState();
  const descText =
    "Enjoying delicious coffee, programming and lifting weights in my freetime.";

  useEffect(() => {
    fetch("https://api.github.com/users/hambergjesse")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setGitHubJobTitle(result.bio);
          setGitHubLocation(result.location);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="ProfileDesc">
      <h1>{githubJobTitle}</h1>
      <p>{descText}</p>
      <p className="LocationText">{githubLocation}</p>
    </div>
  );
}

export default ProfileDesc;
