declare namespace kakao.maps {
  /**
   * 지도 위에 올라가는 각종 도형의 선 스타일을 의미한다.
   * 스타일은 패턴에 따라 11종류가 있으며 그 값은 문자열로 지정한다.
   *
   * @see [StrokeStyles](http://apis.map.kakao.com/web/documentation/#StrokeStyles)
   */
  export type StrokeStyles =
    | "solid"
    | "shortdash"
    | "shortdot"
    | "shortdashdot"
    | "shortdashdotdot"
    | "dot"
    | "dash"
    | "dashed"
    | "dashdot"
    | "longdash"
    | "longdashdot"
    | "longdashdotdot";
}
