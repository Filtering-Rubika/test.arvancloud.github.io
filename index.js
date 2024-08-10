fetch('https://panel.arvancloud.ir/some-endpoint', {
  method: 'GET',
  credentials: 'include'
})
.then(response => {
  console.log('CORS Headers:', response.headers.get('Access-Control-Allow-Origin'));
  return response.text();
})
.then(data => console.log('Response Data:', data))
.catch(error => console.error('Error:', error));
