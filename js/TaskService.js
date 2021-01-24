function TaskService() {


    // ----- LẤY THÔNG TIN TỪ API

    this.getListTask = function () {

        return axios({
            url: "https://6001827a08587400174dad3c.mockapi.io/api/Task",
            method: "GET",
        })

    }

    // ----- ADD TASK

    this.addTask = function (user) {

        return axios({
            url: "https://6001827a08587400174dad3c.mockapi.io/api/Task",
            method: "POST",
            data: user
        })
    }

    // ----- XÓA TASK

    this.deleteTask = function (id) {
        return axios({
            url: `https://6001827a08587400174dad3c.mockapi.io/api/Task/${id}`,
            method: "DELETE",
        })
    }

    // ----- LẤY ID CỦA TASK

    this.getTaskById = function (id) {
        return axios({
            url: `https://6001827a08587400174dad3c.mockapi.io/api/Task/${id}`,
            method: "GET",
        })
    }

    // ------ UPDATE TASK

    this.updateTask = function (task) {
        return axios({
            url: `https://6001827a08587400174dad3c.mockapi.io/api/Task/${task.id}`,
            method: "PUT",
            data: task,
        })
    }
}

