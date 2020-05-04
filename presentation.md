# Project Name 
Wheather App

# Requirement 
React web app that can display a five-day weather forecast based on publicly available data.
It should be able to search for a city and see the five-day forecast for that city. Each day's forecast should display:
    a. the day of the week
    b. the minimum temperature
    c. the maximum temperature

# API
Base on two wheather APIs:
    - API 1 : https://www.metaweather.com/api/location/search/?query= 
    - API 2 : https://www.metaweather.com/api/location/

Api 1 allow user search WOEID base on city name.
Api 2 allow user get five-day forecast for that city.

# Language and pattern 
    - Reactjs 
    - Bootstrap compoments (default)
    - React hook (useState, useEffect, useReducer)

# Unit test
    - Jest
    - Enzyme

# Project structure 
    - Two Apis will be called async inside useEffect (wheatherApi.js)
    - Inside the useEffect we are using useReducer for state management (in this case, control loading, error handling, binding data) (wheatherReducer.js)
    - We have UI component for this project include:
        - SearchBox for searching city name
        - ErrorMessage for result handling is returned from API
        - WheatherItemList display five-day forecast for that city
        - WheatherItem present UI for each forecast consist of the day of the week, minimum temperature, maximum temperature.
# Flow 
    - When use input the city name and click search, API 1 will call and return the woeId for API 2. Example we input `london`,
    when we click search again with `london`, you `can not` search again because state have just changed when city name is change. 
    After that we will see 5 forecast items show.  

