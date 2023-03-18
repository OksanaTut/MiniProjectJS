// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули

// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
// 	user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
// 	блоки з короткою іфною про post - в ряд по 5 .
// 	post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
// 	Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)

let mainDiv=document.createElement('div');
mainDiv.classList.add('main');

fetch('https://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then (users=>{
	for (const user of users) {
		let div = document.createElement('div');
		div.classList.add('users');
			let h2 = document.createElement('h2');
			h2.innerText='User '+user.id+' -  '+user.name;

			let a=document.createElement('a');
			a.href='user-details.html?id='+user.id;
			a.innerText='View details';
			a.style.display='block';
			a.style.background='gray';
			a.style.borderWidth='5px';

		div.append(h2, a);
		mainDiv.appendChild(div);
	}
})
document.body.appendChild(mainDiv);