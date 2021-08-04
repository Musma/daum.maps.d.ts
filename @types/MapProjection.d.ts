/// <reference path="index.d.ts" />
declare namespace kakao.maps {
  /**
   * @see [MapProjection](http://apis.map.kakao.com/web/documentation/#MapProjection)
   */
  export class MapProjection {
    /**
     * 지도 좌표에 해당하는 위치 좌표(pixel)를 반환한다.
     * 해당 위치 좌표는 지도 엘리먼트 내부의 레이어 위치를 반영한 좌표이다.
     *
     * @param latlng
     */
    public pointFromCoords(latlng: LatLng): Point;

    /**
     * 지도 좌표에 해당하는 위치 좌표(pixel)를 반환한다.
     * 해당 위치 좌표는 지도 엘리먼트 내부의 레이어 위치를 반영한 좌표이다.
     *
     * @param latlng
     */
    public viewpointFromCoords(latlng: LatLng, altitude: number): Viewpoint;

    /**
     * 위치 좌표(pixel)에 해당하는 지도 좌표를 반환한다.
     * 해당 위치 좌표는 지도 엘리먼트 내부의 타일 레이어 위치를 반영한 좌표이다.
     *
     * @param point
     */
    public coordsFromPoint(point: Point): LatLng;

    /**
     * 지도 좌표에 해당하는 화면 좌표(pixel)를 반환한다.
     * 해당 화면 좌표는 지도 엘리먼트의 좌상단을 기준으로 한 좌표이다.
     *
     * @param latlng
     */
    public containerPointFromCoords(latlng: LatLng): Point;

    /**
     * 화면 좌표(pixel)에 해당하는 지도 좌표를 반환한다.
     * 해당 화면 좌표는 지도 엘리먼트의 좌상단을 기준으로 한 좌표이다.
     *
     * @param point
     */
    public coordsFromContainerPoint(point: Point): LatLng;
  }
}
