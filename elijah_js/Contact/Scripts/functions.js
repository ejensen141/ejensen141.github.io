
var site_folder = "/elijah_js"; // if site is ROOT then make this field ""

function makeNavLink(linkname,location)
{
 // must be from root of site
var tag = "http://"+window.location.hostname+site_folder+location;
var htmlcode = "<li><a class='banner' href='"+tag +"' >"+linkname+"</a></li>";
document.writeln(htmlcode);
}

function makeLink(linkname, location)
{

var htmlcode = "<a href=\"http://"+window.location.hostname+site_folder+location+"\"> "+linkname+" </a>";
document.write(htmlcode);

}

function putICONS()
{
//icons
document.write("<div class = \"icons\"><ul><li><a class= 'banner' href='https://www.linkedin.com/profile/public-profile-settings?trk=prof-edit-edit-public_profile' ><img width = \"50px\" height = \"50px\" class = \"icon\" src=\"media/linkedin_icon.png\" alt=\"Elijah Jensen \"  /></a></li><li><a class= 'banner' href='http://github.com/ejensen141'><img width = \"50px\" height = \"50px\" class = \"icon\" src=\"media/github_icon.png\" alt=\"Elijah Jensen \"  /></a></li> <li><a class= 'banner' href='mailto:ejensen141@gmail.com'><img width = \"50px\" height = \"50px\" class = \"icon\" src=\"media/email_icon.png\" alt=\"Elijah Jensen \"  /></a></li></ul></div><p class=\"one\"></p>");

}

function putImageSide(path)
{
document.write("<div class=\"imagefloater\"><figure><img  src=\""+path+"\" alt=\"Elijah Jensen \"  /><figcaption style=\"text-align:center\"></figcaption></figure></div>");

}


