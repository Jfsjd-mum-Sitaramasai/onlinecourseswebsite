const buttonCalled=document.getElementById("bt-1");
buttonCalled.addEventListener('click',submit_info)



function submit_info(){
    let name1=document.getElementById("newCourseName").value
    let description1=document.getElementById("newCourseDescription").value
    let imgurl1=document.getElementById("newCourseImageUrl").value
    let price1=document.getElementById("newCoursePrice").value
    var coursesfromhtml={name:name1, description:description1, imageurl:imgurl1, price:price1}
    

    let request = new Request('http://localhost:8080/createcourse',{
        headers: new Headers({
            
            'Content-type': 'application/json'
        }),
        method: 'POST',
        body: JSON.stringify({
            "name": name1, 
            "description": description1, 
            "imageurl": imgurl1, 
            "price": price1
        })
})
fetch(request).then((response)=>{
    console.log(response);
    response.json().then((data)=>{
        console.log(data);
    })
})
    
    
    
var newobject=new programsController(0);
/*console.log(itemsfromhtml);
console.log(newobject);*/
//console.log(newobject.items);
newobject.addItem(coursesfromhtml);

newobject.display();
const source = document.getElementById('info').innerHTML;

const template = Handlebars.compile(source)

const context = {};
  context.coursename=name1;
  
  


    const compiledHtml = template(context)
  
   
     let result1 =   document.getElementById('para')
    
    result1.innerHTML = compiledHtml


}








    



 




    
   





