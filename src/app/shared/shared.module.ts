import {NgModule} from "@angular/core";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HtmlPipe} from "../common/pipe/html.pipe";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule
  ],
  declarations: [
    HtmlPipe
  ],
  exports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    HtmlPipe
  ]
})

export class SharedModule {

}
