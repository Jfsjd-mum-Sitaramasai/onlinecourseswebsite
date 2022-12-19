const buttonCalled=document.getElementById("bt-1");
buttonCalled.addEventListener('click',submit_info)
function resolveAfter15Seconds(){
  return new Promise(resolve=>{
    setTimeout(() =>{
      resolve('resolved');
  },15000);
});
}

async function submit_info(){
    let name1=document.getElementById("newCourseName").value
    let description1=document.getElementById("newCourseDescription").value
    let imgurl1=document.getElementById("newCourseImageUrl").value
    
    var coursesFromHtml= {name:name1, description:description1, imgurl:imgurl1, }
var newobject=new programsController(0);
/*console.log(itemsfromhtml);
console.log(newobject);*/
//console.log(newobject.items);
newobject.addItem(coursesFromHtml);
let result=await resolveAfter15Seconds();
result=newobject.display();


}


async function for_handel(){

const source = document.getElementById('info').innerHTML;

const template = Handlebars.compile(source)
let name1=document.getElementById("newCourseName").value

const context = {};
  context.coursename=name1;
  
  


    const compiledHtml = template(context)
  
    let result1=await resolveAfter15Seconds();
     result1 =   document.getElementById('para')
    
    result1.innerHTML = compiledHtml


    



 


}

    
   





