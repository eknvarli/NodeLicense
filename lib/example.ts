// Test App for NodeLicense

import { LicenseChecker } from './index';

const licenseChecker = new LicenseChecker({ apiUrl: 'http://127.0.0.1:3000', username: 'YOUR_ADMIN_USERNAME', password: 'YOUR_ADMIN_PASSWORD' });
licenseChecker.checkLicenseKey('examplekey1')
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