const router = require('express').Router();
// eslint-disable-next-line no-unused-vars
const { User, Post } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll();
    const posts = postData.map(each => each.get({ plain: true }));

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }


});


router.get('/:id', withAuth, async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
    const postData = post.get({ plain: true });

    console.log(postData);


    res.render('app', { postData, inApp: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      username: req.body.username,
      user_id: req.body.user_id,
      song_title: req.body.song_title,
      song_description: req.body.song_description,
   
    });
    res.render('app', { postData, logged_in: true });
    //   res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const post = await Post.update(
      req.body,
      {
        where: {
          song_id: req.params.id
        }
      });

    res.render('userdash', { post, logged_in: true });
    //   res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
