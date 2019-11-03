import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rsjs/add/operator/map';

@Injectable()
export class ProductService {
	private _albumUrl = '../assets/album.json';
  constructor(private _http: Http) {}
	getAlbum(id: number){
		return this._http.get(this.album).map((response) =>
		response.json());
	}
}
