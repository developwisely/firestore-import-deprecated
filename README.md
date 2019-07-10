# Firestore JSON Data Import

This is a simple JavaScript app to import basic JSON data to Firestore.

## How to use
1. `npm install`
2. Edit `config.js` with **API_KEY**, **AUTH_DOMAIN**, and **PROJECT_ID** from your Firestore project.
3. Place your data inside of `data.json` in a similar format.
```json
{
    // these are collections
    "exampleCollection": [

        // these are documents
        {
            "key": "value",
            "key": "value"
        },
        {
            "key": "value",
            "key": "value"
        },
    ]
}
```
4. `npm run import`
