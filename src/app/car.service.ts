import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ICar} from "./shared/interfaces";

@Injectable()
export class CarService {
  constructor(private httpClient: HttpClient) {
  }
   getCars() {
     return this.httpClient.get<ICar[]>('./assets/data.json');
   }
}
