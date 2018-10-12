# pottery-gallery - Angular 6 Gallery

This project is being built as an exercise for me to brush up on Angular 6.  It makes use of the Angular router and uses <a href="https://github.com/ngrx/platform">ngrx</a> to implement a reactive store.

The purpose of this project is to display images in the pottery gallery on my website.  Images are not included in the project.

The gallery contains a main portfolio page, with thumbnails that link to sub-galleries.  Each sub-gallery contains thumbnails with links to individual item pages.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Data

I don't currently have access to a server on my website, so the gallery layout is stored in json data files.  The data files are stored in src/assets/data.  My data files are included as samples.

The data files are read into the store and maintained as lists and maps.   This allows the router to easily route to a specific image by name, which in turn allows people to easily send me a link to a particular piece.

Using data files and a router is more flexible than the standard Lightbox method of listing all of the files in the html.

## Todo

- Lots of Error Handling
- Lots of Testing

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
ng g component plainsight/yourchildcompname


## Build

Run `ng build --base-href=/gallery/` to build the project. The build artifacts will be stored in the `dist/` directory.
Run `ng build --base-href=/gallery/ --prod` for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

