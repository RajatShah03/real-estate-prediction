# Real Estate Price Prediction Project

###### _Data Science and Machine Learning_

## Tools used

- Numpy
- Pandas
- Matplotlib
- Scikit-learn
- Jupyter notebook

## Dataset

[Bengaluru House Price from Kaggle](https://www.kaggle.com/datasets/amitabhajoy/bengaluru-house-price-data)

## Pipeline

1. Data cleanup

   - Used **pandas** to parse the csv dataset and to perform data exploration.
   - Analysis of data by filtering based on the features available.
   - Cleaning up of features that may not decide the price(target) of the property.
   - Assumptions taken to filter some data features.
   - Exploring NULL / NA data points and Filling them appropriately where possible or dropping them.
   - Conversion of stringified features to numeric values.
   - Finally saving the cleaned up data as a csv for further processing as __**clean_data.csv**__.

2. Feature Engineering

   - Used **pandas** to parse the cleaned csv dataset.
   - Creating a new more relevant feature called price_per_sqft.
   - Analysis of location column.
   - Converting locations with less than or equal to 10 houses as 'other'.
   - Finally saving the engineered data as a csv for further processing as __**engineered_data.csv**__.

3. Data Processing
   - Used **pandas** to parse the engineered csv dataset.
   - Analysing different outliers and anamolies based on certain features in dataset.
   - Making assumptions based on domain knowledge to clean outliers.
   - Used **matplotlib** to visualize some of the features to detect outliers.
   - Removing the outliers or anamolies to make data much more clean for generalized learning.
   - Finally saving the processed data as a csv for further processing as __**processed_data.csv**__.

4. Modelling
   - Used **pandas** to parse the processed csv dataset.
   - Used **pandas** to encode the location categorical data to **one-hot encoded** vectors.
   - Used **pandas** to split data into X and y.
   - Used **sklearn** __train_test_split__ to split the data into training and test sets.
   - Used **sklearn** __LinearRegression__ to build and train a linear regression model.
   - Used **sklearn** __ShuffleSplit__ and __cross_val_score__ to train a K-fold cross validation based linear regression model.
   - Used **sklearn** __GridSearchCV__ to train, compare and tune multiple models like __LinearRegression__, __Lasso__ and __DecisionTreeRegressor__.
   - Finally trained the most performant __LinearRegression__ model with __normailzer__ set to __**True**__.
   - Used **pickle** to export model as __**bangalore_housing_price_model.pickle**__.
   - Used **json** to export data columns as __**columns.json**__.


## Application


### Server
   
   - A **FastApi** based server that provides **REST** APIs.
   - It uses the artifacts created from the ML pipeline containing the Model as pickle and the Feature columns as json.
   - It exposes two routes
      1. **GET - /locations**: Returns all the locations available based on the dataset.
      2. **POST - /predict**: Returns the predicted price based on the features provided in the request.
