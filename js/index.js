 async function appInit(){
    const res = await fetch('https://661c2bd4e7b95ad7fa69dcd5.mockapi.io/api/v1/albums');
    const payload = await res.json();
    console.log(payload);
 }

 appInit();