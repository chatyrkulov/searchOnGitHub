let form = document.getElementById("myForm");


form.addEventListener('submit', function(e){
	e.preventDefault()

	let search = document.getElementById("search").value;
	let originalName = search.split(' ').join('')

	document.getElementById("resultName").innerHTML = 

	fetch("https://api.github.com/users/"+ search)
	.then((resultName) => resultName.json())
	.then((data) => {
		console.log(data)

		document.getElementById("resultName").innerHTML = `
		<br>
			<a target="_blank" href="https://github.com/${originalName}"><img src="${data.avatar_url}" width="250px"></a>
			<h3> Name: ${data.name} </h3>
			<h3> Login: ${data.login}</h3> 
			`
	});
	document.getElementById("resultBlog").innerHTML = 

	fetch("https://api.github.com/users/"+ search)
	.then((resultBlog) => resultBlog.json())
	.then((data) => {
		console.log(data)

		document.getElementById("resultBlog").innerHTML = `
		<br>
			<h3> URL GitHub: <a target="_blank" href="https://github.com/${originalName}">${data.html_url}</a></h3> 
			<h3> BLOG: ${data.blog}</h3>
			<h3> City: ${data.location}</h3>
			<h3> Email: ${data.email}</h3>
			<div style="display: flex;">
				<h3 style="margin-right: 2rem">Followers: ${data.followers}</h3>
				<h3>Following: ${data.following}</h3>
			</div>
		`
	 })
})