/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/api/Complaints'
  constructor (private readonly http: HttpClient) { }

  save (params: any) {
    return this.http.post(this.host + '/', params).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }

  masti (params: any)  {
    console.log(" New Service Endpoint",params);
    const body = 
    {
      "id":6,
      "description":params 
    }
    //return this.http.get<String>('http://localhost:4000' + '/api/test');
    return this.http.put('http://localhost:4000/api/Products/6',body).
    pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }

}
