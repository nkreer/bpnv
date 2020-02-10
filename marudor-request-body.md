# marudor.de

For routing, we will use the routing API exposed by marudor.de in the beginning before we switch to something else. However, as the documentation of the necessary endpoint is incorrect, this serves as a quick note of what is required to use it. 

Example request body:

```json
{
  "start": "008000105",
  "destination": "008000240",
  "hafasProfile": "db",
  "maxChanges": -1,
  "onlyRegional": false,
  "time": 1581350298410,
  "transferTime": 0,
  "via": []
}
```

Unless all of these fields are sent, the API will return a 500 Internal Server Error.

The POST-endpoint of the API is located under https://marudor.de/api/hafas/v1/route