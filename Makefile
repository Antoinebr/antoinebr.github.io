deploy:
	rsync -arv  $(shell pwd)/dist/ \
	/Users/abrossault/Documents/code/Antoinebr.github.io.git/compareAMP/ --delete \
	& git --git-dir="/Users/abrossault/Documents/code/Antoinebr.github.io.git/.git" add --all \
	& git --git-dir="/Users/abrossault/Documents/code/Antoinebr.github.io.git/.git" commit -a -m "🔥deploy" \
	& git --git-dir="/Users/abrossault/Documents/code/Antoinebr.github.io.git/.git" push origin master 
	