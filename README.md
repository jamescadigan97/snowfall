# Snowfall and Snow Depth for EPIC and IKON Mountains
Skiing is my main winter hobby, but sometimes checking on the snow conditions for multiple mountains is a hassle. In order to streamline this process, I created a python function on juypter notebook to scrape snowfall and snow depth data from onthesnow.com. I focused on the mountains that are on the EPIC and IKON ski passes. Pandas is utltized to organize the data. I am creating a database on PostgreSQL. After I collect a little more data, I will begin launching an app that allows users to filter through the data. This project has allowed me to connect my love of skiing with my growing passion for data science.

## Tools and Resources
* Python/Pandas
* Selenium/Beautiful Soup
* Jupyter notebook
* PostgreSQL

## Examples of SQL queries
Who will be a this page be for?

For people who want to easily see seasonal data for their favorite mountains. One of my personal favorites is Steamboat.
![ScreenShot](/Screenshots/Steamboat.png)


For people who want to check on past storms in a certain area. A large storm hit on January 5th when I was in Colorado.
![ScreenShot](/Screenshots/storm.png)


For people who want to check on snow in a particular area. I live in the New England.
![ScreenShot](/Screenshots/Northeast.png)


For people are that EPIC or IKON passholders (this particular query is for the EPIC pass, but a similar one can be made for the IKON pass.
![ScreenShot](/Screenshots/epic.png)

These queries are from January th 2020 but are just meant to show the types of data I am interested in. I have been continuing to generate new data has since December 27th, 2020. Some of the smaller mountains only have data from January 10th 2021 and on, but now I am collecting data from every mountain listed on EPIC's and IKON's website. 
