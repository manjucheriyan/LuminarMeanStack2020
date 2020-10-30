//List of tweets
var tweets=["sachin tweet1","sehvag tweet1","koli tweet1","sachin tweet2","koli tweet2","sachin tweet3"]

//find user with max number of tweeets
var names=[];
for(key in tweets){
    keyvalue=tweets[key];
    elements=keyvalue.split(" ");
     names.push(elements[0]);
    
}console.log(names);

uniqueArray=[];
for(key in names){
    keyvalue=names[key];
    if(uniqueArray.indexOf(keyvalue)==-1){
       uniqueArray.push(keyvalue);
       
    }
}console.log(uniqueArray)
maxcount=0;
output=""
for(ukey in uniqueArray){
    count=0;
    for(nkey in names){
        ukeyvalue=uniqueArray[ukey]
        nkeyvalue=names[nkey]
      if(ukeyvalue==nkeyvalue){
          count=count+1;
        
      }}console.log(ukeyvalue+"::"+count);
    if(maxcount<count)
    {
        maxcount=count;
  output=ukeyvalue+":"+count
    }
    

}
console.log("max no of tweets done by"+output);

//print username and counts in sorting order
