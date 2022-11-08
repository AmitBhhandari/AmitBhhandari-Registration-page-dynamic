window.addEventListener("DOMContentLoaded", () => {
    
    axios.get("https://crudcrud.com/api/b8d351d3331a4124bc7ca2f5d02f4413")
    .then((response)=>{
      console.log(response)

      for(var i=0; i<response.data.length; i++)
      {
          addUser(response.data[i])
      }
    })
  
  //const localStorageObj = localStorage;
  //const localstoragekeys  = Object.keys(localStorageObj)

  //for(var i =0; i< localstoragekeys.length; i++){
     // const key = localstoragekeys[i]
     // const userDetailsString = localStorageObj[key];
      //const userDetailsObj = JSON.parse(userDetailsString);
     //addUser(userDetailsObj)
 // }
})

function saveToLocalStorage(event){
  event.preventDefault();
  const name = event.target.username.value;
  const email = event.target.emailId.value;

  let obj = {
      name,
      email,
    }

    axios.post("https://crudcrud.com/api/b8d351d3331a4124bc7ca2f5d02f4413/AppointmentData",obj)
    .then((response)=>{
      addUser(response.data)
        //console.log(response)
    })
    .catch((err)=>{
        console.log(error)
    })
    //localStorage.setItem(object.NAME,JSON.stringify(object));

    //ShownUserOnScreen(object)
    
    //localStorage.setItem(obj.email,JSON.stringify(obj));
    //addUser(obj);

}

function addUser(user){
  if(localStorage.getItem(user.email)!== null){
      removeUser(user.email);
  }
  const parentNode = document.getElementById('listOfUsers');
  const childHTML = `<li id=${user.email}> ${user.name}- ${user.email}
  
   
  </li>`;
  parentNode.innerHTML =  parentNode.innerHTML + childHTML;
}

