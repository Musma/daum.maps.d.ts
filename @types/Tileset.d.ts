/// <reference path="index.d.ts" />
declare namespace kakao.maps {
  /**
   * @see [Tileset](http://apis.map.kakao.com/web/documentation/#Tileset)
   */
  export class Tileset {
    /**
     * 주어진 객체로 타일셋을 생성한다.
     *
     * @param options
     */
    constructor(options: TilesetOptions);

    /**
     * 타일셋에 ID를 지정해 추가한다.
     * 추가되면 kakao.maps.[지정한ID] 로 타일셋을 사용할 수 있다.
     *
     * @param id
     * @param tileset
     */
    public static add(id: string, tileset: Tileset): void;
  }
  export class TilesetOptions {
    /**
     * 타일의 가로 크기
     */
    width: number;
    /**
     * 타일의 세로 크기
     */
    height: number;
    /**
     * 타일 주소를 반환하는 함수. 세 개의 파라메터를 가진다.
     */
    urlFunc?: (
      /**
       * column
       */
      x: number,
      /**
       * Row
       */
      y: number,
      /**
       * level
       */
      z: number
    ) => string;
    /**
     * 생성할 타일의 카피라이트
     *
     * @default []
     */
    copyright?: TilesetCopyright[];
    /**
     * 어두운 타일인지 여부
     */
    dark?: boolean;
    /**
     * 최소 레벨
     */
    minZoom?: number;
    /**
     * 최대 레벨
     */
    maxZoom?: number;
    /**
     * 타일 Element를 반환하는 함수. 세개의 파라미터를 가진다. urlFunc 옵션 대신 사용한다.
     */
    getTile?: (
      /**
       * column
       */
      x: number,
      /**
       * Row
       */
      y: number,
      /**
       * level
       */
      z: number
    ) => HTMLElement;
  }
}
