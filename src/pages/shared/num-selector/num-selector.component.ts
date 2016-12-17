import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * 公共组件 - 数字选择
 * @author {davin}
 * @date {2016-09-15}
 */
@Component({
  selector : "num-selector",
  templateUrl: 'num-selector.component.html'
})
export class NumSelector implements OnInit{

  private readonly DEFAULTNUM: number = 1;
  private num: number = this.DEFAULTNUM;

  @Output() numerChange = new EventEmitter();

  constructor() {
  }

  set numer(val) {
    this.num = val;
    this.numerChange.emit(this.num);
  }

  @Input() set defaultNum(num: string){
    this.numer = +num || this.numer;
  }

  add() {
    this.numer++;
  }

  @Input()
  get numer() {
    return this.num;
  }

  remove() {
    if (this.numer < 1 || this.numer === 1)
      return;
    this.numer--;
  }

  change(e) {
    if(e > 0) {
    } else {
      setTimeout(() => {
        this.numer = undefined;
      });
    }
  }

  ngOnInit(){

  }
}
