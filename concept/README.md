# bpnv concept

As the project has a very heavy focus towards usability and user experience, all views and screens will get their own design mockup before actually being implemented in the application. This allows easier testing and live-customizing to match people's feedback on them. 

To retain full control over everything, the application will not use any CSS frameworks for now.

## Design guidelines

The colour palette of the application should be very uniform and homogenous. To look familiar to the users, we will use [Deutsche Bahn's styling guide](https://marketingportal.extranet.deutschebahn.com/sites/default/files/pdf/6c8d956121e24be4283d5009e2c35072.pdf) and their corporate colours as a base, namely

* DB Rot: `#F01414` for all elements that might require the user's attention, like buttons and navigation bars that offer more functionality - and only with very little white font on it. Never as a background colour for elements with a lot of text as it's very heavy on the eyes.
* DB Blau: `#0A1E6E` should only be used very sparsely as it is the colour of the freight services - white text
* DB Weißgrau: `#E1E6EB` can be used for separating elements from one another that are still related, or as a background colour when plain white is too bright
* DB Hellgrau: `#C8CDD2` may be used to separate elements that are loosely related to each other
* DB Grau: `#878C96`
* DB Dunkelgrau: `#646973` should be used for notices and text that is not very important to the user in a given situation
* White: `#FFF` must be used as the base background of everything (`#111` in darkmode)
* `#111` should be used as the primary text colour (`#F0F3F5` in dark mode)
* Green: `#78BE14` used for success notifications or anything regarding climate

There is no clear font choice for now, but we will have one later.

Because we use these colours, it is mandatory to put disclaimers in a couple of locations. People shouldn't think that bpnv is an official app of Deutsche Bahn.