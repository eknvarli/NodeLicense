# NodeLicense
NodeLicense is a license validation and management solution for your Node.js projects. It enables you to check, validate, and manage licenses within your Node.js applications.

## API Setup
### 1 - Install Depencies
```
npm install
```

### 2 - Build API
```
npm run build
```

### 3 - Run API
```
npm run start
```

## Adding New License
POST request to `your-api.com/licenses`

Example;
```json
{
  "key":"examplekey1"
}
```

#### NOTE! You need basic auth from middleware/authMiddleware.ts:5
Set your username and password via code.

## Usage
```typescript
import { LicenseChecker } from './lib'; // Enter NodeLicense library script.

const licenseChecker = new LicenseChecker({ apiUrl: 'http://127.0.0.1' });
licenseChecker.checkLicenseKey('your_license_key')
    .then(isValidLicense => {
        if (isValidLicense) {
            console.log('License key is valid.');
        } else {
            console.log('License key is not valid.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

## License
This project is licensed under the GPLv3.0 License. For more information, please see the [LICENSE](LICENSE) file.
