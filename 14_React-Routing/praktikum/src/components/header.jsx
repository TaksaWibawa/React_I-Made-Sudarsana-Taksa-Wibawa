import Logo from "../assets/bootstrap.png";
import article from "../constants/article.json";
import { useState } from "react";

function Header() {
  const { title, description } = article;
  const [lang, setLang] = useState("en");

  const handleChangeLang = () => {
    setLang((prevLang) => (prevLang === "en" ? "id" : "en"));
  };

  return (
    <header className="row justify-content-center mt-5">
      <div className="col-8 px-0 d-flex justify-content-center align-content-center">
        <img className="logo" src={Logo} alt="Bootstrap" />
      </div>
      <div className="col-8 px-0 py-3 text-center d-flex flex-column align-items-center gap-2">
        <h1>{lang === "en" ? title.en : title.id}</h1>
        <p className="fs-5 w-75">
          {lang === "en" ? description.en : description.id}
        </p>
        <button className="btn btn-primary" onClick={handleChangeLang}>
          {lang === "en" ? "Change to Indonesia" : "Ubah ke Bahasa Inggris"}
        </button>
      </div>
    </header>
  );
}

export default Header;
