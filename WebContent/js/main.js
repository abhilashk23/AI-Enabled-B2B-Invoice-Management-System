// function checkAll(ele){
//     var checkboxes = document.getElementsByName('chk');
//     if(ele.checked){
//         for(var i=0; i<checkboxes.length;i++){
//             if(checkboxes[i].type=='checkbox'){
//                 checkboxes[i].checked = ele.checked;
//             }
//         }
//     } else{
//         for(var i=0; i<checkboxes.length; i++){
//             if(checkboxes[i].type=='checkbox'){
//                 checkboxes[i].checked = ele.checked;
//             }
//         }
//     }
// }





// Text Field for add invoice
var custName = document.getElementById("cname");
var custNo = document.getElementById("cno");
var invoiceNo = document.getElementById("invoice_no");
var invoiceAmt = document.getElementById("invoice_amt");
var dueDate = document.getElementById("due_date");

var invoice_AMT = document.getElementById('invoice__amt');
var notes = document.getElementById('notes');
var subject = document.getElementById('subject');

// Seelec/Deselect all checkboxes
$('input[name="chkbox"]:checkbox').click(function () {
    // var checked = !$(this).data('checked');
    // $('input[name="chk"]:checkbox').prop('checked', checked);
    // $(this).data('checked', checked);
    if (this.checked == true) {
        $('input[name="chk"]').closest('tr').addClass('selected');
        $('.del-btn:button').addClass('btn-enabled');
        $('.add-btn:button').removeClass('btn-enabled');
        $('input[name="chk"]').each(function () {
            this.checked = true;
        });
    } else if (this.checked == false) {
        $('input[name="chk"]').closest('tr').removeClass('selected');
        $('.del-btn:button').removeClass('btn-enabled');
        $('.add-btn:button').addClass('btn-enabled');
        $('input[name="chk"]').each(function () {
            this.checked = false;
        });
    }
});


$(document).ready(function () {
    $('input[type="checkbox"][name="chk"]').change(function (e) {
        if ($(this).is(":checked")) {
            $(this).closest('tr').addClass('selected');
            console.log('Hello');
        } else {
            $(this).closest('tr').removeClass('selected');
            console.log('Bye');
        }


    });
})




// Enabling/ Disabling buttons based on number of checkboxes checked
function numberOfCheckboxesSelected() {
    return document.querySelectorAll('input[type="checkbox"][name="chk"]:checked').length;
}

function onChange() {
    if (numberOfCheckboxesSelected() === 1) {
        $('.edit-btn').addClass('btn-enabled');
        $('.edit-btn').attr("disabled", false);

        $('.del-btn:button').addClass('btn-enabled');
        $('.del-btn').attr("disabled", false);

        $('.add-btn').removeClass('btn-enabled');
        $('.add-btn').attr("disabled", true);

    } else if (numberOfCheckboxesSelected() > 1) {
        $('.edit-btn').removeClass('btn-enabled');
        $('.edit-btn').attr("disabled", true);

        $('.del-btn:button').addClass('btn-enabled');
        $('.del-btn').attr("disabled", false);

        $('.add-btn').removeClass('btn-enabled');
        $('.add-btn').attr("disabled", true);


    } else if (numberOfCheckboxesSelected() === 0) {
        $('.del-btn:button').removeClass('btn-enabled');
        $('.del-btn').attr("disabled", true);

        $('.edit-btn').removeClass('btn-enabled');
        $('.edit-btn').attr("disabled", true);

        $('.add-btn').addClass('btn-enabled');
        $('.add-btn').attr("disabled", false);
    }

    if (numberOfCheckboxesSelected() == $('input[type="checkbox"][name="chk"]').length) {
        $('input[type="checkbox"][name="chkbox"]').prop('checked', true);
    } else {
        $('input[type="checkbox"][name="chkbox"]').prop('checked', false);
    }

}


// Enable btn-add if all required fields are filled
function myFunc() {
    if (custName.value.length !== 0 && custNo.value.length !== 0 && invoiceNo.value.length !== 0 && invoiceAmt.value.length !== 0 && dueDate.value) {
        $('.btn-add').attr("disabled", false);
        $('.btn-add').addClass("btn-sub");
    } else if (custName.value.length === 0 || custNo.value.length === 0 || invoiceNo.value.length === 0 || invoiceAmt.value.length === 0 || !dueDate.value) {
        $('.btn-add').attr("disabled", true);
        $('.btn-add').removeClass("btn-sub");
    }
}

// Disable btn-add when clear button is clicked
$('.clear-btn').on('click', function () {
    custName.value = "";
    custNo.value = "";
    invoiceNo.value = "";
    invoiceAmt.value = "";
    dueDate.value = "";
    $('.btn-add').attr("disabled", true);
    $('.btn-add').removeClass("btn-sub");

})

$('#addcancel').on('click', function () {
    custName.value = "";
    custNo.value = "";
    invoiceNo.value = "";
    invoiceAmt.value = "";
    dueDate.value = "";
    $('.btn-add').attr("disabled", true);
    $('.btn-add').removeClass("btn-sub");

})





document.getElementById('table_section').addEventListener('change', onChange, false);


document.getElementById('add_modal').addEventListener('change', myFunc, false);








// -------------------------- Button click for modals

var addModal = document.getElementById("add_modal");
var addBtn = document.getElementById("add");

var addSpan = document.getElementsByClassName("close")[0];
var addCancel = document.getElementById('addcancel');
var addClear = document.getElementById('clear');

addBtn.onclick = function () {
    addModal.style.display = "block";
}

addSpan.onclick = function () {
    addModal.style.display = "none";
    custName.value = "";
    custNo.value = "";
    invoiceNo.value = "";
    invoiceAmt.value = "";
    dueDate.value = "";
    subject.value = "";
    $('.btn-add').attr("disabled", true);
    $('.btn-add').removeClass("btn-sub");
}

addClear.onclick = function () {
    custName.value = "";
    custNo.value = "";
    invoiceNo.value = "";
    invoiceAmt.value = "";
    dueDate.value = "";
    subject.value = "";
    $('.btn-add').attr("disabled", true);
    $('.btn-add').removeClass("btn-sub");
}

window.onclick = function (event) {
    if (event.target == addModal) {
        addModal.style.display = "none";
    }
}

addCancel.onclick = function () {
    addModal.style.display = "none";
    custName.value = "";
    custNo.value = "";
    invoiceNo.value = "";
    invoiceAmt.value = "";
    dueDate.value = "";
    subject.value = "";
}


var delModal = document.getElementById("del_modal");
var delBtn = document.getElementById("del");
var delSpan = document.getElementsByClassName("close")[1];
var delCancel = document.getElementById("delcancel");

delBtn.onclick = function () {
    delModal.style.display = "block";
}

delSpan.onclick = function () {
    delModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == delModal) {
        delModal.style.display = "none";
    }
}

delCancel.onclick = function () {
    delModal.style.display = "none";
}


var editModal = document.getElementById("edit_modal");
var editBtn = document.getElementById("edit");

var editSpan = document.getElementsByClassName("close")[2];
var editCancel = document.getElementById('editcancel');

editBtn.onclick = function () {
    editModal.style.display = "block";
}

editSpan.onclick = function () {
    editModal.style.display = "none";
    invoice_AMT.value = "";
    notes.value = "";
}

window.onclick = function (event) {
    if (event.target == editModal) {
        editModal.style.display = "none";
    }
}

editCancel.onclick = function () {
    editModal.style.display = "none";
}


$('#reset').on('click', function () {
    invoice_AMT.value = "";
    notes.value = "";
});

$('#editcancel').on('click', function () {
    invoice_AMT.value = "";
    notes.value = "";
});


// var $rows = $('#invoice_table tbody tr');
// $('#search').keyup(function() {

// var val = '^(?=.*\\b' +
// $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
// reg = RegExp(val, 'i'),
// text;

// $rows.show().filter(function() {
// text = $(this).text().replace(/\s+/g, ' ');
// return !reg.test(text);
// }).hide();
// });


function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("invoice_table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search
    // query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}





// Rendering json data into html table

// for(var i=0; i<data.length; i++){

// var tr = "<tr>";
// var td0 = "<td><input type='checkbox' name='chk'></td>"
// var td1 = "<td>" + data[i]['name_customer'] + "</td>";
// var td2 = "<td>" + data[i]['cust_number'] + "</td>";
// var td3 = "<td>"+ data[i]['invoice_no'] +"</td>";
// var td4 = "<td>" + data[i]['total_open_amount'] + "</td>";
// var td5 = "<td>" + data[i]['due_in_date'] + "</td>";
// var td6 = "<td>" + data[i]['predicted_date'] + "</td>";
// var td7 = "<td>"+ data[i]['notes'] +"</td></tr>";

// $("tbody").append(tr+td0+td1+td2+td3+td4+td5+td6+td7);
// }

const showOnLoad = (data) => {
    const tableData = data;
    const tableBody = document.getElementById('table_body');
    tableData.forEach(tableRow => {
        let tableEle = "<tr><td><input type='checkbox' name='chk'></td>";
        console.log(tableRow);
        Object.entries(tableRow).forEach(tableRowEle => {
            const [key, value] = tableRowEle;
            tableEle += "<td>" + value + "</td>";
        });
        tableEle += "</tr>";

        tableBody.innerHTML += tableEle;

    });


}


const fetchTableData = () => {
    fetch('http://localhost:8080/Summer_Internship_Backend/test')
        .then(response => {
            return response.json();
        })
        .then(jsonResult => {
            showOnLoad(jsonResult);
        })
        .catch(error => {
            console.log(error);
        })
}

(
    function () {
        fetchTableData();
    }
)()


document.getElementsByClassName('del-btn')[0].onclick = function () {
	fetch('http://localhost:8080/Summer_Internship_Backend/delete',{ method: 'POST'}).then(alert('Deleted !!'));
};




