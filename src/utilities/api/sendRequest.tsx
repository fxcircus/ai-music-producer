export async function sendRequest(url: string, method = 'get', payload: any = null) {
    
    const options: RequestInit = { method }; //RequestInit type is expected by the fetch function for its second argument.
    
    if (payload) {
        options.headers = { 'Content-Type': 'application/json' }
        options.body = JSON.stringify(payload);
    }

    const res = await fetch(url, options);

    if (res.ok) {
        return res.json();
      } else {
        throw new Error('bad request');
      }
}