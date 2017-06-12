import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import{FlashCardPage} from  '../../pages/flash-card/flash-card'

@NgModule({
  declarations: [
    FlashCardPage,
  ],
  imports: [
    IonicPageModule.forChild(FlashCardPage),
  ],
  exports: [
    FlashCardPage
  ]
})
export class FlashCardPageModule {}
