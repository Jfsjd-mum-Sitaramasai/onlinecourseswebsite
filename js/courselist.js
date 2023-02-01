const getButtoncalled=document.getElementById("get");
getButtoncalled.addEventListener('click', get)

async function get(){
    const response = await fetch('http://localhost:8080/getallcourses');
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if(response){
        hideloader();
    }
    show(data);
}

    
get();
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

  

   


function show(data) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>Description</th>
          <th>ImageUrl</th>
          <th>Price</th>
          
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
    <td>${r.name} </td>
    <td>${r.description}</td>
    <td>${r.imageurl}</td>
    <td>${r.price}</td>
            
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("courselist").innerHTML = tab;
}
let request = new Request('http://localhost:8080/coursetodelete/1',{
        headers: new Headers({
            
            'Content-type': 'application/json'
        }),
        method: 'DELETE',
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

