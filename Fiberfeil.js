javascript: var knr = document.getElementById('customer-info-container').getElementsByClassName('col-md-8 col-xs-8')[0].getElementsByTagName('a')[0].innerHTML;
var name = document.getElementById('customer-crm').getElementsByClassName('col-md-8 col-xs-8')[0].innerHTML;
var kontaktInfo = document.getElementsByClassName('col-md-8 col-xs-8');
var mobilIndex;
var mob;
for (i = 0; i < kontaktInfo.length; i++) {
  if (kontaktInfo[i].innerHTML.includes("+47")) {
    mobilIndex = i;
  }
}
var mob = kontaktInfo[mobilIndex].innerHTML;
var postnr = document.getElementById('location-details-container').getElementsByClassName('col-md-8')[1].innerHTML.replace(/\n/g, "");
var adresse = document.getElementsByClassName('clarity-customer-address')[0].innerHTML.replace(/\n/g, "") + ", " + postnr;
var modul = document.getElementById('access-node-config-container').getElementsByClassName('col-md-7 col-xs-12')[5].innerHTML;
var port = document.getElementById('access-node-config-container').getElementsByClassName('col-md-7 col-xs-12')[6].innerHTML;
var provInfo1 = document.getElementById('access-node-config-container').getElementsByClassName('col-md-5 col-xs-12');
var provInfo2 = document.getElementById('access-node-config-container').getElementsByClassName('col-md-7 col-xs-12');
var infoArray = "";
for (i = 0; i < provInfo1.length; i++) {
  if (provInfo1[i].innerHTML.includes("Adresse") == false || provInfo1[i].innerHTML.includes("Beskrivelse") == false) {
    infoArray += provInfo1[i].innerHTML + " " + provInfo2[i].textContent + "</br>";
  }
}
window.open().document.write("Kundenummer: " + knr + "</br>" + "Navn: " + name + "</br>" + "TLF: " + mob + "</br>" + "Adresse: " + adresse + "</br></br>" + infoArray);
