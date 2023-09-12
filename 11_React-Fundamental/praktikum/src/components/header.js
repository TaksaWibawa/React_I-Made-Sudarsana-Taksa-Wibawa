import Logo from "@/assets/bootstrap.png";
import Image from "next/image";

function Header() {
  return (
    <header className="row justify-content-center">
      <div className="col-8 px-0 d-flex justify-content-center align-content-center">
        <Image className="logo" src={Logo} alt="Bootstrap" />
      </div>
      <div className="col-8 px-0 py-3 text-center">
        <h1>Create Product</h1>
        <p className="fs-5">
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </p>
      </div>
    </header>
  );
}

export default Header;
