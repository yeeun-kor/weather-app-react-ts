import { useGeolocation } from "../shared";

export const UserCurrentWeather = () => {
  const { location, error } = useGeolocation();
  console.log("위치:", location);
  console.log("에러:", error);
  if (error) {
    return <div className="text-red-500"> 위치 정보를 가져올 수 없습니다.</div>;
  }

  if (!location) {
    return <div>위치 정보 로딩 중...</div>;
  }
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold mb-2">현재 위치</h3>
      <p>위도: {location.latitude}</p>
      <p>경도: {location.longitude}</p>
    </div>
  );
};
