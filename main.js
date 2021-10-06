//Declare Array
data = [];

//Add the clickListnersEvent to the function that should Delete the item
function clickListners (){
    //Get IDs
    var IDs = allCustomers.map(function(record){
        return record.id;
    });


// for each ID find respective DOM element and attatch event listner

IDs.forEach(function(id){
    //find element
    var tr = document.getElementById(id);
    // attach event listner
    tr.onclick = function(event){
        //get id of clicked tr (tabel row)
        var trID = tr.getAttribute('id');

        data = data.filter(function(record){
            return record.id !== trID;
        });
    var targetTR = document.getElementById(trID);
    targetTR.remove();  
    }  
})
}