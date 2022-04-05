import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {
  constructor(private httpClient: HttpClient) { }

  getMissions() {
    return this.httpClient.get('https://api.spacexdata.com/v3/launches');
  }
}
