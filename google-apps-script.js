/**
 * Google Apps Script for SStore Phone Sell Backend
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Paste this code
 * 4. Deploy as Web App (Execute as: Me, Who has access: Anyone)
 * 5. Copy the Web App URL and add to .env.local as NEXT_PUBLIC_APPS_SCRIPT_URL
 * 
 * Required Google Sheets Structure:
 * 
 * Sheet 1: "Harga" (Price Data)
 * Columns: brand | model | variant | price
 * 
 * Sheet 2: "Orders" (Sell Orders)
 * Columns: timestamp | nama | whatsapp | device | harga | status
 */

// Configuration
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // Replace with your Google Sheets ID
const PRICE_SHEET_NAME = 'Harga';
const ORDERS_SHEET_NAME = 'Orders';

/**
 * Handle GET requests - Returns phone price data
 */
function doGet(e) {
    try {
        const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
        const priceSheet = ss.getSheetByName(PRICE_SHEET_NAME);

        if (!priceSheet) {
            return createJsonResponse({ success: false, error: 'Price sheet not found' });
        }

        const data = priceSheet.getDataRange().getValues();
        const headers = data[0]; // First row is headers
        const prices = [];

        // Convert rows to objects
        for (let i = 1; i < data.length; i++) {
            const row = data[i];
            if (row[0]) { // Skip empty rows
                prices.push({
                    brand: row[0],
                    model: row[1],
                    variant: row[2],
                    price: Number(row[3])
                });
            }
        }

        return createJsonResponse({
            success: true,
            data: prices,
            lastUpdated: new Date().toISOString()
        });

    } catch (error) {
        return createJsonResponse({ success: false, error: error.message });
    }
}

/**
 * Handle POST requests - Receives sell orders
 */
function doPost(e) {
    try {
        const data = JSON.parse(e.postData.contents);

        // Validate required fields
        if (!data.nama || !data.whatsapp || !data.device || !data.harga) {
            return createJsonResponse({ success: false, error: 'Missing required fields' });
        }

        const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
        let ordersSheet = ss.getSheetByName(ORDERS_SHEET_NAME);

        // Create orders sheet if it doesn't exist
        if (!ordersSheet) {
            ordersSheet = ss.insertSheet(ORDERS_SHEET_NAME);
            ordersSheet.appendRow(['Timestamp', 'Nama', 'WhatsApp', 'Device', 'Harga', 'Status']);
        }

        // Append new order
        ordersSheet.appendRow([
            new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }),
            data.nama,
            data.whatsapp,
            data.device,
            data.harga,
            'Pending'
        ]);

        // Optional: Send notification email
        // sendNotificationEmail(data);

        return createJsonResponse({
            success: true,
            message: 'Order submitted successfully'
        });

    } catch (error) {
        return createJsonResponse({ success: false, error: error.message });
    }
}

/**
 * Create JSON response with CORS headers
 */
function createJsonResponse(data) {
    return ContentService
        .createTextOutput(JSON.stringify(data))
        .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Optional: Send email notification for new orders
 */
function sendNotificationEmail(data) {
    const adminEmail = 'admin@sstore.id'; // Replace with your email
    const subject = 'New Phone Sell Order - ' + data.device;
    const body = `
New sell order received:

Name: ${data.nama}
WhatsApp: ${data.whatsapp}
Device: ${data.device}
Price: Rp ${data.harga.toLocaleString('id-ID')}
Time: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}

Please contact the customer ASAP!
`;

    MailApp.sendEmail(adminEmail, subject, body);
}

/**
 * Test function - Run this to test the setup
 */
function testSetup() {
    const result = doGet({});
    Logger.log(result.getContent());
}
