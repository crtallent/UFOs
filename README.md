# UFOs

## Overview of UFOs Project

For this task, we created a webpge with a dynamic title that allows visitors to filter UFO sighting results based on a variety of criteria.  This page currently offers a wealth of information for sightings between January 1, 2010 and January 13, 2010.  Information has been compiled from around the world and even has narrative describing the incidents as comments.  The following search criteria can be filtered for each sigthing:

* Date 
* City 
* State
* Country
* Shape of Object

The webpage can be accessed via this [link](https://crtallent.github.io/UFOs/). 

## Resources

- Sofware: JavaScript 1.7

## UFO Analysis Results

This webpage is a user-friendly application with multiple fields that users can filter through to gather specific results.  Placeholders are in place in the text field box to indicate how the search should be entered. For example, upon loading the page, the user can use the "Enter Date" field to filter through all sighting on the specified date.  The user will simply type the date into the form field and by hitting enter, all of the results for that particular date will be selected in the table to the right of their selection:

<img src="https://github.com/crtallent/UFOs/blob/main/static/images/Date.png" />

Likewise, if the user is interested in seeing all sightings for a given state, they will type in the state's abbreviation to filter the table to show only the sightings for that particular state:

<img src="https://github.com/crtallent/UFOs/blob/main/static/images/State.png" />

Finally, if a user would like to see multiple criteria, such as the below image, in which the fields selected indicate these are all the triangle-shaped sightings on January 1, 2010 in the state of California, they will just input these filters in the appropriate fields:


<img src="https://github.com/crtallent/UFOs/blob/main/static/images/Multi.png" />

## UFO Summary

On the backend, JavaScript code is rebuilding the data table each time a new search takes place.  An advantage to the current design is the ability to filter upon multiple criteria at one time.  This greatly reduces the time necessary to manually sort through a vast amount of information to find specific data.  However, a dropback of this design is specificity of the filter fields.  For example, users cannot input "CA" to find all sightings in California, they must use "ca" to return search results.  One recommendation for improvement would be to add the use of regular expressions to the webpage's design.  For example, if a user were to type in "CA", a replace() function would replace the "CA" with the expected "ca".  Another improvement would be to add detailed instructions for the user.  If a user would like to refresh the table after a search, or perhaps if no data was returned with their selections, a message box could advise them of the error.  Finally, the data can be refreshed by clicking on "UFO Sightings" at the top, but this is not indicated on the webpage, and a refresh option may be better placed by the form fields.
