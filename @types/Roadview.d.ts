/// <reference path="index.d.ts" />
declare namespace kakao.maps {
  /**
   * @see [Roadview](http://apis.map.kakao.com/web/documentation/#Roadview)
   */
  export class Roadview implements kakao.maps.event.EventTarget {
    /**
     * 로드뷰를 생성한다.
     *
     * @param container 로드뷰가 표시될 HTML element
     * @param options
     */
    constructor(container: HTMLElement, options?: RoadviewOptions);

    /**
     * 파노라마 ID를 지정한다.
     * 지도 좌표도 함께 넘겨야 한다.
     *
     * @param panoId
     * @param position
     */
    setPanoId(panoId: number, position: LatLng): void;

    /**
     * 파노라마 ID를 반환한다.
     */
    getPanoId(): number;

    /**
     * 로드뷰 시점을 지정한다.
     *
     * @param viewpoint
     */
    setViewpoint(viewpoint: Viewpoint): void;

    /**
     * 로드뷰 시점을 반환한다.
     */
    getViewpoint(): Viewpoint;

    /**
     * 로드뷰 시점과panoId를 함께 반환한다.
     */
    getViewpointWithPanoId(): Viewpoint & { panoId: number };

    /**
     * 로드뷰가 보여주는 지점의 지도 좌표를 반환한다.
     */
    getPosition(): LatLng;

    /**
     * viewpoint(화면좌표)값을 추출할 수 있는 projection 객체를 가져옵니다.
     */
    getProjection(): MapProjection;

    /**
     * 로드뷰 엘리먼트의 크기를 변경한 후에는 반드시 이 함수를 호출해야 한다.
     * 플래시 로드뷰는 자동으로 영역을 잡는 경우가 있으나 모바일 로드뷰는 꼭 호출하도록 하자.
     * 단, window의 resize 이벤트에 대해서는 자동으로 호출된다.
     */
    relayout(): void;
  }

  export interface RoadviewOptions {
    /**
     * 로드뷰 시작 지역의 고유 아이디 값.
     */
    panoId?: number;

    /**
     * panoId가 유효하지 않을 경우 지도좌표를 기반으로 데이터를 요청할 수평 좌표값.
     */
    panoX?: number;

    /**
     * panoId가 유효하지 않을 경우 지도좌표를 기반으로 데이터를 요청할 수직 좌표값.
     */
    panoY?: number;

    /**
     * 로드뷰 처음 실행시에 바라봐야 할 수평 각. 0이 정북방향. (0_360)
     */
    pan?: number;

    /**
     * 로드뷰 처음 실행시에 바라봐야 할 수직 각.(-90_90)
     */
    tilt?: number;

    /**
     * 로드뷰 줌 초기값.(-3_3)
     */
    zoom?: number;
  }
}
