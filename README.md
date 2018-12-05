# Feature Flag SDK

A client-side Javascript SDK that handles communication with **Feature Flag** service

## How it works

The SDK will make an API call to the service which will retrieve the information from cache before resorting to calling the DB

## Getting Started

Calling the `get` method with featureId (which can be found on the feature store in admin portal) will return information for the particular flag

```javascript
const ICode = require('@astro-my/idc-code')
const featureflag = require('@astro-my/featuretoggle')

exports.get = async (req, res, next) => {
  try {
    const { featureId } = req.query
    const result = await featureflag.get(featureId)

    return res.status(ICode.HTTP.OK).json({
      responseCode: ICode.HTTP.OK,
      responseMessage: 'Flag successfully fetched',
      response: result
    })
  } catch (err) {
    return next(err)
  }
}
```

`get` accepts a single featureId or an array of featureId as input. An array of matching feature flags will be return in the case of passing in array as input

## Features

- Retrieves feature flag information
