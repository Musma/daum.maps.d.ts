/// <reference path="index.d.ts" />

declare namespace kakao.maps {
  /**
   * @see [AbstractOverlay](http://apis.map.kakao.com/web/documentation/#AbstractOverlay)
   */
  export class AbstractOverlay implements kakao.maps.event.EventTarget {
    /**
     * `API` 사용자가 직접 정의할 수 있는 오버레이.
     * AbstractOverlay를 상속 받아 사용할 객체를 생성하고 prototype을 연결해 준다.
     * 온전히 동작하는 오버레이를 만들고자 한다면 3가지 인터페이스 메소드( onAdd, draw, onRemove )를 구현해야 한다.
     */
    constructor();

    /**
     * 위치를 재조정할 필요가 있을 때 호출된다.
     * 이 함수 내에서 엘리먼트의 위치를 잡아주어야 한다.
     */
    public draw(): void;

    /**
     * 지도에 올릴 때 호출된다.
     * setMap(map) 을 실행하면 이 함수가 실행된다.
     * 이 함수 내에서 생성된 `DOM` 객체를 MapPanels에 자식 노드로 넣어주도록 한다.
     */
    public onAdd(): void;

    /**
     * 지도에서 제거할 때 호출된다.
     * setMap(null) 을 실행하면 이 함수가 실행된다.
     * 이 함수 내에서 MapPanels에 자식 노드로 넣어준 엘리먼트를 제거하도록 한다.
     */
    public onRemove(): void;

    /**
     * AbstractOverlay에 원을 올린다.
     * null 을 지정하면 원을 제거한다.
     *
     * @param map
     */
    public setMap(map: Map | null): void;

    /**
     * 원이 올라가있는 지도를 반환한다.
     */
    public getMap(): Map | null;

    /**
     * 붙어있는 지도의 패널을 반환한다.
     */
    public getPanels(): MapPanels;

    /**
     * 붙어있는 지도의 좌표 변환 객체를 반환한다.
     */
    public getProjection(): MapProjection;
  }
}
