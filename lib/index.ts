// License Checker for NodeLicense

import axios, { AxiosRequestConfig } from 'axios';

export interface LicenseCheckerOptions {
  apiUrl: string;
  username: string,
  password: string
}

export class LicenseChecker {
  private apiUrl: string;
  private username: string;
  private password: string;

  constructor(options: LicenseCheckerOptions) {
    this.apiUrl = options.apiUrl;
    this.username = options.username;
    this.password = options.password;
  }

  checkLicenseKey(key: string): Promise<boolean> {
    const authConfig: AxiosRequestConfig = {
      auth: {
        username: this.username,
        password: this.password
      }
    };

    return axios.get(`${this.apiUrl}/licenses`, authConfig)
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