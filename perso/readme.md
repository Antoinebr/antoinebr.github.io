## Extract the frames

```
ffmpeg -i VID_20190112_121009.mp4  -r 30/1 /Users/abrossault/Desktop/swing01/output%03d.jpg
```

## Create an array 

```
ls output* > list.txt & node back.js > list.json 
```

## Update the array in app.js

