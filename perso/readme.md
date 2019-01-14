## Extract the frames

```
ffmpeg -i *.mp4  -ss 00:00:20  -r 30/1 /Users/abrossault/Desktop/fucked-up/output%03d.jpg
```

## Create an array 

```
ls output* > list.txt & node back.js > list.json 
```

## Update the array in app.js

