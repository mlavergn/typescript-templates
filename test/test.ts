import { Request } from '../network/request';

const request = new Request();
console.log(request.send(request.GET, '/', null));
