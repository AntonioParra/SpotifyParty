import { Injectable } from '@angular/core';
import { from, mergeMap, Observable } from 'rxjs';
import { YearData } from '../types/types.types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  loadYearData(year: number): Observable<YearData> {
    return this.http.get(`data/data_${year}.json`) as Observable<YearData>;
  }

  getImageBase64(iconUrl: string): Observable<string> {
    const toBase64 = (blob: Blob): Promise<string> => {
      return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          const base64data: string = reader.result as string;
          resolve(base64data);
        };
      });
    };

    return this.http
      .get(iconUrl, { responseType: 'blob' })
      .pipe(mergeMap((blob: Blob) => from(toBase64(blob))));
  }
}
