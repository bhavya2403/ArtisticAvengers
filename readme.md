# Heuristic evaluation of the Usability of websites

## Overview

The goal of the project is to use the models like KLM to evaluate the basic functionalities of common websites in 
different domains. We evaluate how convenient the flow is in the website by accurately measuring how much time it 
takes user in total to reach the answer of specific question while also measuring the time between each clicks.

## Methodology

Our work is based on two common domains which are education and job domain. The websites used in education domain 
are PDPU and DAIICT college websites and for job domain we used Indeed and Naukri websites. For different kinds of 
user of these websites based on different age group are **interviewed**. We give them basic tasks like searching for 
a fee structure of a specific course in education domain and searching a job of user's preference. Users are told 
that the time between their clicks are measured and also requested to tell their thinking. **Google forms** are 
also circulated to collect data of users who rate the websites we've chosen for heuristic evaluation. 

The **repository** contains code to measure time taken by the users to navigate through the website which is better 
alternative of the stopwatch to measure accurate time and also contains code to analyze the collected google forms 
data and generating the insights. 

### TimeMeasure folder

The folder contains two files. One of them is the javascript file which is written in the **TamperMonkey** extension.
This is the client-side Javascript code which manipulates the original code to collect the time data between clicks. 
All the clicks are downloaded in different files and the other file in this folder given the root folder of 
generated files, combines all the files into one file which would make it better for further analysis.

The data in this single generated file contain multiple lines where each line is sorted in order of user interaction 
and each line contains 4 values, first is the HTML element which is clicked, second and third values are X and Y 
position of the mouse and last value is the time in milliseconds user took from the last click.

### Edu and Job folders

Each folder contains a Jupyter file which opens the generated CSV file by Google forms and generates bar plots with 
comparison of different users answering different heuristic evaluation questions like visibility, error prevention etc.