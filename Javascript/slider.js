let fundamentals = [];
let digitalocean = [];
let kubernetes = [];
let dockerfile = [];
let docker = [];
let logging = [];
let hardware = [];
let local = [];
let security = [];
let storage = [];
function testcall(index, value, category) {
    if (category == 'fundamentals'){
        fundamentals[index] = value;
        console.log(fundamentals[index]);
        return;
    }
    if (category == 'kubernetes-digitalocean'){
        digitalocean[index] = value;
        console.log(digitalocean[index]);
        return;
    }
    if (category == 'kubernetes'){
        kubernetes[index] = value;
        console.log(kubernetes[index]);
        return;
    }
    if (category == 'dockerfile'){
        dockerfile[index] = value;
        console.log(dockerfile[index]);
        return;
    }
    if (category == 'logging'){
        logging[index] = value;
        console.log(logging[index]);
        return;
    }
    if (category == 'hardware'){
        hardware[index] = value;
        console.log(hardware[index]);
        return;
    }
    if (category == 'local'){
        local[index] = value;
        console.log(local[index]);
        return;
    }
}

function displayValues(category) {
    if (category == 'fundamentals'){
        console.log('displaying');
        var target = document.getElementById("display-fundamentals");
        target.innerHTML += "<p>" + fundamentals + "</p>";
    }
    if (category == 'digitalocean'){
        console.log('displaying');
        var target = document.getElementById("display-digitalocean");
        target.innerHTML += "<p>" + digitalocean + "</p>";
    }
    if (category == 'kubernetes'){
        console.log('displaying');
        var target = document.getElementById("display-kubernetes");
        target.innerHTML += "<p>" + kubernetes + "</p>";
    }
    if (category == 'dockerfile'){
        console.log('displaying');
        var target = document.getElementById("display-dockerfile");
        target.innerHTML += "<p>" + dockerfile + "</p>";
    }
    if (category == 'logging'){
        console.log('displaying');
        var target = document.getElementById("display-logging");
        target.innerHTML += "<p>" + logging + "</p>";
    }
    if (category == 'hardware'){
        console.log('displaying');
        var target = document.getElementById("display-hardware");
        target.innerHTML += "<p>" + hardware + "</p>";
    }
    if (category == 'local'){
        console.log('displaying');
        var target = document.getElementById("display-local");
        target.innerHTML += "<p>" + local + "</p>";
    }
   
}

function createPdf() {
    // const element = document.querySelector('body');
    var element = document.createElement('div');
    element.innerHTML = "<h1> wird noch gestyled, das Pdf wird bisher nur zum überprüfen der Funktionalität genutzt";
    element.innerHTML += "<p>" + fundamentals + "</p>";
    element.innerHTML += "<p>" + digitalocean + "</p>";
    element.innerHTML += "<p>" + kubernetes + "</p>";
    element.innerHTML += "<p>" + dockerfile + "</p>";
    element.innerHTML += "<p>" + logging + "</p>";
    element.innerHTML += "<p>" + hardware + "</p>";
    element.innerHTML += "<p>" + local + "</p>";
    html2pdf(element);
}
