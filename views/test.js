async () => {
    console.log('here1'); 
     const response = await fetch('http://localhost:4000/newReleases')  
     console.log('here2');
     return await response.json()
     }           

