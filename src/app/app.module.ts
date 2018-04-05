import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing'; 

import { AppComponent } from './app.component';
import { CharacterDisplayComponent } from './character-display/character-display.component';
import { CharacterCreateComponent } from './character-create/character-create.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameFightComponent } from './game-fight/game-fight.component';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { GameComponent } from './game/game.component';
import { AdminComponent } from './admin/admin.component';
import { AdminItemsComponent } from './admin-items/admin-items.component';
import { AdminMonstersComponent } from './admin-monsters/admin-monsters.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    CharacterDisplayComponent,
    CharacterCreateComponent,
    GameBoardComponent,
    GameFightComponent,
    GameComponent,
    AdminComponent,
    AdminItemsComponent,
    AdminMonstersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
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
