import { Inngest } from "inngest";

import dbConnect from "./db";
import User from "@/models/user";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });

//Inngest function to save user data to database
export const syncUserCreation = inngest.createFunction(
    {id: 'sync-user-from-clerk'},
    {event: 'clerk/user.created'},
    async ({event}) => {
        try {
            const{id, first_name, last_name, email_addresses, image_url} = event.data
            const userData = {
                id: id,
                email: email_addresses[0].email_address,
                name: `${first_name || ''} ${last_name || ''}`.trim(),
                imageurl: image_url,
                cartItems: {}
            }
            await dbConnect()
            await User.create(userData)
            console.log('User created successfully:', id)
            return { success: true, userId: id }
        } catch (error) {
            console.error('Error creating user:', error)
            throw error
        }
    }
)

//Inngest function to update user data to database
export const syncUserUpdation = inngest.createFunction(
    {id: 'update-user-from-clerk'},
    {event: 'clerk/user.updated'},
    async ({event}) => {
        try {
            const{id, first_name, last_name, email_addresses, image_url} = event.data
            const userData = {
                email: email_addresses[0].email_address,
                name: `${first_name || ''} ${last_name || ''}`.trim(),
                imageurl: image_url,
            }
            await dbConnect()
            await User.findOneAndUpdate({id: id}, userData, {upsert: true})
            console.log('User updated successfully:', id)
            return { success: true, userId: id }
        } catch (error) {
            console.error('Error updating user:', error)
            throw error
        }
    }
)

//Inngest function to delete user data from database
export const syncUserDeletion = inngest.createFunction(
    {id: 'delete-user-from-clerk'},
    {event: 'clerk/user.deleted'},
    async ({event}) => {
        try {
            const{id} = event.data
            await dbConnect()
            await User.findOneAndDelete({id: id})
            console.log('User deleted successfully:', id)
            return { success: true, userId: id }
        } catch (error) {
            console.error('Error deleting user:', error)
            throw error
        }
    }
)       
