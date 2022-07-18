const express = require('express');

const router = express.Router();

const nameList = ['lenoard', 'karen0421'];

const comment = {
	_id: '1',
	commentId: '1',
	replyId: '1',
	postedBy: {},
	comment: 'test',
	likes: 0,
	replies: 0,
	hasLiked: false
}

const videos = [
  {
    _id: '1',
    caption: 'caption',
    comments: [],
    createdAt: new Date(),
    hasLiked: 10,
    isFollowing: true,
    likes: 10,
    music: 'music',
    shares: 10,
    tags: ['tag1', 'tag2'],
    uploader: {
      username: 'karen0421',
      name: 'img_name',
    },
    views: 10,
    videoId: '1',
  },
  {
    _id: '1',
    caption: 'caption',
    comments: [],
    createdAt: new Date(),
    hasLiked: 10,
    isFollowing: true,
    likes: 10,
    music: 'music',
    shares: 10,
    tags: ['tag1', 'tag2'],
    uploader: {
      username: 'lenoard',
      name: 'img_name',
    },
    views: 10,
    videoId: '1',
  },
];

router.get('/', (req, res) => {
  res.send({ message: 'Hello world' });
});

router.post('/auth/login', (req, res) => {
  console.log('/auth/login', req.body);
  console.log(req.body);
  res.send(req.body);
});

router.get('/user/profilePhoto/karen0421', (req, res) => {
  console.log('/user/profilePhoto/karen0421', req);
  res.send(req.body);
});

router.get('/user/karen0421', (req, res) => {
  console.log('/user/karen0421', req.body);
  let data = {
    name: 'karen0421',
    username: 'karen0421',
    isFollowing: false,
    following: 430,
    followers: 240,
    totalLikes: 24,
    description: 'here is my description',
    videos: videos,
  };
  res.send(data);
});

// router.get('/user/like', (req, res) => {
//   console.log('/user/karen0421',req.body)
//   let data = {
//     name:'karen0421',
//     username:'karen0421',
//     isFollowing: false,
//     following: 430,
//     followers: 240,
//     totalLikes: 24,
//     description: 'here is my description',
//     videos: []
//   }
//   res.send({ data: { videos }});
// });

router.get('/feed', (req, res) => {
  let data = {
    videos: [
      {
        caption: 'caption',
        comments: 10,
        createdAt: new Date(),
        hasLiked: 10,
        isFollowing: true,
        likes: 10,
        music: 'music',
        shares: 10,
        tags: ['tag1', 'tag2'],
        uploader: {
          username: 'karen0421',
          name: 'img_name',
        },
        views: 10,
        videoId: 1,
      },
      {
        caption: 'caption',
        comments: 10,
        createdAt: new Date(),
        hasLiked: 10,
        isFollowing: true,
        likes: 10,
        music: 'music',
        shares: 10,
        tags: ['tag1', 'tag2'],
        uploader: {
          username: 'lenoard',
          name: 'img_name',
        },
        views: 10,
        videoId: 1,
      },
    ],
  };
  res.send({ videos });
});

router.get('/feed/following', (req, res) => {
  res.send({ videos });
});

router.get('/video/1', (req, res) => {
  res.send(videos[0]);
});

module.exports = router;
