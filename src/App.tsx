import { Providers } from "./app/providers";
import { HomePage } from "./pages";
import { Hedaer } from "./widgets";

function App() {
  return (
    <Providers>
      <div className="min-h-screen bg-gray-50">
        <Hedaer />
        <HomePage />
      </div>
    </Providers>
  );
}

export default App;
