import { NgModule } from "@angular/core";
import { CounterCompenent } from "./counter/counter.component";


@NgModule({
  declarations: [
    CounterCompenent
  ],
  exports: [
    CounterCompenent
  ]
})
export class CounterModule {

}
