/// <reference path="index.d.ts" />
declare namespace kakao.maps {
  /**
   * @see [Viewpoint](https://apis.map.kakao.com/web/documentation/#Viewpoint)
   */
  export class Viewpoint {
    pan: number;
    tilt: number;
    zoom?: number;
    panoId?: number;

    /**
     * 로드뷰를 생성한다.
     * @param pan 가로 각도, 0부터 360 사이의 값으로 북쪽부터 시계방향으로 대응한다.
     * @param tilt 세로 각도, -90부터 90 사이의 값으로 위쪽부터 아래쪽으로 대응한다.
     * @param zoom 확대 수준, -3부터 3 사이의 정수이다.
     * @param panoId 특정 위치의 로드뷰 고유의 아이디 값
     */
    constructor(pan: number, tilt: number, zoom?: number, panoId?: number);
  }

  /**
   * @see [RoadviewClient](https://apis.map.kakao.com/web/documentation/#RoadviewClient)
   */
  export class RoadviewClient {
    /**
     * 특정 좌표 근처의 파노라마 ID 등 로드뷰와 관련된 데이터를 다룬다.
     */
    constructor();

    /**
     * 특정 좌표에서 반경 내 가장 가까운 로드뷰 파노라마 ID를 구한다.
     * @param position
     * @param radius
     * @param callback
     */
    getNearestPanoId(
      position: LatLng,
      radius: number,
      callback: (panoId: number) => void
    ): number;
  }
}
