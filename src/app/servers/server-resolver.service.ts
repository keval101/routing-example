import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from './servers.service';


interface Server{
  id:number;
  name:string;
  status:string;
}

@Injectable({
  providedIn: 'root'
})

export class ServerResolverService implements Resolve<Server>{

  constructor(private _serverService:ServersService) { }

  resolve(route:ActivatedRouteSnapshot, status:RouterStateSnapshot) : Observable<Server> | Promise<Server> | Server{
      return this._serverService.getServer(+route.params['id'])
  }
}
