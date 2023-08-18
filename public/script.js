const signup = async ()=>{
    const userEmail = document.getElementById("emailInput").value;
    const password = document.getElementById("pwInput").value;

    await fetch('/auth/signup',{
        method: 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({userEmail,password}),
    }).then((response)=>{
    return response.json();
    } )
      .then((data)=>{
        
        window.location.href = 'login.html'
      })
      .catch((error)=>{
        alert(`${error}`)
        console.log(error)})
}


const login = async () => {
    const userEmail = document.getElementById("emailInput").value;
    const password = document.getElementById("pwInput").value;

    await fetch('/auth/login',{
        method: 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({userEmail,password})
    }).then((response)=>response.json())
      .then((data)=>{
        console.log(data);
        document.getElementById("emailInput").value = "";
        document.getElementById("pwInput").value = ""; 
      })
      .catch((error)=>{
        alert('Error')
        console.log(error)})
}