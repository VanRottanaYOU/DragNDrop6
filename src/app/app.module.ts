import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';
// import { DragDropDirectiveModule} from "angular4-drag-drop";
// import { DragulaModule } from 'ng2-dragula';
import { DndModule } from 'ng2-dnd';

@NgModule({
  declarations: [
    AppComponent,
    DragndropComponent
  ],
  imports: [
    BrowserModule,
    DndModule,
    DndModule.forRoot()
    // DragulaModule
    // DragDropDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
