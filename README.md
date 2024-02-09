# Movie GPT

### Process to follow - map of website
* header -> logo
* login Page -> Form
* SignUp Page
* Browse Page -> movie list.

## Browse page
### MainContainer
* Video Title
* Video Background
### SecondaryContainer
* MovieList*n
* cards*n  

## env variable
* when we don't want to bundle some secret key or API access key , we should put those variable into env file so that it does not bundle those variabel. Usually these keys are maintained by backend but sometimes key are needed to maintained from UI(client side) also. In that case use env variables. Also put env file into git ignore so that it doesnot get pushed into github. In production time, it will be used.

## Memoisation
* Hit the api only when data is not present, if we change the section and data is not changed do not hit the API . Since we are already using the redux to store the data, we can fetch the data using selector and see if the data is present or not. If present do not hit else hit.