document.getElementById('getUser').addEventListener('click', () => 
{
	fetch(`https://api.github.com/users/${document.getElementById('user').value}`)
    .then(result => result.json())
    .then(data => {
        
        var avatar = document.getElementById('image');
        avatar.setAttribute('src', data.avatar_url);
		
        var userName = document.getElementById('userName');
        userName.innerHTML = data.name || "User Name Empty";
		
        var userLogin = document.getElementById('userLogin');
        userLogin.innerHTML = data.login || "Login empty";
		
        var userBio = document.getElementById('userBio');
        userBio.innerHTML = data.bio || "User info empty";
		
        var userCompany = document.getElementById('userCompany');
        userCompany.innerHTML = data.company || "User company empty";
		
        var userLocation = document.getElementById('userLocation');
        userLocation.innerHTML = data.location || "User location empty";
		
        var userEmail = document.getElementById('userEmail');
        userEmail.innerHTML = data.email || "User mail hidden";
        if (data.userEmail)
            userBlog.setAttribute("href", data.userEmail);
		
        var userBlog = document.getElementById('userBlog');
        userBlog.innerHTML = data.blog || "User blog empty";
        if (data.blog)
            userBlog.setAttribute("href", data.blog);
            
    })
    .catch(err => console.log(err))
});