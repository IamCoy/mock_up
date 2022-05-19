import { BiUser, BiLockAlt } from "react-icons/bi";
import { Header } from "./Header";

export function Form() {
  return (
      <div>
    <form>
      <Header></Header>
      <div className="inputs">
        <BiUser id="userIcon" /> <input type="text" placeholder="Username" />
        <br></br>
        <BiLockAlt id="lockIcon" /> <input type="text" placeholder="Password" />{" "}
        <br></br>
      </div>
      <label htmlFor="lang">Language</label>
      <select id="lang" name="lang">
        <option value="Dansk">Dansk</option>
        <option value="Deutsch">Deutsch</option>
        <option value="Espanol">Espanol</option>
        <option value="English">English</option>
        <option value="Suomi">Suomi</option>
        <option value="Francais">Francais</option>
        <option value="Italiano">Italiano</option>
        <option value="Portugues">Portugues</option>
      </select>
      <br />
      <label>
        <input type="checkbox" checked /> Remember me on this computer{" "}
      </label>{" "}
      <br />
      <a href="#">Forgot Password?</a> <br />
      <h4> Your Vision, <em>in Print </em></h4>
    </form>

   
   </div>
  );
}
