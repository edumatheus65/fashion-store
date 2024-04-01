import { Footer } from "../Footer";
import { Header } from "../Header";

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <div className="defaultTemplate">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
