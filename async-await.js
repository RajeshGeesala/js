  
let bikes = { name : "hunter" ,speed : 150}
  function Proms () {
   return new Promise ( (resolve , reject) => {
    setTimeout ( ()=>
    {
        let UserName = prompt(  "enter user name :" );
        let Password = prompt (  "type your password :") ;

        if (UserName == Password)
        {
            resolve("user name password matched")
        } else {
            reject ("user name password not matches")
        }
    }   )
   },2000  )

  }

  Proms ().then(  console.log(bikes) ) 
  .catch ( (err) => { console.log(err) })