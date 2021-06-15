
//adding eventListener for create project button.
//will create a project name and description
document.addEventListener('DOMContentLoaded', function () {
  const createPostButton = document.getElementById('create-post-button');
  createPostButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const title = document.getElementById('post-title').value.trim();
    const desc = document.getElementById('discription-text').value.trim();
    const user_id = document.getElementById('greetings').getAttribute('data-user-id');
    const username = document.getElementById('greetings').getAttribute('data-username');


    try{
      const response = await fetch('/api/posts/', {
        method: 'POST',
        body: JSON.stringify({
          user_id: user_id,
          username: username,
          post_title : title,
          post_content: desc,
          
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        // document.querySelector('.modal').display = 'none';
        document.location.reload();
      }else{
        alert('something went wrong');
      }
    }catch(err){
      alert(err);
    }
  });
});

  