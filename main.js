var siteName = document.getElementById('siteName')
var siteUrl = document.getElementById('siteUrl')
var addBtn = document.getElementById('addBtn')
var tableContent = document.getElementById('tableContent')
var urlList;
if (localStorage.getItem('list') == null) {
    urlList = []
}

else {
    urlList = JSON.parse(localStorage.getItem('list'))
    display()
}


function addsite() {
    var siteObject = {

        sName: siteName.value,
        sUrl: siteUrl.value
    }

    urlList.push(siteObject)
    localStorage.setItem('list', JSON.stringify(urlList))
    console.log(urlList);

}



function clearInput() {
    siteName.value = null;
    siteUrl.value = null;
}



function display() {
    box = ''
    for (var i = 0; i < urlList.length; i++) {

        box += `
        
        <tr>
        <td>${i + 1}</td>
        <td>${urlList[i].sName}</td>
        <td><button class="btn btn-visit  text-white " data-index="0">
        <i class="fa-solid fa-eye pe-2"></i><a target="_blank" class="text-decoration-none text-white" href="${urlList[i].sUrl}">Visit</a>
    </button></td>
        <td><button onclick=" deleteFun(${i})" class="btn btn-delete pe-2  text-white" data-index="0">
            <i class="fa-solid fa-trash-can"></i>
            Delete
          </button></td>
    </tr>`


    }


    tableContent.innerHTML = box
}


addBtn.onclick = function () {

    addsite()
    clearInput()
    display()

}


function deleteFun(index) {

    urlList.splice(index, 1)
    localStorage.setItem('list', JSON.stringify(urlList))
    display(urlList)

}



function validateSite(element) {


    var regex = {
        siteName: /^[a-z|A-Z]{3,}$/,
        siteUrl: /^(?:(?:https?|ftp):\/\/)?(?:www\.)?([a-z0-9-]+\.[a-z]{2,})(?:\/[^\s]*)?$/i


    }



    if (regex[element.id].test(element.value) == true) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        element.nextElementSibling.classList.replace('d-block', 'd-none')
    }
    else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        element.nextElementSibling.classList.replace('d-none', 'd-block')
    }


}




