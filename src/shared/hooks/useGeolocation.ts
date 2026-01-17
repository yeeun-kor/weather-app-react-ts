import { useEffect, useState } from "react";

export const useGeolocation = () => {
  //상태
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  //사용자 현재위치 불러와서 세팅하기
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (userLocation) => {
        setLocation({
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
        });
      },
      (error) => {
        setError(error.message);
      }
    );
  }, []);

  //사용자의 위치(위도경도)와 에러값 반환
  return { location, error };
};
