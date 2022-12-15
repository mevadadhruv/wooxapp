import { useState } from "react";
import { BookNowText } from "./components/Data/BookNowData";
import { FooterData } from "./components/Data/FooterData";
import BookNow from "./pages/BookNow";
import Center from "./pages/Center";
import Explore from "./pages/Explore";
import Footer from "./pages/Footer";
import Nav from "./pages/Nav";
function App() {
  const [DataText, setBookNowText] = useState(BookNowText);
  const [FooterTextData, setFooterData] = useState(FooterData);

  return (
    <div className="page">
      <Nav />
      <Explore />
      <Center />
      <BookNow dataText={DataText} />
      <Footer footerTextData={FooterTextData} />
    </div>
  );
}

export default App;
