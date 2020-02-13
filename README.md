# Moving Analytics UI Engineer Code Exercise



# Getting started
```
yarn
yarn run serve
```


> Your goal is to develop a page that pulls data from our API 
> and displays the data exactly like the design spec below

[![N|](https://i.ibb.co/DrTzLnp/image-8.png)

# DO
  
  - Feel free to research and use any informational resources
  - When the page loads, the colored bar on the gauge should ease in from left to the right
  - Submit your work within 48 hours of receiving the assignment
  - Use a frontend framework such as React or Vue, Bootstrap, Redux, etc. to componentize the UI
  - Make your work look as close to the design as possible
  - Email Austin Sprawls for any clarification or further questions

# DON'T
- Don't spend more than 4 hours working on this
- Don't import any third-party libraries to achieve the semi-circle or animation
# Steps
1. Fork this repository
2. Send a GET request to https://sandbox.movinganalytics.com/test/indicators to fetch the data you need to populate the components. Each response will contain a randomized array of data to display.
3. In the response, "type" corresponds to the label above the gauge, "min" to the number value on the left of the gauge, "max" to the number on the right of the gauge, and "value" corresponds to how far the color bar should extend.
4. Values between percentage 0 - 30% should be green, 31 - 70% should be yellow, 71 - 100% should be red.
5. Make a Pull Request for your work ONLY when you're completely finished

