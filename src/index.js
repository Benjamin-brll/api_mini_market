const express = require('express')
const app = express()

app.set('PORT', 3000)

app.listen(app.get('PORT'), () => {
    console.log(`app running on port http://localhost:${app.get('PORT')}/`)
})