function subButton() {
let subscribButton = document.getElementById('subscribe');


if (subscribButton.innerText === 'subscribe') {
    subscribButton.innerHTML = 'subscribed'
    subscribButton.classList.add('alt-subscribe')
} 

else if (subscribButton.innerText === 'subscribed')
{
    subscribButton.innerHTML = 'subscribe'
    subscribButton.classList.remove('alt-subscribe')
}




}