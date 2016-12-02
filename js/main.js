userArray = [
	{
		name: 'tenzin',
		password: 'gogo'
	},
	{
		name: 'topjor',
		password: 'ruru'
	},
	{
		name: 'kunga',
		password: 'didi'
	},

]

document.getElementById('password').addEventListener('keypress', enterKey)

function enterKey(e){
	if(e.keyCode == 13){
		logIn()
	}
}false

function logIn(){
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(i = 0; i < userArray.length; i++){
		if(username == userArray[i].name && password == userArray[i].password){
			alert('you are ' + username + ' , Welcome!!')
			return
		}
	}alert('you are not the right user, go away!!')
}

document.getElementById('newPassword').addEventListener('keypress', enterKey)

function enterKey(e){
	if(e.keyCode == 13){
		register()
	}
}false

function register(){
	var newUsername = document.getElementById('newUsername').value
	var newPassword = document.getElementById('newPassword').value
	var combine = {
		name: newUsername,
		password: newPassword
	}
	for(i = 0; i < userArray.length; i++){
		if(newUsername == userArray[i].name || newPassword == userArray[i].password){
			alert('username ' + newUsername + ' already taken!! Try Again!')
			return
		}else if(newPassword.length < 6){
			alert('Password should be more than 6 characters!')
			return
		}
	}userArray.push(combine)
	console.log(userArray)
	alert('Welcome new user!!')
}