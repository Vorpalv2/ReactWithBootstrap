import Navbar from "./components/Navbar";
import Header from "./components/header";
import Button from "./components/button";
import TextForm from "./components/textform";

function App() {
  return (
    <div className="App">
      <Navbar Title="Homepage" />
      <Header Heading="Testing" />
      <TextForm Number="10" />
      <Button />
    </div>
  );
}

export default App;
