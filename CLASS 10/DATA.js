function loadNews() {
    var myNews = new XMLHttpRequest()
    myNews.open('GET', 'http://127.0.0.1:8080/DATA.json')
    myNews.send()
}

function loadNews() {

}

function loadStudentData() {

    $('#response').load('DATA 2.html')
}