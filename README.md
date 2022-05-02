# Sixt React Coding Task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode. 
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes. You may also see any lint errors in the console.

## Used Tools

### React V18

Yes, 18th React has been already here! And it has some 'features'...\
Ohne of them is 'double call of initial useEffect hook'.\
That's why I used custom **useEffectOnce** hook to avoid this bug/feature and thus to improve performance.\
We don't need to call Sixt API twice, do we?\
(https://dev.to/ag-grid/react-18-avoiding-use-effect-getting-called-twice-4i9e)

### Redux

Of course **Redux Toolkit** was chousen.\
It makes working with Redux easy and enjoyable. More power with less code.

### Axios

Promise based HTTP client. Nothing new - just industry standard. Works fine and thank him for that.\
Here I faced so called CORS (Cross-Origin Resource Sharing) Problem and wasn't able to get data from Sixt Server.\
But some proxy settings at package.json file solved the issue. 

### CSS - Emotion

Here the choice was varied. I already had a lot of experience with SCSS, LESS, CSS Modules etc.\
But the last six months I've used Styled Components more often, in particular, Emotion.\
This is a library designed for writing CSS styles with JS. I admit perhaps there's a somewhat confusing syntax,\
but I got all the power of the JS inside the CSS. Pass props inside CSS? No problem. We take!


