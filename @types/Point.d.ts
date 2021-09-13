/// <reference path="index.d.ts" />
declare namespace kakao.maps {
  /**
   * @see [Point](http://apis.map.kakao.com/web/documentation/#Point)
   */
  export class Point {
    /**
     * 화면 좌표 정보를 담고 있는 포인트 X 좌표 정보를 가지고 있는 변수 입니다.
     */
    x: number;
    /**
     * 화면 좌표 정보를 담고 있는 포인트 Y 좌표 정보를 가지고 있는 변수 입니다.
     */
    y: number;

    /**
     * 화면 좌표 정보를 담고 있는 포인트 객체를 생성한다.
     *
     * @param x
     * @param y
     */
    constructor(x: number, y: number);

    /**
     * 포인트 객체와 같은 좌표를 가지고 있는 객체인지 비교한다.
     *
     * @param point
     */
    public equals(point: Point): boolean;

    /**
     * 포인트 객체가 가지고 있는 좌표를 문자열로 반환한다.
     */
    public toString(): string;
  }
}
