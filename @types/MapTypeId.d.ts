/// <reference path="index.d.ts" />
declare namespace kakao.maps {
  /**
   * @see [MapTypeId](http://apis.map.kakao.com/web/documentation/#MapTypeId)
   */
  export enum MapTypeId {
    /**
     * (베이스) 일반 지도
     */
    ROADMAP = 1,

    /**
     * (베이스) 스카이뷰
     */
    SKYVIEW = 2,

    /**
     * (베이스) 하이브리드(스카이뷰 + 레이블)
     */
    HYBRID = 3,

    /**
     * (오버레이) 레이블
     */
    OVERLAY = 4,

    /**
     * (오버레이) 로드뷰
     */
    ROADVIEW = 5,

    /**
     * (오버레이) 교통정보
     */
    TRAFFIC = 6,

    /**
     * (오버레이) 지형도
     */
    TERRAIN = 7,

    /**
     * (오버레이) 자전거
     */
    BICYCLE = 8,

    /**
     * (오버레이) 스카이뷰를 위한 자전거 (어두운 지도에서 활용)
     */
    BICYCLE_HYBRID = 9,

    /**
     * (오버레이) 지적편집도
     */
    USE_DISTRICT = 10,
  }
}
