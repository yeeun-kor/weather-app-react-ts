import { UserCurrrentWeather } from "../features/UserCurrentWeather";

export function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl mb-4">현재 위치 날씨</h2>
      <UserCurrrentWeather />
    </div>
  );
}
