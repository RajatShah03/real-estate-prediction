# Real Estate Price Prediction Project
###### _Data Science and Machine Learning_


## Tools used
* Numpy
* Pandas
* Matplotlib
* Scikit-learn
* Jupyter notebook


## Dataset
[Bengaluru House Price from Kaggle](https://www.kaggle.com/datasets/amitabhajoy/bengaluru-house-price-data)


## Pipeline
1. Data cleanup
    * Used pandas to parse the csv dataset and to perform data exploration.
    * Analysis of data by filtering based on the features available.
    * Cleaning up of features that may not decide the price(target) of the property
    * Assumptions taken to filter some data features
    * Exploring NULL / NA data points and Filling them appropriately where possible or dropping them.
    * Conversion of stringified features to numeric values
    * Finally saving the cleaned up data as a csv for further processing as _*clean_data.csv*_
