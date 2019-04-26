(async () => {

    const imagesRaw = await fetch(`./list.json`);
    if (!imagesRaw.ok) {
        const errorText = await imagesRaw.text();
        throw new Error(errorText);
    }

    let images = await imagesRaw.json();

    images = images.filter( i => i !== "");


    const body = document.querySelector('body');
    const $counter = document.querySelector('.counter');

    const loadAllTheFrames = () => {
        const imgPromises = [];
        for (const image of images) {
            imgPromises.push(fetch(`./${image}`));
        }

        return Promise.all(imgPromises);
    }


    var myImage = new Image(1080, 1920);

    const $loader = document.querySelector('.loader');

    loadAllTheFrames()
        .then(() => {

            console.log('All images are loaded');

            $loader.style.display = "none";

            myImage.src = images[0];
            document.body.appendChild(myImage);

        })
        .catch((e) => {

            $loader.style.display = "none";

            const element = document.createElement('p')
            element.innerHTML = `Something went wrong <small>${e}</small>`;
            document.body.appendChild(element);

            console.log('Error when preloading the images');
        });





    const getImgNum = instance => parseInt(instance.src.replace('output', '').replace('.jpg', '').replace(`${document.location.origin}${document.location.pathname}`, ''));

    const getLastImgNum = array => parseInt(array[array.length - 1].replace('output', '').replace('.jpg', ''));

    const getFirstImgNum = array => parseInt(array[0].replace('output', '').replace('.jpg', ''));


    const updateCounter = (total, current) => {
        $counter.innerText = `${current} / ${total}`;
    }






    const addZeros = numToConvert => {
        let num = numToConvert.toString();
        if (num.length === 1) return '00' + num;
        if (num.length === 2) return '0' + num;
        return num;
    }

    const goBack = () => {

        const firstImg = getFirstImgNum(images);

        const curentMinus1 = (getImgNum(myImage) - 1 < firstImg) ? getLastImgNum(images) : getImgNum(myImage) - 1;

        myImage.src = `./output${addZeros(curentMinus1)}.jpg`;

        updateCounter(images.length, curentMinus1);
    }


    const goNext = () => {

        let curentImgNumber = getImgNum(myImage);

        if (curentImgNumber === getLastImgNum(images)) {

            curentImgNumber = getFirstImgNum(images);
        }

        myImage.src = `./output${addZeros(curentImgNumber+1)}.jpg`;

        updateCounter(images.length, curentImgNumber + 1);

    }

    document.querySelector('.back').addEventListener('click', goBack);
    document.querySelector('.next').addEventListener('click', goNext);
    myImage.addEventListener('click', goNext);

    body.addEventListener('keydown', function (event) {
        if (event.key === "ArrowRight") goNext();
        if (event.key === "ArrowLeft") goBack();
    });


})()
.catch(e => console.log)