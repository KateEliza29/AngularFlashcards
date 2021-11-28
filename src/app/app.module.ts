import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlayScreenComponent } from './play-screen/play-screen.component';
import { CreateScreenComponent } from './create-screen/create-screen.component';
import { FooterComponent } from './footer/footer.component';
import { FlashcardComponent } from './play-screen/flashcard/flashcard.component';
import { CardSetComponent } from './play-screen/card-set/card-set.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreatedItemComponent } from './create-screen/created-item/created-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayScreenComponent,
    CreateScreenComponent,
    FooterComponent,
    FlashcardComponent,
    CardSetComponent,
    CreatedItemComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
