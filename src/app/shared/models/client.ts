import { ClientI } from '../interfaces/client-i';
import { StateClient } from '../enums/state-client.enum';

export class Client implements ClientI{
  state = StateClient.ACTIVE;
  tva = 20;
  id: number;
  name: string;
  ca: number;
  comment: string;

  constructor(obj?: Partial<Client>){
    if(obj){
      Object.assign(this, obj);
    }
  }

  totalTtc(): number{
    return this.ca * (1 + this.tva/100);
  }

}
