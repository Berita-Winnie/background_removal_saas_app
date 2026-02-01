import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'

//App Config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

// ✅ Webhook MUST come before express.json
app.post(
  '/api/user/webhooks',
  bodyParser.raw({ type: 'application/json' }),
  clerkWebHooks,
)

//Initialise middlewares
app.use(express.json())
app.use(cors())

//API routes
app.get('/', (req, res) => res.send('API working'))
app.use('/api/user', userRouter)

app.listen(PORT, () => console.log('Server running on port' + PORT))
