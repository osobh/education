var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');

router.get('/', function (req, res, next) {
  knex('posts').select().then(function (posts) {   
    res.json({
      "statusCode" : 200,
      "results" : posts
    })
  })
})

router.post('/', function (req, res, next) {   
    
    knex('posts').insert({"author": req.body.author, "body": req.body.body}).returning("id").then(function (newId) {   
    res.json({
      statusCode : 201,
      results: {
      	id: newId,
        location: "http://localhost:3000/api/v1/posts/"+newId
      }
      // "location": res.body.results.location  
    })
  })
})

router.get('/:id', function (req, res, next) {
  var postId = req.params.id;
  knex('posts').where({id: postId}).then(function (posts) { 

    if(posts.length > 0){
    	res.json({
	      "statusCode" : 200,
    	  "results" : posts[0]
    	})
    }else{
     	res.json({
    	  "statusCode": 400
        }) 
	}
  })
})

router.put('/:id', function (req, res, next) {
	var postId = req.params.id;
	var authorId = req.body.author;
	var bodyId = req.body.body;
		  	knex('posts').update({author: authorId, body: bodyId}).where({id: postId}).then(function (posts) {  
			  if(posts > 0){ 
			     res.json({
			      	"statusCode" : 200,
			      	"results": {
				      	id: parseInt(postId),
				        location: "http://localhost:3000/api/v1/posts/"+postId
				 	}   
			  	})
			  }else{
			      	res.json({
			    	  "statusCode": 400
			        })
			 } 
		})
})

router.delete('/:id', function (req, res, next) {
	var postId = req.params.id;
	var authorId = req.body.author;
	var bodyId = req.body.body;
		  	knex('posts').del().where({id: postId}).then(function (posts) {  
			  if(posts > 0){ 
			     res.json({
			      	"statusCode" : 204
			  	})
			  }else{
			      	res.json({
			    	  "statusCode": 400
			        })
			 } 
		})
})

//Comments POSTS
router.get('/:id/comments', function (req, res, next) {
  var postId = req.params.id;
  knex('comments').where({post_id: postId}).then(function (posts) { 
    res.json({
      "statusCode" : 200,
      "results" : posts
    })
  })
})

//posting a single comment
router.post('/:id/comments', function (req, res, next) {   
    var userId = req.params.id;
    knex('comments').insert({"commenter": req.body.commenter, "body": req.body.body}).returning("id").then(function (commentId) {   
    res.json({
      statusCode : 201,
      results: {
        id: commentId,
        location: "http://localhost:3000/api/v1/posts/"+userId+"/comments/"+commentId
      }
      // "location": res.body.results.location  
    })
  })
})


//Get a single post comment
router.get('/:postid/comments/:commentid', function (req, res, next) {
  var commentId = req.params.commentid;
  var postId = req.params.postid;
  knex('comments').where({id: commentId}).andWhere({post_id: postId}).then(function (comments) { 

    if(comments.length > 0){
      res.json({
        "statusCode" : 200,
        "results" : comments[0]
      })
    }else{
      res.json({
        "statusCode": 400
        }) 
  }
  })
})

//Update a single comment
router.put('/:postid/comments/:commentid', function (req, res, next) {
  var commentId = req.params.commentid;
  var postId = req.params.postid;
    knex('comments').update({commenter: req.body.commenter, body: req.body.body}).where({id: commentId}).returning('id').then(function (comments) {  
        if(comments > 0){ 
           res.json({
              "statusCode" : 200,
              "results": {
                id: comments[0],
                location: "http://localhost:3000/api/v1/posts/"+postId+"/comments/"+commentId
          }   
          })
        }else{
              res.json({
              "statusCode": 400
              })
       } 
    })
})

router.delete('/:postid/comments/:commentid', function (req, res, next) {
  var commentId = req.params.commentid;
  var postId = req.params.postid;
    knex('comments').del().where({id: commentId}).then(function (posts) {  
        if(posts > 0){ 
           res.json({
              "statusCode" : 204
          })
        }else{
              res.json({
              "statusCode": 400
              })
       } 
    })
})
module.exports = router;