import Navbar from "./components/Navbar";
import Header from "./components/header";
import Button from "./components/button";
import TextForm from "./components/textform";

function App() {
  return (
    <div className="App">
      <Navbar Title="Text Analyzer" />
      <Header Heading="Enter the Text" />
      <TextForm Number="10" />
      <Button />
    </div>
  );
}

export default App;
