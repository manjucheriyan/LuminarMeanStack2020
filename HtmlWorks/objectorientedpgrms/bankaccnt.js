class Bank{
    constructor (naime,accowntno,balence,banknaime){
        this.person_name=naime;
        this.account_no=accowntno;
        this.balance=balence;
        
    }
    static getBanknaime(){
        var bank_name="SIB";
        return bank_name;}
    static printCollegename(){
        var bank_name="SIB";
        console.log(bank_name);
    }
     
    getAccount(){
        console.log("person_name="+this.person_name);
        console.log("accountno="+this.account_no);
        console.log("balance="+this.balance);
        Bank.printCollegename();
    }
    deposit(amount){
        this.balance+=amount;
        console.log("your "+this.bank_name+" " +"is credited with"+" "+amount+" " +"avl balance="+this.balance);
        
    }
    WithDraw(amount){
        this.balance-=amount;
        console.log("your "+this.bank_name+" " +"is debited with"+" "+amount+" " +"avl balance="+this.balance);
    }
    BalanceEnq(){
        console.log("your available balance is" + " " +this.balance);
    }
}


var obj=new Bank("manju",546465655,5000);

obj.getAccount();
obj.deposit(1000);
obj.WithDraw(2000);
obj.BalanceEnq();



var obj1=new Bank("Anju",465464654,8000);

obj1.getAccount();
obj1.deposit(1000);
obj1.WithDraw(2000);
obj1.BalanceEnq();