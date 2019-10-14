console.log('hello, this i jarvis');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service-worker registed');
      }).catch(error => {
        console.log('Service-worker registed error');
      })
  })
}