/// <reference path="index.d.ts" />
declare namespace kakao.maps {
  /**
   * @see [RoadviewOverlay](https://apis.map.kakao.com/web/documentation/#RoadviewOverlay)
   *
   * 로드뷰가 존재하는 경로를 표시하는 선이 그려진 오버레이
   */
  export class RoadviewOverlay {
    /**
     * 지도 위에 로드뷰 선이 그려진 타일을 올린다.
     */
    constructor();

    /**
     * 지도에 로드뷰 선을 그린다.
     * null 을 지정하면 선을 제거한다.
     * @param map
     */
    setMap(map: Map | null): void;

    /**
     * 로드뷰 선이 그려져있는 지도를 반환한다.
     * @param map
     */
    getMap(): Map;
  }
}
