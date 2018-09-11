export class Request {
  public GET: string;
  public PUT: string;
  public POST: string;

  constructor() {
    this.GET  = 'GET';
    this.PUT  = 'PUT';
    this.POST = 'POST';
	}

	public send(method: string, url: string, payload: object) {
		console.log('[request: ' + url + ']')
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
			console.log('[response: ' + url + ']', xhr.responseText);
			}
		};
		try {
			const body = payload ? JSON.stringify(payload) : null;
			xhr.send(body);
		} catch (err) {
			console.error(err);
		}
  }
}