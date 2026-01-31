import { Link } from "react-router-dom";
import logo from "../../assets/logo/O.B..png";
const MainFooter = () => {
  return (
    <footer className="layout p-6 rounded-t-4xl footer_background min-h-[80vh] bg-no-repeat bg-cover bg-fixed flex flex-col justify-end">
      <div className="text-white space-y-8">
        <div>
          <h2 className="text-5xl md:text-9xl font-extrabold text-center">
            OB.
          </h2>
        </div>
        <div className="flex justify-between items-center ">
          <address>Miami, FL</address>
          <Link to="#">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;