const images = ["output353.jpg","output354.jpg","output355.jpg","output356.jpg","output357.jpg","output358.jpg","output359.jpg","output360.jpg","output361.jpg","output362.jpg","output363.jpg","output364.jpg","output365.jpg","output366.jpg","output367.jpg","output368.jpg","output369.jpg","output370.jpg","output371.jpg","output372.jpg","output373.jpg","output374.jpg","output375.jpg","output376.jpg","output377.jpg","output378.jpg","output379.jpg","output380.jpg","output381.jpg","output382.jpg","output383.jpg","output384.jpg","output385.jpg","output386.jpg","output387.jpg","output388.jpg","output389.jpg","output390.jpg","output391.jpg","output392.jpg","output393.jpg","output394.jpg","output395.jpg","output396.jpg","output397.jpg","output398.jpg","output399.jpg","output400.jpg","output401.jpg","output402.jpg","output403.jpg","output404.jpg","output405.jpg","output406.jpg"];


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