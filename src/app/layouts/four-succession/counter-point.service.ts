import {computed, Injectable, signal} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CounterPointService {
  currentPoint = signal<number>(0);
  savePoint = signal<number>(0);
  maxPoint = computed<number>(() => this.currentPoint() >= this.savePoint() ? this.currentPoint() : this.savePoint())

  rigthAnswer() {
    this.currentPoint.update(v => v + 1);
  }

  falseAnswer() {
    this.currentPoint.set(0);
  }

  isEnd() {
    return this.currentPoint() == 4
  }

  init() {
    this.falseAnswer();
    this.savePoint.set(0);
  }
  allocationPoints(){
    return this.maxPoint()
  }
}
