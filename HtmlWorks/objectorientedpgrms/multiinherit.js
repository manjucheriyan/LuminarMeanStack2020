class Parent{
    m1(){console.log("inside parent");}
}
class Child{
    m2(){console.log("inside child");}
}
class subchild extends Child{
    m3(){console.log("inside subchild");}
}
var obj=new subchild();
obj.m3();
obj.m2();
