import {NgModule} from "@angular/core";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
  ],
  declarations: [

  ],
  exports: [
    CommonModule,
    TranslateModule,
    FormsModule,
  ]
})

export class SharedModule {

}
