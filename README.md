# Snowfall and Snow Depth for EPIC and IKON Mountains
Anyone who knows me well, knows I love skiing. This winter I took the opportunity to collect data on skiing, namely snowfall data. I created a python function utilizing both Selenium and Beautiful Soup to scrape snowfall and snow depth data from onthesnow.com. I focused on the mountains that are on the EPIC and IKON ski passes. After collecting the data, I used PostgreSQL to merge the data and Pandas to clean it. After I had my database I launched the website using Heroku. The website uses JavaScript to sort through the data and presents the data that corresponds with the users search criteria.

## Tools and Resources
* Python
* Selenium
* Beautiful Soup
* PostgreSQL
* Pandas
* HTML/CSS
* JavaScript
* Heroku

## Lauched App

## Loading page and examples of Searches
Page the website goes to when it loads
![ScreenShot](/Screenshots/main_page.png)

Seasonal data for specific mountains. This example shows the result for searching "Steamboat".
![ScreenShot](/Screenshots/Steamboat.png)


Specific Storms. This example shows the result for searching "Colorado" and "2021-01-06".
![ScreenShot](/Screenshots/storm.png)


Specific passes. This example shows the result for searching "epic".
![ScreenShot](/Screenshots/epic.png)

These are a few examples. The data can be broken into any combination of date, ski resort, region and pass.

##About the data
The data is taken from onthesnow.com snow reports. For most mountains, it starts on December 27th 2020; however for some mountains it starts on January 10th 2021. The data runs until April 1st, 2021. The data covers the mountains listed on EPIC's and IKON's website. This page is not affiliated with EPIC pass, IKON pass or onthesnow.com .
