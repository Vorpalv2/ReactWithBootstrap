import Navbar from "./components/Navbar";
import Button from "./components/button";
import Header from "./components/header";
import TextForm from "./components/textform";

function App() {
  return (
    <div className="App">
      <Navbar Title="Homepage" />
      <Header Heading="Testing" />
      <TextForm Number="10" ExampleText="Write your Text below" />
      <Button />
    </div>
  );
}

export default App;
