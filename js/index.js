var bNameInput = document.getElementById("bookName");
var bUrlInput = document.getElementById("bookUrl");
var submitBtn = document.getElementById("submitBtn");
var table = document.getElementById("tableContant");




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


    // var regex = /^(https?:\/\/)?((([a-zA-Z0-9$._+!*'(),;&=-]+):?([a-zA-Z0-9$._+!*'(),;&=-]+)?@)?((\d{1,3}\.){3}\d{1,3}|([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(:\d+)?)(\/[a-zA-Z0-9$._+!*'(),;&=-]*)*(\?[a-zA-Z0-9$._+!*'(),;&=-]*)?(#[a-zA-Z0-9$._+!*'(),;&=-]*)?$/;
    

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

    table.innerHTML=mark;

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



