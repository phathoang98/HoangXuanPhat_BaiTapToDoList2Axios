
// ------- BIẾN TOÀN CỤC

var service = new TaskService();
var validation = new Validation();


/**
 *  --- LẤY THÔNG TIN NGƯỜI DÙNG
 */

function layListTask() {

    service.getListTask()
        .then(function (result) {
            createTable(result.data);
        })
        .catch(function (err) {
            console.log(err);
        })

};

layListTask(); // Phải gọi ra ngay sau khi tạo hàm , vì ko sẽ in ra hết tất cả thông tin đã từng nhập


/**
 *  ------------ NÚT ADD TASK
 */

getEleId('addItem').addEventListener('click', function () {
    var input = getEleId("newTask").value;

    // Check có giá trị và Rỗng

    var isValid = true;

    isValid &= validation.kiemTraRong(input);

    if (!isValid) return;

    // New Task

    var task = new Task("", input);

    service.addTask(task)
        .then(function (result) {
            alert('Add Success');
            layListTask();
        })
        .catch(function (err) {
            console.log(err);
        })

    reFreshInput();


})



// ----------- HÀM TẠO BẢNG

function createTable(arr) {

    var content_1 = "";
    var content_2 = "";

    arr.forEach(function (item) {
        if (item.status == "todo") {
            content_1 += `
            <li>
                <span>${item.contentTask}</span>
                <div class="buttons">
                    <button class="remove" onclick="xoaTask(${item.id})"><i class="fas fa-trash-alt"></i></button>
                    <button class="complete" onclick="changeStatus(${item.id})"><i class="far fa-check-circle"></i></button>
                </div>
            </li>     
            `;
        }
        else if (item.status == "completed") {
            content_2 += `
                <li>
                    <span>${item.contentTask}</span>
                    <div class="buttons">
                        <button class="remove" onclick="xoaTask(${item.id})"><i class="fas fa-trash-alt"></i></button>
                        <button class="complete" onclick="changeStatus(${item.id})"><i class="fas fa-check-circle"></i></button>
                    </div>
                </li>     
              `;
        }
    });

    getEleId("todo").innerHTML = content_1;
    getEleId("completed").innerHTML = content_2;

};



/**
 *  ------ XÓA TASK
 */

function xoaTask(id) {
    service.deleteTask(id)

        .then(function (result) {
            alert('Delete Success');
            layListTask();
        })
        .catch(function (err) {
            console.log(err);
        })
}


/**
 *  ------- CHUYỂN TRẠNG THÁI
 * 
 */

function changeStatus(id) {

    service.getTaskById(id)

        .then(function (id) {

            var t = id.data;
            return t.status = "todo" === t.status ? "completed" : "todo",
                service.updateTask(t)
        })

        .then(function () {
            alert("Change Status Success!"),
                layListTask();
        })

}



// --------- LOADING






// LÀM MỚI CHO Ô INPUT

function reFreshInput() {
    getEleId('newTask').value = "";
}


// TỐI ƯU CODE

function getEleId(id) {
    return document.getElementById(id);
}

