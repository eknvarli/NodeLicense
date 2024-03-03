// Test App for NodeLicense

import { LicenseChecker } from '.';

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