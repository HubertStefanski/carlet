# BSc (Hons.) Level 8 - Assignment 1 - Single Page app.

Name: Hubert Stefanski

## Overview.

Carlet is a car letting app allowing users to advertise their cars on a 'Airbnb-like' app interface, This allows both sides to avoid high costs which are usually involved in normal car rental places, giving an alternative for people looking for an inexpensive rental for their holidays. Users can advertise their spare or even everyday car with the price they request per day

. . . . . List of user features  . . . .

- User management 
- Main rental page 
- Users listed rentals (to be implemented)
- User registration
- User Login
- Info pages
- Contact Form page

## Setup.

- Install dependent node modules 
- From carlet/src/resource run:
- json-server ./users.json -p 3002
- json-server ./cars.json -p 3001
- From /carlet/ run:
- npm start

## Data Model Design.

![][dataflow]

Registered users and cars are stored on a JSON server, there is no private view implementation for user Listings yet.
Contact form submissions are to be stored in a JSON server aswell, but as of yet they are not implemented


## UI Design.



![][mainview]

>> Displays all currently listed cars

![][register]

>> user registration form

![][login]

>> login for user

![][userview]

>> show all users on the applicationa and give options for message and view profile 

## Routing.
all Routes are located in the Navigator component
```
<Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/rentals/listings" component={Listings} />
                        <Route path="/rentals/userListings" component={UserListings} />
                        <Route path="/info/faq" component={Faq} />
                        <Route path="/info/tnc" component={Tnc} />
                        <Route path="/info/contact" component={ContactForm} />
                        <Route path="/users/usersPage" component={UsersPage} />
                        <Route path="/users/registerUser" component={RegisterUser} />
                        <Route path="/login" component={LoginPage} />
```


## Storybook.

![][story]



## Backend (Optional).

JSON server for storage of user information and car info  

## Authentication (Optional).

Okta login widget for web servers, registration by react form




[dataflow]: ./img/dataflow.png
[mainview]: ./img/mainview.png
[story]: ./img/story.png
[register]: ./img/register.png
[userview]: ./img/userview.png
[login]: ./img/login.png
[main]: ./img/main.png
[detail]: ./img/detail.png
[stories]: ./img/stories.png