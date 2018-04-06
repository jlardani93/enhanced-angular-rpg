import { Injectable } from '@angular/core';

@Injectable()
export class GameLogService {

  constructor() { }
  public static log: object[] = [];

  static addEntry = function(message: string, styleCode: number){
    this.log.push({
      message: message,
      styleCode: styleCode
    })
  }
}
