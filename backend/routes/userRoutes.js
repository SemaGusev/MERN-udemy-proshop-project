import express from 'express'
const router = express.Router()
import {
	authUser,
	registerUser,
	getUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middlewate/authMiddleware.js'

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)

export default router
