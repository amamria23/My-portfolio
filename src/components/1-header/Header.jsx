import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("mode") ?? 'dark');
  useEffect(() => {
    if (theme == "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }else{
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="flex">
      <div className="esc" />
      <button
        className="showModal icon-th-menu"
        onClick={() => {
          setshowModal(true);
        }}
      />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className="moon"
        onClick={() => {
          localStorage.setItem("mode", theme == "light" ? "dark" : "light");
          setTheme(localStorage.getItem('mode'))
        }}
      >
        {theme == "dark" && <span className="icon-moon-o" />}
        {theme == "light" && <span className="icon-sun" />}
      </button>
      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                onClick={() => {
                  setshowModal(false);
                }}
                className="close icon-close"
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
