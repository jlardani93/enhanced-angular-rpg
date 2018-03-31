import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CharacterDisplayComponent } from './character-display/character-display.component';
import { CharacterCreateComponent } from './character-create/character-create.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameFightComponent } from './game-fight/game-fight.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDisplayComponent,
    CharacterCreateComponent,
    GameBoardComponent,
    GameFightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Game Board component
//New Player component
//Player display component
//Fight component
//Main component is game component
