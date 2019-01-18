# Usage

```bash
node golfSwing.js /Users/abrossault/Desktop/swing.mp4  00:00:06  00:00:10  swing04
```

First argument should be the path of the video ``` /Users/abrossault/Desktop/swing.mp4 ```

Second argument should be the startTIme ```00:00:06``` Here we will extract the frames from 00:00:06 sec 

Third argument should be the endTIme ```00:00:10``` Here how long should be the extraction : in this case 4sec then  00:00:10

Fourth argument should be the folder Name ```swing04``` ( in which folder everything should be created)


To see the result serve the directories with your favorite tool 

```python -m SimpleHTTPServer 1212```

```php -S localhost:8087``` 

If you have erorrs ( 404 ) don't forget to add a trailing slash at the end of the urls eg :```http://localhost:8087/swing01/``` 

# What you need 

You need ffmpeg in your path, get it here : https://www.ffmpeg.org/download.html