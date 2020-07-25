function deleteNeed(needId) {
    $.ajax({
        url: '/need/' + needId + "/delete-json",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({ needId }),
        type: 'POST',
        success: ((res) => {
            $("#" + needId).remove();
        }),
        error: ((error) => {
            console.log("Error : ", error);
        })
    });
}

function deleteN(needId) {
    $.ajax({
        url: '/need/' + needId + "/delete-n-json",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({ needId }),
        type: 'POST',
        success: ((res) => {
            $("#" + needId).remove();
        }),
        error: ((error) => {
            console.log("Error : ", error);
        })
    });
}


function deleteSupport(supportId) {
    $.ajax({
        url: '/support/' + supportId + "/delete-json",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({ supportId }),
        type: 'POST',
        success: ((res) => {
            $("#" + supportId).remove();
        }),
        error: ((error) => {
            console.log("Error : ", error);
        })
    });
}