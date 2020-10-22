class Parent{
    bike(){
        console.log("Hero Honda");
    }
}

class Child extends Parent{
    bike(){
        console.log("pulzor");
    }
};
var obj=new Child();
obj.bike();