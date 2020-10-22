class Bank{

    static getAccountDetails(){

        let data={ 
            sreedevi:{username:"sreedevi",password:"abc123",acno:1001,balance:50000},
            test1:{username:"test1",password:"test1",acno:1002,balance:5000},
            test2:{username:"test2",password:"test2",acno:1003,balance:6000},
            test2:{username:"test3",password:"test3",acno:1004,balance:7000},
            

        }
        return data;
    }


   static login(){
            let usname=document.querySelector("#uname").value;//abc
            let pwd=document.querySelector("#pwd").value;
            //chk username is present inside data
            let data=Bank.getAccountDetails()
            if(usname in data){//abc in data
                let password=data[usname]["password"];
                if(pwd==password){
                    swal("login sucess!", "u provided valid data!", "success");
                }
                else{
                    swal("login failed!", "u provided invalid message!", "error");
      
                }
                
            }
            else{
                alert("inavlid user")
            }

    }








}