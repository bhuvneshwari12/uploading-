function funsave(event){
    event.preventDefault()
    const expenseamount=document.getElementById('expenseid').value

    const description=document.getElementById('descriptionid').value
    const category=document.getElementById('categoryid').value
    const fulldetails={expenseamount,description,category}

    axios.post(`https://crudcrud.com/api/5e55c798478b48ed8b4237220b22c1e2/folder1`,fulldetails)
    .then(res=>showfolder1onscreen(res.data))
    .catch(err=>console.log(err))

}

function showfolder1onscreen(postData){
    var parelement=document.getElementById('ulid1')
    var childelement=`<li id='${postData._id}'>
        ${postData.expenseamount} ${postData.description}-${postData.category}
        <button onclick=deleteData('${postData._id}')>delete</button>
    </li>`
    parelement.innerHTML=parelement.innerHTML + childelement
}


function deleteData(id)
{ 
  const parent=document.getElementById('ulid1');
  const child=document.getElementById(id);
  parent.removeChild(child)

 
  //delete data from crudcrud  
  axios.delete(`https://crudcrud.com/api/5e55c798478b48ed8b4237220b22c1e2/folder1/${id}`)
  .then(res=> console.log(res.data))
  .catch(err=> console.log(err))
}

