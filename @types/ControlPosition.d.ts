/// <reference path="index.d.ts" />

declare namespace kakao.maps {
  /**
   * @see [ControlPosition](http://apis.map.kakao.com/web/documentation/#ControlPosition)
   */
  export enum ControlPosition {
    /**
     * 위 가운데를 의미한다. 아래로 쌓인다.
     */
    TOP = 1,
    /**
     * 왼쪽 위를 의미한다. 오른쪽으로 쌓인다.
     */
    TOPLEFT = 0,
    /**
     * 오른쪽 위를 의미한다. 왼쪽으로 쌓인다.
     */
    TOPRIGHT = 2,
    /**
     * 왼쪽 위를 의미한다. 아래로 쌓인다. (주의: 왼쪽 중앙을 의미하는 것이 아니다.)
     */
    LEFT = 6,
    /**
     * 오른쪽 위를 의미한다. 아래로 쌓인다. (주의: 오른쪽 중앙을 의미하는 것이 아니다.)
     */
    RIGHT = 7,
    /**
     * 왼쪽 아래를 의미한다. 오른쪽으로 쌓인다.
     */
    BOTTOM = 4,
    /**
     * 왼쪽 아래를 의미한다. 오른쪽으로 쌓인다.
     */
    BOTTOMLEFT = 3,
    /**
     * 오른쪽 아래를 의미한다. 왼쪽으로 쌓인다.
     */
    BOTTOMRIGHT = 5,
  }
}
