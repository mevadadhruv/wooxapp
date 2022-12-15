import BookNow from "./pages/BookNow";
import Center from "./pages/Center";
import Explore from "./pages/Explore";
import Footer from "./pages/Footer";
import Nav from "./pages/Nav";
function App() {
  return (
    <div className="page">
      <Nav />
      <Explore />
      <Center />
      <BookNow />
      <Footer />
    </div>
  );
}

export default App;
