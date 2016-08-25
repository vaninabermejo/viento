import {Injectable} from '@angular/core';
@Injectable()
export class ThemePreLoaderService {
  private static _loaders: Array <Promise<any>>=[];
  public static registerLoader(method: Promise<any>):void{
    ThemePreLoaderService._loaders.push(method);
  }
  public static load(): Promise<any>{
    return new Promise((resolve, reject)=>{
      ThemePreLoaderService._executeAll(resolve);
    });
  }
  private static _executeAll(done:Function): void{
    setTimeout(()=>{
      Promise.all(ThemePreLoaderService._loaders).then((values)=>{
        done.call(null,values);
      }).catch((error)=>{
        console.error(error);
      });
    });
  }
  public static clear():void{
    ThemePreLoaderService._loaders=[];

  }
}
