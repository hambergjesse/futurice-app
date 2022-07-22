import githubMark from "./img/Github-Mark.png";

function Footer() {
  return (
    <div className="Footer">
      {/* Github Logo */}
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        <img src={githubMark} alt="" />
      </a>
    </div>
  );
}

export default Footer;
