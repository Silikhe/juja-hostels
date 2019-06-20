// resipe class

class resipe {
    constructor( title, message, author){
        this.title = title;
        this.message = message;
        this.author = author;
    }
}


// Ui class

class UI {
    static displayResipes(){
        const storedResipe =[
            {
                title: "delicious",
                message:"i think!",
                author: "silas"
            },
            {
                title: "sweet",
                message:"almost out!",
                author: "goddy"
            },
            {
                title: "nice and lovely",
                message:"best for caples!",
                author: "willie"
            }


        ];

        const resipes = storedResipe;


        resipes.forEach((resipe) => UI.addResipeToList(resipe));
    }

    static addResipeToList(resipe){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = '<td>$(resipe.title)</td><td>$(resipe.message)</td><td>$(resipe.author)</td> ';

        list.appendChild(row);
    }
}




document.addEventListener('DOMContentLoaded', UI.desplayResipes);
