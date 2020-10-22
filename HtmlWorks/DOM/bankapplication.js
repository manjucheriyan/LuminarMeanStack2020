class Bank{
    static getAccoutDetails(){
        let data={
            sreedevi:{username:"sreedevi",password:"adc213",accountno:224565,balance:50000},
            manju:{username:"Manju",password:"adc214",accountno:224566,balance:60000},
            Alen:{username:"alen",password:"1234",accountno:224567,balance:10000},
            Albert:{username:"Albert",password:"adc216",accountno:224568,balance:80000}
                 };

        return data;
    }
    

    
     static login (){
        
        let VaruserName=document.querySelector("#uname").value;
        let Varpassword=document.querySelector("#pword").value;

        let objectColection=Bank.getAccoutDetails();

        for(var key in objectColection){
          //alert(key);
            var keyValue = objectColection[key]
            var obj =keyValue;
            var objUsername = obj.username
            var objPassword = obj.password
            var loginStatus =""

            if(objUsername==VaruserName && objPassword==Varpassword){
                loginStatus="Pass"
                break;
            }
            
        }

        if(loginStatus=="Pass"){
            alert("Login Succesfull");
            setTimeout(()=> window.location.href="userhome.html",1000)
            function userame ()
            {
          
                let VaruserName=document.querySelector("#uname").value;
                alert(VaruserName);
             }
            
        }
        else{
            alert("Login Failed")
        }
       
     }
     
     static deposit(){
        let VaruserName=document.querySelector("#uname").value;
        let Varpassword=document.querySelector("#pword").value;

        let objectColection=Bank.getAccoutDetails();
        for(var key in objectColection){
            
              var keyValue = objectColection[key]
              var obj =keyValue;
              var objUsername = obj.username
              var objPassword = obj.password
               objBalance=obj.balance;
  
              if(objUsername==VaruserName && objPassword==Varpassword){
                  var depositamt=Number(document.querySelector("#deposit").value);

                  document.querySelector("#avlbal").value=objBalance
                  availBalance =document.querySelector("#avlbal").value
                  var finalBalance=availBalance+depositamt;
                  //alert("Your available balance after deposit="+objBalance);
                  document.querySelector("#avlbal").value=finalBalance;
              }

     }
    }
    
    static withdraw(){
        let VaruserName=document.querySelector("#uname").value;
        let Varpassword=document.querySelector("#pword").value;

        let objectColection=Bank.getAccoutDetails();
        for(var key in objectColection){
            
              var keyValue = objectColection[key]
              var obj =keyValue;
              var objUsername = obj.username
              var objPassword = obj.password
               objBalance=obj.balance;
  
              if(objUsername==VaruserName && objPassword==Varpassword){
                  var withdrawamt=Number(document.querySelector("#withdraw").value);
                  
                  var objBalance=objBalance-withdrawamt;
                //  alert("Your available balance after withdraw="+objBalance);
                  document.querySelector("#avlbal").value=objBalance;
              }

     }
    }
    


}