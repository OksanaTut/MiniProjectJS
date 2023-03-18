// 	На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

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
let id=url.searchParams.get('Id');

fetch('https://jsonplaceholder.typicode.com/posts/'+id)
	.then(value => value.json())
	.then(post =>{
		let div=document.createElement('div');
		div.classList.add('main');
		let p =document.createElement('p');
		p.classList.add('post');
		p.innerText=JSON.stringify(post);
		div.appendChild(p);

		fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
			.then(value => value.json())
			.then(comments=>{
				let divComments=document.createElement('div');
				// divComments.innerText='comments of this post';
				divComments.classList.add('listOfComments');
				for (const comment of comments) {
					let divComment = document.createElement('div');
					divComment.classList.add('comment');
					divComment.innerText=JSON.stringify(comment);
					divComments.appendChild(divComment);
				}
				div.appendChild(divComments);
				}
			)
		document.body.appendChild(div);
	})