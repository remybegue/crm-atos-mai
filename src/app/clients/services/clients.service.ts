import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private pCollection: Observable<Client[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
      //map(tab => tab.map(obj => new Order(obj)));
      map((tab) => {
        return tab.map((obj) => {
          return new Client(obj);
        })
      })
    );
  }

    // get collection
    get collection(): Observable<Client[]> {
      return this.pCollection;
    }

    // set collection
    set collection(col: Observable<Client[]>){
      this.pCollection = col;
    }

      // change item state in collection
  public changeState(item: Client, state: StateClient): Observable<Client> {
    const obj = new Client({...item});
    obj.state = state;
    return this.updateItem(obj);
  }

  // update item in collection
  public updateItem(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}clients/${item.id}`, item);
  }
}
