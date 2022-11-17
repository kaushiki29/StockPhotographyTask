## How to run the app

1. Pull the code to local.
2. Run npm install in root directory of project.
3. Run npm start to start the project.
4. The project launches at http://localhost:3000.
5. The project has a home page. You can search any images using keywords.
6. Type the keywords in the input box and click enter or click search button.

## Features implemented

1. Added search using keywords.
2. Implemented infite scroll. You can keep scrolling and photos will be fetched as you are about to reach the end of the page.
   This will ensure that the photo get added dynamically and in the initial request we don't need to fetch larne number of photos.
3. Click on view photos to view the complete original photos.
4. By default the photos have been cropped to 600X400 to display on homepage.

## Limitations

1. Unsplash does not have an api for search by photo hence that option could not be included as of now.
2. Unsplash does not have an api in the documentation for user to add or delete photos hence that could not be included as of now.

## Future Scopes

1. Use some other photo api to search photos by image.
2. Add our own backend to make the site secure and implement features like adding/deleting photos for a particluar user.