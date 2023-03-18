// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 	6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// 	котра має детальну інфу про поточний пост.

// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//
// 	user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
// 	блоки з короткою іфною про post - в ряд по 5 .
//
// 	post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//
// 	Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки
// 	(дати фон. марджини і тд)

let url=new URL(location.href);
let id=url.searchParams.get('id');
 fetch('https://jsonplaceholder.typicode.com/users/'+id)
.then(value => value.json())
.then(user=>{
	let div= document.createElement('div');
	div.classList.add('user');
		let p=document.createElement('p');
	p.innerText=JSON.stringify(user);
	p.style.background='lightblue';
		let button=document.createElement('button');
	button.innerText='posts of current user';
	button.style.width='90%';
	button.onclick= function (ev) {
		ev.preventDefault();
		fetch('https://jsonplaceholder.typicode.com/users/'+id+'/posts')
			.then(value => value.json())
			.then(posts=>{
				let divPosts= document.createElement('div');
				divPosts.classList.add('listOfPosts');
				for (const post of posts) {
					let divPost = document.createElement('div');
					divPost.classList.add('postOfList');
					let a=document.createElement('a');
					a.innerText=post.title;
					let postId=post.id;
					a.href='post-details.html?Id='+postId;
					divPost.appendChild(a);
					divPosts.appendChild(divPost);
				}
				document.body.appendChild(divPosts);
			})
	}
	div.append(p, button);
	document.body.appendChild(div);
})