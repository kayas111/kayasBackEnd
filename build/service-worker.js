
self.addEventListener('install',e=>{
    
  self.skipWaiting()
    
})
self.addEventListener('activate',e=>{
    
    clients.claim().then((resp)=>{;})
})

self.addEventListener('push',e=>{
let data=e.data.json()

self.registration.showNotification(data.title,{body:data.body,icon:''})


})