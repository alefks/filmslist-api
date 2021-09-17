# Films List API

*This API was created for a Back End project of Blue Ed Tech's course, by Alessandro Kobashigawa.*

## How to use it

### After downloading or cloning the repository, you need to install some npm packages. Open shell or CMD in the repository's paste and type this:

```shell
npm install
```

### Usually it takes a few minutes to finish, so that's a good time to get some coffee.

## Testing the Routes

After downloading the packages, let's use our routes through Thunder Client. You can download that extension through VSCode.

### GET ALL

Select the method GET and paste this:
> https://filmslist-api-backend.herokuapp.com/films

You can see al the films in our database through that.

### GET BY ID

Select the method GET and paste this:
> https://filmslist-api-backend.herokuapp.com/films/:id

That's a filter when you want to see one film specifically.

### POST

Now it's time to add your favorite film. Select the method POST and paste this:
> https://filmslist-api-backend.herokuapp.com/films/create

Go to the "body" section and use this template:
```json
{
    "name": "Lost in Translation",
    "running_time": "1h 41m",
    "year": "2003",
    "genre": "romance, drama",
    "director": "Sofia Coppola",
    "synopsis": "A lonely, aging movie star named Bob Harris (Bill Murray) and a conflicted newlywed, Charlotte (Scarlett Johansson), meet in Tokyo. Bob is there to film a Japanese whiskey commercial; Charlotte is accompanying her celebrity-photographer husband. Strangers in a foreign land, the two find escape, distraction and understanding amidst the bright Tokyo lights after a chance meeting in the quiet lull of the hotel bar. They form a bond that is as unlikely as it is heartfelt and meaningful."
}
```

After that you can try getting all the movies, so you can make sure your movie has been added.


### PUT (UPDATE)
If you'd like to change a movie's JSON, get the ID using GET ALL route, select the PUT method and paste this:
> https://filmslist-api-backend.herokuapp.com/films/update/:id


### DELETE

If you don't like a movie anymore, you can simply delete it. Select the DELETE method, and paste this:
> https://filmslist-api-backend.herokuapp.com/films/delete/:id


### FilterAll (my favorite one)

> https://filmslist-api-backend.herokuapp.com/filterAll

There you can filter a film by its director, for example. Go to "Query" section, and put in parameters what you would like to filter. You can filter all the films that Sofia Coppola directed, for example.

>*In "parameter" you put a category, like director or genre. In "value" you can put Denis, for example, that's the director's name of Blade Runner 2047.*