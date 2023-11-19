

function funsave(event){
    event.preventDefault()
    const expenseamount=document.getElementById('expenseid').value

    const description=document.getElementById('descriptionid').value
    const category=document.getElementById('categoryid').value
    const fulldetails={expenseamount,description,category}

    axios.post(`https://crudcrud.com/api/9823bd792c1548c697905d410719403a/folder1`,fulldetails)
    .then(res=>showfolder1onscreen(res.data))
    .catch(err=>console.log(err))

}


// function showfolder1onscreen(uploadData){
//     const parelement=document.getElementById('ulid1')
//     const childelement=`<li id= ${uploadData._id}>
//                  ${uploadData.expenseamount}-${uploadData.description} ${uploadData.category}
//                 <button>EDIT</button>
//                  <button>DELETE</button>

//                 </li>`; 
//                 parelement.innerHTML =  parelement.innerHTML + childelement 

// }

// function deleteData(dataid){
//     var parelement=document.getElementById('ulid1')
//     var childelement=document.getElementById(dataid)
//     parelement.removeChild(childelement)
//     axios.delete(`https://crudcrud.com/api/0dbd5a4262cd4673ba164b9ce5df878f/folder1/${dataid}`)

// }
// function editData(dataid){

//     document.getElementById('expenseid').value = ;
//     document.getElementById('descriptionid').value=;
    
//     var parelement=document.getElementById('ulid1')
//     var childelement=document.getElementById(dataid)
//     parelement.removeChild(childelement)
//     axios.delete(`https://crudcrud.com/api/0dbd5a4262cd4673ba164b9ce5df878f/folder1/${dataid}`)
// }