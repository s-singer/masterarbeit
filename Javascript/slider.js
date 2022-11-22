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
    if (category == 'security') {
        security[index] = value;
        console.log(security[index]);
        return;
    }
    if (category == 'logging') {
        logging[index] = value;
        console.log(logging[index]);
        return;
    }
    if (category == 'storage') {
        storage[index] = value;
        console.log(storage[index]);
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


function addListHighlight(listitem, removeitem) {
    // var v = document.getElementsByClassName(listitem);
    var remove = document.getElementById(removeitem);
    remove.className = remove.className.replace('highlighted', '');
    var elem = document.getElementById(listitem);
    elem.classList.add("highlighted");
}

function updateProgressbar(value) {
    bar = document.getElementById('progressbar');
    bar.setAttribute("value", value);
}

function createPdf() {
    // const element = document.querySelector('body');
    var element = document.createElement('div');
    element.style.width = '1240px'; //1240 × 1754
    element.style.height = '1754px';
    element.style.margin = '2cm';


    element.innerHTML +=  '<style>'+
'   #resulttable {'+
'     font-family: \'Poppins\';'+
'     border-collapse: collapse;'+
'     margin-bottom: 20px;' +
'     width: 50%;'+
'   }'+
'   '+
'   #resulttable tr:nth-child(even){background-color: #f2f2f2;}'+
'   #resulttable caption {'+
'     text-align: left;'+
'     background-color: #0073cc;'+
'     color: white;'+
'   }'+
'   </style>';
    //grundlagen
    element.innerHTML += '<table id="resulttable">' +
        '<caption>Grundlagen:</caption>' +
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
        element.innerHTML += '<table id="resulttable">' +
            '<caption>Kubernetes bei Digitalocean:</caption>' +
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
        element.innerHTML += '<table id="resulttable">' +
            '<caption>Kubernetes: </caption>' +
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
    element.innerHTML += '<table id="resulttable">' +
        '<caption>Gestaltung des Dockerfiles: </caption>' +
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

    // security

    if (security[0] != null) {
        element.innerHTML += '<table id="resulttable">' +
            '<caption>Sicherheitseinstellungen: </caption>' +
            '   <tr>' +
            '       <td>Ausführung als privileged:</td>' +
            '       <td>' + security[0] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Nutzung der Mandatory Access Control:</td>' +
            '       <td>' + security[1] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Filesystem als read-only:</td>' +
            '       <td>' + security[2] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Einführen von Sicherheitsguidelines:</td>' +
            '       <td>' + security[3] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Art des genutzten Registrys:</td>' +
            '       <td>' + security[4] + '</td>' +
            '   </tr>' +
            '   <tr>' +
            '       <td>Nutzung von etables:</td>' +
            '       <td>' + security[5] + '</td>' +
            '   </tr>' +
            '</table>';
    }
    // hardware
    if (hardware[0] != null) {
        element.innerHTML += '<table id="resulttable">' +
            '<caption>Hardwareeinstellungen: </caption>' +
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

    //speicher 
    element.innerHTML += '<table id="resulttable">' +
        '<caption>Speichereinstellungen: </caption>' +
        '   <tr>' +
        '       <td>Nutzung von Volumes:</td>' +
        '       <td>' + storage[0] + '</td>' +
        '   </tr>' +
        '   <tr>' +
        '       <td>Volumes auf gleichem System:</td>' +
        '       <td>' + storage[1] + '</td>' +
        '   </tr>' +
        '   <tr>' +
        '       <td>Einsatz von Volume Sharing:</td>' +
        '       <td>' + storage[2] + '</td>' +
        '   </tr>' +
        '   <tr>' +
        '       <td>Auswahl eines Storage Drivers:</td>' +
        '       <td>' + storage[3] + '</td>' +
        '   </tr>' +
        '</table>';

    //logging
    element.innerHTML += '<table id="resulttable">' +
        '<caption>Logging: </caption>' +
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
    element.innerHTML += '<table id="resulttable">' +
        '<caption>Lokale Entwicklung: </caption>' +
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
    //code copied from w3schools: https://www.w3schools.com/howto/howto_js_filter_table.asp
    function removeUndefinedRows(element) {
        var input, filter, table, tr, td, i, txtValue;
        input = 'undefined';
        filter = input.toUpperCase();
        // table = document.getElementById("resulttable");
        table = element;

        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "none";
                } else {
                    tr[i].style.display = "";
                }
            }
        }
        return element;
    }

    html2pdf(element);
}