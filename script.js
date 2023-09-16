const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  const dummy_arr = [ { name: "jack", age: 25, profession: "webdeveloper" },
  { name: "june", age: 28, profession: "designer" },]
  
  // 1. Print Developers
  function printDeveloper() {
    
    console.log(data[0].name);
   
  }
  printDeveloper()
  
  // 2. Add Data
  function addData() {
    data.forEach(Object => {
     Object.gender= prompt("your gender");}
    ) 
    console.log(data);
  
  
  }
  addData()
  
  // 3. Remove Admins
  function removeAdmin() {
   
     
    console.log(data[0]);
  
  }
  removeAdmin()
  
  // 4. Concatenate Array
  function concatenateArray() {
    console.log(data + dummy_arr)
  }
  concatenateArray()
  
  // 5. Average Age
  function averageAge() {
    let avg = (data[0].age+data[1].age);
    console.log( "Average Age : " +  avg/2);
  }
  averageAge()
  
  // 6. Age Check
  function checkAgeAbove25() {
  
    if(data[0].age > 25){
      console.log(data[0].name)
    }
    else{
      console.log(data[1].name)
    }
  
  }
  checkAgeAbove25()
  
  // 7. Unique Professions
  function uniqueProfessions() {
    console.log( "Unique Professions :" +   data[0].profession + ", " +data[1].profession);
    
  
  }
  uniqueProfessions() 
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort();
   console.log(data);
  }
  sortByAge()
  
  // 9. Update Profession
  function updateJohnsProfession() {
  
    let data = [
      { name: "john", age: 24, profession: "developer" },
      { name: "jane", age: 27, profession: "admin" },]
  
    data[0].profession = "Manager";
    console.log(data[0]);
  }
  updateJohnsProfession()
  
  // 10. Profession Count
  function getTotalProfessions() {
  
   let a=0;
   if(data[0].profession == "developer" || profession =="admin" ){
     a=1;
     console.log( "profession  developer :"+a);
   } 
  
   
    console.log( "profession admin :" + a);
  }
    
    
  
  getTotalProfessions()