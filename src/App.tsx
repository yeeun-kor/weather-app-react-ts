import { Providers } from "./app/providers";

function App() {
  return (
    <Providers>
      <main className="min-h-screen bg-gray-50">
        <h1 className="p-4 text-center">날씨 앱</h1>
        {/* TODO: 라우터 추가 예정 */}
      </main>
    </Providers>
  );
}

export default App;
