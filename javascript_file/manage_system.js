// 新增数据函数
function addRow() {
    var table = document.getElementById("table");
    // console.log(table);
    var length = table.rows.length;
    //插入行
    var newRow = table.insertRow(length);
    //插入列
    var id_col = newRow.insertCell(0);
    var question_col = newRow.insertCell(1);
    var type_col = newRow.insertCell(2);
    var anw_col = newRow.insertCell(3)
    var action_col = newRow.insertCell(4);

    id_col.innerHTML = length;
    question_col.innerHTML = "请输入题目";
    type_col.innerHTML = "请输入题目类型";
    anw_col.innerHTML = "答案";
    action_col.innerHTML = "<button onclick='editRow(this)'>编辑</button> <button onclick='deleteRow(this)'>删除</button>";
}

function deleteRow(button)
{
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

//编辑数据
function editRow(button)
{
    var row = button.parentNode.parentNode;
    var question = row.cells[1];
    var question_type = row.cells[2];
    var question_anwser = row.cells[3];

    var input_question = prompt("请输入题目");
    var input_question_type = prompt("请输入题目类型");
    var input_question_anwser = prompt("请输入答案");

    question.innerHTML = input_question;
    question_type.innerHTML = input_question_type;
    question_anwser.innerHTML = input_question_anwser;
}