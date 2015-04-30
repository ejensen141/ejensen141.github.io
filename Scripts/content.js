
var text1 = "My name is Elijah Jensen. \
I hold a B.S. degree in Physics from Austin Peay state university and a Masters of Science degree in Physics from the University of Louisville. I am currently pursuing my PhD. in Physics at the University of Louisville. \
I do research in Optics, Antenna Design, and Electrical Engineering. My main interest in physics is the physics of electromagnetic waves,\
 as well as any other kind of wave. My main interests in Electrical Engineering \
are Hybrid Cars and \"Green\" energy technology. For a more detailed look at my \
 research please see the research page of this site.<br><br>I teach some \
undergraduate physics labs as well, some material for those classes can be \
found under \"Classes\".<br><br>All the material on this site is free and open \
source, feel free to use anything you want, for whatever you want. \
That is after all the goal of science, sharing information! <br><br>The \
following buttons will allow you to contact me however you would like.";


var text2 = "<div style=\" margin-left:20%;width:300px;overflow:auto;\"> \
<pre class=\"sh_c\">int main (void)\n\
{\n\
	/* set PORTB for output*/\n\
	DDRB = 0xFF;\n \
\n \
	while (1) {\n \
		/* set PORTB high */\n \
		PORTB = 0xFF;\n \
		_delay_ms(100);\n \
\
		/* set PORTB low */\n \
		PORTB = 0x00;\n \
		_delay_ms(100);\n \
	}\n \
	return 0;\n \
}\n \
\n \
\
\
</pre></div>";

putImageSide("media/1.jpg");
writeParagraph(text1,"one"); // this is css class one
//writeParagraph(text2,"one"); 
//writeImageParagraph("media/1.jpg","one");
sh_highlightDocument();
//writeParagraph(text1,"one");
putICONS();




