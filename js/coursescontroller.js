
class programsController{
    constructor(CurrentId){
        this.courses=[];
        this.CurrentId=0;
    }
    addItem(itemsfromhtml) {
        
        
        var temp= itemsfromhtml;
        
        temp.id=this.currentId;
        console.log(temp);
        
        
       console.log(this.courses);
        this.courses.push(temp);
        console.log("after adding current id"+ this.courses);
        var x= JSON.stringify(this.courses);
        localStorage.setItem("courses", JSON.stringify(this.courses));

        

        
       
      

    }
    

        

    display(){
        for(var i = 0, size = this.courses.length; i < size ; i++){
            const course= this.courses[i];
            console.log('indisplay');
        console.log(course);

        const courseHTML = '<div class="card" id="card1" style="width: 20rem;">\n' +
            '    <img src="'+course.imgurl +'" width="300" height="250"  alt="product image">\n' +
            '    <div class="card-body">\n' +
            '        <h5 class="card-title">'+course.name+'</h5>\n' +
            '        <p class="card-text">'+course.description+'</p>\n' +
            '        <a href="#" class="btn btn-primary">Add</a>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<br/>';
        const coursesContainer = document.getElementById("list-items");
        coursesContainer.innerHTML += courseHTML;
    }
} 





}
