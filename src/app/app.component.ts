import { Component } from '@angular/core';
import { GridsterComponentInterface, GridsterConfig, GridsterItem, GridsterItemComponentInterface } from 'angular-gridster2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  target = document.getElementById('ql-toolbar');



  options: GridsterConfig = {};
  dashboard: Array<GridsterItem> = [];

  private gridCols = 20;
  private gridRows = 20;

  innerWidth = window.innerWidth;

  constructor() {

    // 初期化時のinnerWidthによってグリッド列数を変える
    if (1500 <= window.innerWidth) {
      this.gridCols = 30;
    } else if (1000 <= window.innerWidth) {
      this.gridCols = 13;
    } else {
      this.gridCols = 6;
    };
  }

  ngOnInit(): void {
    this.options = {
      gridType: 'scrollVertical', // 固定縦横比を縦スクロールで対応
      // gridType: 'scrollHorizontal', // 固定縦横比を水平スクロールで対応
      draggable: { // ドラッグ設定
        enabled: true, // ドラッグ許可
        ignoreContent: true, // dragHandleClassのみドラッグイベントを可能にする
        dragHandleClass: 'draggable-handler', // ここで指定したクラスのみドラッグイベントを可能にする
        // delayStart: 500,
      },
      resizable: { // リサイズ設定
        enabled: true, // リサイズを許可する
        // delayStart: 500,
      },
      swap: true, // 入れ替えを許可する
      displayGrid: 'always', // グリッド線を常に表示
      minCols: this.gridCols, // 最小列数
      maxCols: this.gridCols, // 最大列数(minCols以上はドラッグで表示される)
      minRows: this.gridRows, // 最小行数
      maxRows: this.gridRows, // 最大行数(minRows以上はドラッグで表示される)
      // maxItemCols: 5, // アイテムの最大列数
      // maxItemRows: 5, // アイテムの最大行数
      compactType: 'none', // 整列しない(自由)
      pushItems: true, // リサイズとドラッグでアイテムを押しのける
      mobileBreakpoint: 640, // 画面の幅が640px以下でグリッドを解除しアイテムを1列にする
    };

    this.dashboard = [
      {cols: 10, rows: 6, y: 1, x: 2}, // 初期値 横3マス, 縦4マス,をy1, x2の位置に配置
    ];


  }



  removeItem(index: number): void {
    this.dashboard.splice(index, 1); // index番目を1つ取り除く
  }

  addItem(): void {
    this.dashboard.push({cols: 3, rows: 3, y: 0, x: 0});
  }

  test(event: Event) {
    console.log(event)
    event.preventDefault()
    event.stopPropagation();
    // let target = document.getElementById('ql-toolbar');
    // console.log(target)
  }


}
