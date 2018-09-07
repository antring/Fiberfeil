javascript:
var knr = document.getElementById('customer-info-container').getElementsByClassName('col-md-8 col-xs-8')[0].getElementsByTagName('a')[0].innerHTML;
var name = document.getElementById('customer-crm').getElementsByClassName('col-md-8 col-xs-8')[0].innerHTML;
var kontaktInfo = document.getElementsByClassName('col-md-8 col-xs-8');
var kontaktInfo2 = document.getElementsByClassName('col-md-4 col-xs-4');
var mobilIndex;
var mob;


var contactPanel = document.getElementById('clarity-contact-panel-0').getElementsByClassName('row');
for (i = 0; i < contactPanel.length; i++)
{
	if(contactPanel[i].innerHTML.includes("Mobil:"))
	{
		mobilIndex = i;
	}
}

mob = document.getElementById('clarity-contact-panel-0').getElementsByClassName('col-md-8 col-xs-8')[mobilIndex].innerHTML;


var postnr = document.getElementById('location-details-container').getElementsByClassName('col-md-8');
var postnrBeskrivelse = document.getElementById('location-details-container').getElementsByClassName('col-md-4');
var postNrIndex;
for (i = 0; i < postnr.length; i++)
{
	if(postnrBeskrivelse[i].innerHTML.includes("Post"))
	{
		postNrIndex = i;
	}
}

var adresse = document.getElementsByClassName('clarity-customer-address')[0].innerHTML.replace(/\n/g, "") + ", " + postnr[postNrIndex].innerHTML;

var portInfoBeskrivelse = document.getElementById('access-node-details-container').getElementsByClassName('col-md-5 col-xs-12');
var portInfoSvar = document.getElementById('access-node-details-container').getElementsByClassName('col-md-7 col-xs-12');
var portIndex;

for(i = 0; i < portInfoBeskrivelse.length; i++)
{
	if(portInfoBeskrivelse[i].innerHTML.includes("Portstatus"))
	{
		portIndex = i;
	}
}

var portStatus = portInfoSvar[portIndex].innerHTML;


var provInfo1 = document.getElementById('access-node-config-container').getElementsByClassName('col-md-5 col-xs-12');
var provInfo2 = document.getElementById('access-node-config-container').getElementsByClassName('col-md-7 col-xs-12');
var infoArray = "";

for (i = 0; i < provInfo1.length; i++)
{
	if(provInfo1[i].innerHTML.includes("Adresse") == false && provInfo1[i].innerHTML.includes("Beskrivelse") == false)
	{
		infoArray += provInfo1[i].innerHTML + " " + provInfo2[i].textContent + "</br>";
	} 
}

var portInfo;

var nodeNavn;
var modulNr;
var portNr;

for(i = 0; i < provInfo1.length; i++)
{
	if(provInfo1[i].innerHTML.includes("Aksessnode"))
	{
		nodeNavn = provInfo2[i].innerHTML;
	}
	if(provInfo1[i].innerHTML.includes("Modulnummer"))
	{
		modulNr = provInfo2[i].innerHTML;
	}
	if(provInfo1[i].innerHTML.includes("Portnummer"))
	{
		portNr = provInfo2[i].innerHTML;
	}
}

var nodeInfo = nodeNavn + " : " + modulNr + "/" + portNr;



window.open().document.write("<b>Kundenummer: </b>" + knr 
							+ "</br>"
							+ "<b>Navn: </b>" + name 
							+ "</br>" 
							+ "<b>TLF: </b>" + mob 
							+ "</br>" 
							+ "<b>Adresse: </b>" + adresse 
							+ "</br></br>" 
							+ "<b>Node: </b>" + nodeInfo 
							+ "</br></br> "
							+ "<b>Status på port: </b>" + portStatus
							+ "</br></br> "
							+ "<b>Har sambandet fungert før: </b>"
			     			+ "</br></br>"
			     			+ "<b>Når ble sambandet koblet opp: </b>"
							+ "</br></br>"
							+ "<b>Hvilken entreprenør: </b>"
							+ "</br></br>" 
							+ "<b>Melding: </b>"
							+ "</br></br>" 
							+ "<b>Portstatus fra prov: </b>" 
							);
