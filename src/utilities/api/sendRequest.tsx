export async function sendRequest(url: string, method = 'get', payload: any = null, bearerToken: string = "") {
  const options: RequestInit = { method };
  
  if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
  }

  if (bearerToken) {
      options.headers = {
          ...options.headers,
          'Authorization': `Bearer ${bearerToken}`
      };
  }

  const res = await fetch(url, options);

  if (res.ok) {
      return res.json();
  } else {
      const errorMessage = `Request to ${url} failed with status ${res.status}`;
      const responseText = await res.text(); 
      throw new Error(`${errorMessage}. Response Text: ${responseText}`);
  }
}
