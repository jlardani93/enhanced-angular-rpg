import { Injectable } from '@angular/core';

@Injectable()
export class GameLogService {

  constructor() { }
  log: object[] = [];

  addEntry = function(message: string, styleCode: number){
    this.log.push({
      message: message,
      styleCode: styleCode
    })
  }
}
