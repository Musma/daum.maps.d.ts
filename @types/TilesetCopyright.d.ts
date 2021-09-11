/// <reference path="index.d.ts" />
declare namespace kakao.maps {
  /**
   * @see [TilesetCopyright](http://apis.map.kakao.com/web/documentation/#TilesetCopyright)
   */
  export class TilesetCopyright {
    /**
     * 주어진 객체로 타일셋 카피라이트를 생성한다..
     *
     * @param options
     */
    constructor(options: TilesetCopyrightOptions);
  }
  export class TilesetCopyrightOptions {
    /**
     * 기본적으로 출력되는 카피라이트
     */
    msg: string;
    /**
     * 지도 영역이 작아졌을 때 출력되는 짧은 카피라이트
     */
    shortMsg: string;
    /**
     * 해당 카피라이트가 노출될 최소 줌 레벨
     *
     * @default 0
     */
    minZoom: number;
  }
}
