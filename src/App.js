/* import SASS */
import "./scss/index.scss";

/* import outside components */
import NavAndUser from "./components/NavAndUser";
import ProfileDesc from "./components/ProfileDesc";
import PinnedRepos from "./components/PinnedRepos";
import Statistics from "./components/Statistics";
import Contributions from "./components/Contributions";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavAndUser />
      <ProfileDesc />
      <Statistics />
      <Contributions />
      <PinnedRepos />
      <Footer />
    </div>
  );
}

export default App;
