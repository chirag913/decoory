# Google Sheets Lead Capture Setup

The website consultation form posts to:

`https://script.google.com/macros/s/AKfycbxyI4wwv0WxK1VoWoCvWaKEzPB95bFQ0kkU87Tk41k3FtJ3iZIZeHH-_AdqdP7J9R1a/exec`

The endpoint currently returns `403 Forbidden` to test submissions, so the Google Apps Script deployment must be public before live leads can reach the sheet.

## Required Apps Script Deployment Settings

In Google Apps Script:

1. Click `Deploy` -> `Manage deployments`.
2. Edit the web app deployment.
3. Set `Execute as` to `Me`.
4. Set `Who has access` to `Anyone`.
5. Deploy a new version.
6. Keep the same `/exec` URL or update `LEAD_SCRIPT_URL` in `app/home-client.tsx`.

## Expected Form Fields

The website sends these fields:

- `name`
- `phone`
- `email`
- `city`
- `projectType`
- `budget`
- `message`
- `source`
- `pageUrl`
- `submittedAt`

## Suggested Apps Script Code

```javascript
const SHEET_NAME = "Leads";

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const data = e.parameter;

  sheet.appendRow([
    new Date(),
    data.name || "",
    data.phone || "",
    data.email || "",
    data.city || "",
    data.projectType || "",
    data.budget || "",
    data.message || "",
    data.source || "",
    data.pageUrl || "",
    data.submittedAt || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: "Decoory lead endpoint is live" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Create the sheet headers in row 1:

`Received At, Name, Phone, Email, City, Project Type, Budget, Message, Source, Page URL, Submitted At`
