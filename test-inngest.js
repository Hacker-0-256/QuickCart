// Test script to verify Inngest functions work locally
import { inngest } from './config/inngest.js';

async function testInngestFunctions() {
    console.log('Testing Inngest functions...');
    
    try {
        // Test user creation event
        await inngest.send({
            name: 'clerk/user.created',
            data: {
                id: 'test-user-123',
                first_name: 'Test',
                last_name: 'User',
                email_addresses: [{ email_address: 'test@example.com' }],
                image_url: 'https://example.com/avatar.jpg'
            }
        });
        console.log('✅ User creation event sent successfully');
        
        // Test user update event
        await inngest.send({
            name: 'clerk/user.updated',
            data: {
                id: 'test-user-123',
                first_name: 'Updated',
                last_name: 'User',
                email_addresses: [{ email_address: 'updated@example.com' }],
                image_url: 'https://example.com/updated-avatar.jpg'
            }
        });
        console.log('✅ User update event sent successfully');
        
        // Test user deletion event
        await inngest.send({
            name: 'clerk/user.deleted',
            data: {
                id: 'test-user-123'
            }
        });
        console.log('✅ User deletion event sent successfully');
        
    } catch (error) {
        console.error('❌ Error testing Inngest functions:', error);
    }
}

testInngestFunctions();
