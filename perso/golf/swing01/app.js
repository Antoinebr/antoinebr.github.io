const images = ["output569.jpg", "output570.jpg", "output571.jpg", "output572.jpg", "output573.jpg", "output574.jpg", "output575.jpg", "output576.jpg", "output577.jpg", "output578.jpg", "output579.jpg", "output580.jpg", "output581.jpg", "output582.jpg", "output583.jpg", "output584.jpg", "output585.jpg", "output586.jpg", "output587.jpg", "output588.jpg", "output589.jpg", "output590.jpg", "output591.jpg", "output592.jpg", "output593.jpg", "output594.jpg", "output595.jpg", "output596.jpg", "output597.jpg", "output598.jpg", "output599.jpg", "output600.jpg", "output601.jpg", "output602.jpg", "output603.jpg", "output604.jpg", "output605.jpg", "output606.jpg", "output607.jpg", "output608.jpg", "output609.jpg", "output610.jpg", "output611.jpg", "output612.jpg", "output613.jpg", "output614.jpg", "output615.jpg", "output616.jpg", "output617.jpg", "output618.jpg", "output619.jpg", "output620.jpg", "output621.jpg", "output622.jpg", "output623.jpg", "output624.jpg", "output625.jpg", "output626.jpg", "output627.jpg", "output628.jpg", "output629.jpg", "output630.jpg", "output631.jpg", "output632.jpg", "output633.jpg", "output634.jpg", "output635.jpg", "output636.jpg", "output637.jpg", "output638.jpg", "output639.jpg", "output640.jpg"];




const body = document.querySelector('body');
const $counter = document.querySelector('.counter');

var myImage = new Image(1080, 1920);
myImage.src = 'output569.jpg';
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