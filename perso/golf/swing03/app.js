const images = ["output001.jpg", "output002.jpg", "output003.jpg", "output004.jpg", "output005.jpg", "output006.jpg", "output007.jpg", "output008.jpg", "output009.jpg", "output010.jpg", "output011.jpg", "output012.jpg", "output013.jpg", "output014.jpg", "output015.jpg", "output016.jpg", "output017.jpg", "output018.jpg", "output019.jpg", "output020.jpg", "output021.jpg", "output022.jpg", "output023.jpg", "output024.jpg", "output025.jpg", "output026.jpg", "output027.jpg", "output028.jpg", "output029.jpg", "output030.jpg", "output031.jpg", "output032.jpg", "output033.jpg", "output034.jpg", "output035.jpg", "output036.jpg", "output037.jpg", "output038.jpg", "output039.jpg", "output040.jpg", "output041.jpg", "output042.jpg", "output043.jpg", "output044.jpg", "output045.jpg", "output046.jpg", "output047.jpg", "output048.jpg", "output049.jpg", "output050.jpg", "output051.jpg", "output052.jpg", "output053.jpg", "output054.jpg", "output055.jpg", "output056.jpg", "output057.jpg", "output058.jpg", "output059.jpg", "output060.jpg", "output061.jpg", "output062.jpg", "output063.jpg", "output064.jpg", "output065.jpg", "output066.jpg", "output067.jpg", "output068.jpg", "output069.jpg", "output070.jpg", "output071.jpg", "output072.jpg", "output073.jpg", "output074.jpg", "output075.jpg", "output076.jpg", "output077.jpg", "output078.jpg", "output079.jpg", "output080.jpg", "output081.jpg", "output082.jpg", "output083.jpg", "output084.jpg", "output085.jpg", "output086.jpg", "output087.jpg", "output088.jpg", "output089.jpg"];


const body = document.querySelector('body');
const $counter = document.querySelector('.counter');

var myImage = new Image(1080, 1920);
myImage.src = images[0];
document.body.appendChild(myImage);


const getImgNum = instance => parseInt(instance.src.replace('output', '').replace('.jpg', '').replace(`${document.location.origin}${document.location.pathname}`, ''));

const getLastImgNum = array => parseInt(array[array.length - 1].replace('output', '').replace('.jpg', ''));

const getFirstImgNum = array => parseInt(array[0].replace('output', '').replace('.jpg', ''));


const updateCounter = (total, current) => {
    $counter.innerText = `${current} / ${total}`;
}


const goBack = () => {

    const firstImg = getFirstImgNum(images);

    const curentMinus1 = (getImgNum(myImage) - 1 < firstImg) ? getLastImgNum(images) : getImgNum(myImage) - 1;

    myImage.src = `./output${curentMinus1}.jpg`;

    updateCounter(images.length, curentMinus1);
}


const goNext = () => {

    let curentImgNumber = getImgNum(myImage);

    if (curentImgNumber === getLastImgNum(images)) {

        curentImgNumber = getFirstImgNum(images);
    }

    myImage.src = `./output${curentImgNumber+1}.jpg`;

    updateCounter(images.length, curentImgNumber + 1);

}

document.querySelector('.back').addEventListener('click', goBack);
document.querySelector('.next').addEventListener('click', goNext);


body.addEventListener('keydown', function (event) {
    if (event.key === "ArrowRight") goNext();
    if (event.key === "ArrowLeft") goBack();
});