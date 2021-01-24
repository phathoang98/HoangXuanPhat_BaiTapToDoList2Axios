function Validation() {

    // CHECK TASK RỖNG

    this.kiemTraRong = function (input) {
        if (input == "") {
            alert("Vui lòng nhập hoạt động của bạn");
            return false;
        }
        else {
            return true;
        }

    }


    // CHECK TRÙNG TASK-NAME

    this.trungTaskName = function (input, list) {

        var exist = false;

        list.forEach(function (item) {
            if (input == item.contentTask) {
                exist = true;
            }
        });

        if (exist) {
            alert("Task Name của bạn đã tồn tại");
            getEle("newTask").value = "";
            return false;

        } else {
            return true;
        }
    }

}