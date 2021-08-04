/// <reference path="index.d.ts" />

declare namespace kakao.maps {
  /**
   * @see [Coords](http://apis.map.kakao.com/web/documentation/#Coords)
   */
  export class Coords {
    /**
     * Wcongnamul 좌표 정보를 가지고 있는 객체를 생성한다.
     *
     * @param x
     * @param y
     */
    constructor(x: number, y: number);

    /**
     * x 좌표를 반환한다.
     */
    public getX(): number;

    /**
     * y 좌표를 반환한다.
     */
    public getY(): number;

    /**
     * 객체가 가지고 있는 좌표와 같은 좌표를 가지고 있는 객체인지 비교한다.
     *
     * @param coords
     */
    public equals(coords: Coords): boolean;

    /**
     * 객체가 가지고 있는 좌표를 문자열로 반환한다.
     */
    public toString(): string;

    /**
     * 객체가 가지고 있는 좌표를 WGS84 좌표로 반환한다.
     */
    public toLatLng(): LatLng;
  }
}
