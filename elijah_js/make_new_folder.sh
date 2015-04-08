#!/bin/bash


		
		
	if [ -d $1 ]; then
		cp media/ CSS/ Scripts/ -r $1
		echo "Folder Exists Already"
	else

		mkdir $1
		cp media/ CSS/ Scripts/ index.html -r  $1
	fi


	
