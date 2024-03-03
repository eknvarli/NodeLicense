// License Checker for NodeLicense

import axios from 'axios';

export interface LicenseCheckerOptions {
  apiUrl: string;
}

export class LicenseChecker {
  private apiUrl: string;

  constructor(options: LicenseCheckerOptions) {
    this.apiUrl = options.apiUrl;
  }

  checkLicenseKey(key: string): Promise<boolean> {
    return axios.get(`${this.apiUrl}/licenses`)
      .then(response => {
        const licenses = response.data;
        const validLicense = licenses.find((license: any) => license.key === key);
        return !!validLicense;
      })
      .catch(error => {
        console.error('Error checking license key:', error);
        return false;
      });
  }
}