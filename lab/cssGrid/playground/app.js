async function getData() {

    const response = await fetch('https://reqres.in/api/users?page=2');

    // reponse is not correct
    if (!response.ok) throw new Error('We received an invalid response', response);

    const reponseJson = await response.json();

    return reponseJson;

};



const ustTpl = (firstName, lastName, avatar) => ` 
        <img src="${avatar}">
        <h3>${firstName}-${lastName}</h3>
    `;



(async () => {


    const {
        data
    } = await getData().catch(console.log);

    console.log(data)

    for (let user of data) {

        let element = document.createElement('article');
        element.innerHTML = ustTpl(user.first_name, user.last_name, user.avatar);
        document.querySelector('.users').appendChild(element);

    }


})();