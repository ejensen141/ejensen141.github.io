// 
// layout.js
// glentner.github.io/style/
//
// set attributes based on device/screen
//

function mobile_layout( ) {

	var user_agent = navigator.userAgent.toLowerCase( );

	if ( user_agent.search("mobi") > -1 )
	{
		var sheet; 
		var css_string;

		css_string = ".main { width: 95%; padding: 0; }";
		sheet = document.createElement('style');	
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " .menu { position: static; width: 100%; }";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " .menu a .name { font-size: 65pt; " +
			" padding: 30pt; } ";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " .menu .select { padding: 14pt; width: 100%; } ";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " .menu a:link, .menu a:visited, " +
			".menu a:hover, .menu a:active { " +
			" font-size: 48pt; }";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " .menu p { padding-top: 10pt; " +
		   "padding-bottom: 5pt; border-top: 1pt solid DarkGray; } ";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " .tags { padding-left: 20pt; font-size: 24pt; } ";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " .desktop-notice { display: none; } ";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " .icon { display: none; } ";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " .sidebar { float: none; width: auto; } ";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " .sidebar .portrait { display: none; } ";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " .sidebar .content { padding: 14pt; width: auto; } ";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " .sidebar .content h2 { font-size: 56pt; } ";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " .sidebar .content p { font-size: 28pt; } " +
			"padding: 28pt; } ";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " .sidebar .content img { display: none; } ";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " #mobile-portrait { display: inline; } ";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " .sidebar .content .section { " +
			"border-bottom: 1pt solid DarkGray; padding-bottom: 20pt; } ";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " .sidebar .content .section h3 { " +
			"font-size: 48pt; } ";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " #top { display: inline; } ";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " .sidebar .vspace { height: 0; } ";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		css_string = " li { font-size: 16pt; padding-left: 3em; } ";
		sheet = document.createElement('style');
		sheet.innerHTML = css_string;
		document.body.appendChild(sheet);

		//css_string = " #video { display: none; } ";
		//sheet = document.createElement('style');
		//sheet.innerHTML = css_string;
		//document.body.appendChild(sheet);

	}
}

function sendto( id, page )
{
	var user_agent = navigator.userAgent.toLowerCase( );
	if ( user_agent.search("mobi") > -1 )
    {
        document.getElementById(id).style.backgroundColor = "LightSteelBlue";
        location.replace(page);
    }
}
