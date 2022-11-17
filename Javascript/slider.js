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
function writeDecision(index, value, category) {
    if (category == 'fundamentals') {
        fundamentals[index] = value;
        console.log(fundamentals[index]);
        return;
    }
    if (category == 'kubernetes-digitalocean') {
        digitalocean[index] = value;
        console.log(digitalocean[index]);
        return;
    }
    if (category == 'kubernetes') {
        kubernetes[index] = value;
        console.log(kubernetes[index]);
        return;
    }
    if (category == 'dockerfile') {
        dockerfile[index] = value;
        console.log(dockerfile[index]);
        return;
    }
    if (category == 'logging') {
        logging[index] = value;
        console.log(logging[index]);
        return;
    }
    if (category == 'hardware') {
        hardware[index] = value;
        console.log(hardware[index]);
        return;
    }
    if (category == 'local') {
        local[index] = value;
        console.log(local[index]);
        return;
    }
}

function displayValues(category) {
    if (category == 'fundamentals') {
        console.log('displaying');
        var target = document.getElementById("display-fundamentals");
        target.innerHTML += "<p>" + fundamentals + "</p>";
    }
    if (category == 'digitalocean') {
        console.log('displaying');
        var target = document.getElementById("display-digitalocean");
        target.innerHTML += "<p>" + digitalocean + "</p>";
    }
    if (category == 'kubernetes') {
        console.log('displaying');
        var target = document.getElementById("display-kubernetes");
        target.innerHTML += "<p>" + kubernetes + "</p>";
    }
    if (category == 'dockerfile') {
        console.log('displaying');
        var target = document.getElementById("display-dockerfile");
        target.innerHTML += "<p>" + dockerfile + "</p>";
    }
    if (category == 'logging') {
        console.log('displaying');
        var target = document.getElementById("display-logging");
        target.innerHTML += "<p>" + logging + "</p>";
    }
    if (category == 'hardware') {
        console.log('displaying');
        var target = document.getElementById("display-hardware");
        target.innerHTML += "<p>" + hardware + "</p>";
    }
    if (category == 'local') {
        console.log('displaying');
        var target = document.getElementById("display-local");
        target.innerHTML += "<p>" + local + "</p>";
    }

}

function addListHighlight(listitem, removeitem) {
    // var v = document.getElementsByClassName(listitem);
    var remove = document.getElementById(removeitem);
    remove.className = remove.className.replace('highlighted', '');
    var elem = document.getElementById(listitem);
    elem.classList.add("highlighted");
}

function createPdf() {
    // const element = document.querySelector('body');
    var element = document.createElement('div');
    element.style.width = '1240px'; //1240 × 1754
    element.style.height = '1754px';
    element.style.margin = '2cm';
    element.innerHTML = "<p>blorg</p>";

    //grundlagen
    element.innerHTML = "<h1 skript=\"text-align: left\">Grundlagen des Hostings:</h1>";
    element.innerHTML += '<table>' +
        // '   <tr>' +
        // '     <th>Auswahlmöglichkeit</th>' +
        // '     <th>Auswahl</th>' +
        // '   </tr>' +
        '   <tr>' +
        '     <td>Auswahl der Hostingart:</td>' +
        '     <td>' + fundamentals[0] + '</td>' +
        '    </tr>' +
        '    <tr>' +
        '       <td>Auswahl des Hostinganbieters:</td>' +
        '       <td>' + fundamentals[1] + '</td>' +
        '      </tr>' +
        '      <tr>' +
        '       <td>Art des Containerhostings:</td>' +
        '       <td>' + fundamentals[2] + '</td>' +
        '      </tr>' +
        '      <tr>' +
        '       <td>Auswahl der Container Orchestration Platform:</td>' +
        '       <td>' + fundamentals[3] + '</td>' +
        '      </tr>' +
        '      <tr>' +
        '       <td>DigitalOcean als Hostinganbieter?</td>' +
        '       <td>' + fundamentals[4] + '</td>' +
        '      </tr>' +
        ' </table>';

    // Digitalocean
    if (digitalocean[0] != null) {
        element.innerHTML += '<table>' +
            '   <tr>' +
            '       <th>Auswahlmöglichkeit</th>' +
            '       <th>Auswahl</th>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Serverstandort:</td>' +
            '       <td>' + digitalocean[0] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Auswahl der Nodeart:</td>' +
            '       <td>' + digitalocean[1] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Leistung der Nodes:</td>' +
            '       <td>' + digitalocean[2] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Autoscaling im Cluster:</td>' +
            '       <td>' + digitalocean[3] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Einsatz von High Avaliability</td>' +
            '       <td>' + digitalocean[4] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Art des Zertifikatmanagements:</td>' +
            '       <td>' + digitalocean[5] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Updates von Minorversionen: </td>' +
            '       <td>' + digitalocean[6] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Detailgrad der Kennzahlen: </td>' +
            '       <td>' + digitalocean[7] + '</td>' +
            '   </tr>' +
            '</table>';
    }

    //Kubernetes 
    if (kubernetes[0] != 0) {
        element.innerHTML += '<table>' +
            '   <tr>' +
            '       <th>Auswahlmöglichkeit</th>' +
            '       <th>Auswahl</th>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>ConfigMap mit zusätzlicher Secret Datei:</td>' +
            '       <td>' + kubernetes[0] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Autoscaling im Cluster:</td>' +
            '       <td>' + kubernetes[1] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Einsatz von Health Checks:</td>' +
            '       <td>' + kubernetes[2] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Hohe Verfügbarkeit des Clusters:</td>' +
            '       <td>' + kubernetes[3] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Erstellen von Backups:</td>' +
            '       <td>' + kubernetes[4] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Einsatz von zentralem Monitoring:</td>' +
            '       <td>' + kubernetes[5] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Zentrale Speicherung von Loggingdaten: </td>' +
            '       <td>' + kubernetes[6] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Zentrale Übersicht der Änderungen am System: </td>' +
            '       <td>' + kubernetes[7] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Automatische Codeverwaltung: </td>' +
            '       <td>' + kubernetes[8] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Nutzung eines CI/CD Tools: </td>' +
            '       <td>' + kubernetes[9] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Wahl des CI/CD Tools: </td>' +
            '       <td>' + kubernetes[10] + '</td>' +
            '   </tr>' +
            '</table>';
    }


    //dockerfile 
    element.innerHTML += '<table>' +
        '   <tr>' +
        '       <th>Auswahlmöglichkeit</th>' +
        '       <th>Auswahl</th>' +
        '   </tr>' +
        '   <tr>' +
        '       <td>Gestaltung des Base Images:</td>' +
        '       <td>' + dockerfile[0] + '</td>' +
        '   </tr>' +
        '   <tr>' +
        '       <td>Einsatz von Health Checks:</td>' +
        '       <td>' + dockerfile[1] + '</td>' +
        '   </tr>' +
        '   <tr>' +
        '       <td>Einsatz eines Multi Stage Image Builds:</td>' +
        '       <td>' + dockerfile[2] + '</td>' +
        '   </tr>' +
        '   <tr>' +
        '       <td>Nutzung spezieller Sicherheitseinstellungen:</td>' +
        '       <td>' + dockerfile[3] + '</td>' +
        '   </tr>' +
        '   <tr>' +
        '       <td>Spezielle Hardwareanforderungen:</td>' +
        '       <td>' + dockerfile[4] + '</td>' +
        '   </tr>' +
        '   <tr>' +
        '       <td>Speicherkonfiguration:</td>' +
        '       <td>' + dockerfile[5] + '</td>' +
        '   </tr>' +
        '</table>';
    // hardware
    if (hardware[0] != null) {
        element.innerHTML += '<table>' +
            '   <tr>' +
            '       <th>Auswahlmöglichkeit</th>' +
            '       <th>Auswahl</th>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Nutzung einer bestimmten CPU-Architektur:</td>' +
            '       <td>' + hardware[0] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Auftreten von Software Aging:</td>' +
            '       <td>' + hardware[1] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Nutzung von Remote Computing:</td>' +
            '       <td>' + hardware[2] + '</td>' +
            '   </tr>' +
            '' +
            '</table>';
    }

    //logging
    element.innerHTML += '<table>' +
        '   <tr>' +
        '       <th>Auswahlmöglichkeit</th>' +
        '       <th>Auswahl</th>' +
        '   </tr>' +
        '   <tr>' +
        '       <td>Art des Loggings:</td>' +
        '       <td>' + logging[0] + '</td>' +
        '   </tr>' +
        '   <tr>' +
        '       <td>Loggingtreiber:</td>' +
        '       <td>' + logging[1] + '</td>' +
        '   </tr>' +
        '   <tr>' +
        '       <td>Loggingtool:</td>' +
        '       <td>' + logging[2] + '</td>' +
        '   </tr>' +
        '' +
        '</table>';

    //lokal
    element.innerHTML += '<table>' +
        '   <tr>' +
        '     <th>Auswahlmöglichkeit</th>' +
        '     <th>Auswahl</th>' +
        '   </tr>' +
        '   <tr>' +
        '     <td>Verwendung von Docker Desktop:</td>' +
        '     <td>' + local[0] + '</td>' +
        '    </tr>' +
        '    <tr>' +
        '       <td>Art der Desktopversion:</td>' +
        '       <td>' + local[1] + '</td>' +
        '      </tr>' +
        '      <tr>' +
        '       <td>Nutzung von Minikube:</td>' +
        '       <td>' + local[2] + '</td>' +
        '      </tr>' +
        '      <tr>' +
        '       <td>Auswahl der Dockeredition:</td>' +
        '       <td>' + local[3] + '</td>' +
        '      </tr>' +
        ' </table>';
    element = removeUndefinedRows(element);
    //scans the document for undefined rows and deletes them
    function removeUndefinedRows(element) {
    
        var tables = document.getElementsByClassName(element.getAttribute('undefined'));
            element.getElementById("undefined").remove();
    }

    html2pdf(element);
}