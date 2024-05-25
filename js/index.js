var bNameInput = document.getElementById("bookName");
var bUrlInput = document.getElementById("bookUrl");
var submitBtn = document.getElementById("submitBtn");
var table = document.getElementById("tableContant");
var sInput = document.getElementById("searchInput");



var bList =[];
if(localStorage.getItem("books")===null){
    bList =[]
}else{
    bList = JSON.parse(localStorage.getItem("books"));
    displayBook()
}


function addBook(){
    if(bookName.value == "" || bookUrl.value == "")
        return;
    

    var book = {
        name: bNameInput.value,
        url: bUrlInput.value
    }
    bList.push(book)
    displayBook()
    clearInputs()
    localStorage.setItem("books", JSON.stringify(bList))
  
}


//! Display book after push 
function displayBook(){
    var mark ="";
    for(var i =0;i<bList.length;i++){
        mark+=`
            <tr>
                <td class="fw-bold">${i+1}-</td>
                <td>${bList[i].name}</td>
                <td>
                    <a href="${bList[i].url}" target="_blank"><button id="visitBtn" class="btn btn-visit"><i class="fa-solid fa-eye"></i> Visit</button></a>
                </td>
                <td>
                    <button onclick="deletBook()" id="deletBtn" class="btn btn-delet"><i class="fa-solid fa-trash-can"></i> Delet</button>
                </td>
                
            </tr>
        `;
    }

    document.getElementById("tableContant").innerHTML=mark;

}


//! Clear function
function clearInputs(){
    bookName.value="";
    bookUrl.value="";
}


//! Delet function
function deletBook(index){
    var index=0;
    bList.splice(index,1);
    displayBook()
    localStorage.setItem("books", JSON.stringify(bList))
}

//! Book Name Validation function
function validateBookName (){
    var regex = /^[A-Z][a-z]+(?:[\s.]+[a-zA-Z]+)*$/;
    var isValed = regex.test(bNameInput.value);
    bNameInput.classList.remove("is-invalid","is-valid")

    if(isValed){
        // console.log("matched");
        bNameInput.classList.add("is-valid")
        document.getElementById("nameAlert").classList.replace("d-block","d-none")
    }else{
        // console.log("not matched");
        bNameInput.classList.add("is-invalid")
        document.getElementById("nameAlert").classList.replace("d-none","d-block")
    }
}

//! Book Url Validation function
function validateBookUrl (){
    var regex = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/;
    var isValed = regex.test(bUrlInput.value);
    bUrlInput.classList.remove("is-invalid","is-valid")
    
    if(isValed){
        console.log("matched");
        bUrlInput.classList.add("is-valid")
        document.getElementById("urlAlert").classList.replace("d-block","d-none")
    }else{
        console.log("not matched");
        bUrlInput.classList.add("is-invalid")
        document.getElementById("urlAlert").classList.replace("d-none","d-block")
    }
}


//! Search By Name function
function searchByName(){
    var term = sInput.value;


    var mark ="";
    for(var i =0;i<bList.length;i++){
        if(bList[i].name.toLowerCase().includes(term.toLowerCase())){
            mark+=`
            <tr>
                <td class="fw-bold">${i+1}-</td>
                <td>${bList[i].name}</td>
                <td>
                    <a href="${bList[i].url}" target="_blank"><button id="visitBtn" class="btn btn-visit"><i class="fa-solid fa-eye"></i> Visit</button></a>
                </td>
                <td>
                    <button onclick="deletBook()" id="deletBtn" class="btn btn-delet"><i class="fa-solid fa-trash-can"></i> Delet</button>
                </td>
                
            </tr>
        `;
        }
    }

    document.getElementById("tableContant").innerHTML=mark;

}


