import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice',stock:5,price:560,image:"/assets/img/smile.png",featured:false,quantity:5},
      {id: 12, name: 'Narco',stock:5,price:560,image:" /assets/img/smile.png",featured:false,quantity:5},
      {id: 13, name: 'Bombasto',stock:5,price:560,image:" /assets/img/smile.png",featured:true,quantity:5},
      {id: 14, name: 'Celeritas',stock:5,price:560,image:" /assets/img/smile.png",featured:false,quantity:5},
      {id: 15, name: 'Magneta',stock:5,price:560,image:" /assets/img/smile.png",featured:false,quantity:5},
      {id: 16, name: 'RubberMan',stock:5,price:560,image:" /assets/img/smile.png",featured:false,quantity:5},
      {id: 17, name: 'Dynama',stock:5,price:560,image:" /assets/img/smile.png",featured:false,quantity:5},
      {id: 18, name: 'Dr IQ',stock:5,price:560,image:" /assets/img/smile.png",featured:false,quantity:5},
      {id: 19, name: 'Magma',stock:5,price:560,image:" /assets/img/smile.png",featured:false,quantity:5},
      {id: 20, name: 'Tornado',stock:5,price:560,image:" /assets/img/smile.png",featured:true,quantity:5}
    ];
    return {heroes};
  }
}
