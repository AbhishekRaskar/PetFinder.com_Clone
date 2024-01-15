import { MainRoutes } from "./routes/MainRoutes"
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';

function App() {
  return (
    <div className="App">
      <br />
      <Navbar />
      <br />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
