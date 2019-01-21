import pick from 'lodash/pick';

const COMPANY_FINANCIAL_FIELDS = [
    'Price', 'Beta', 'VolAvg', 'MktCap', 'LastDiv', 'Range', 'Changes', 'ChangesPerc'
]

const COMPANY_PROFILE_FIELDS = [
    'companyName', 'description', 'exchange', 'industry', 'website', 'sector'
]

const API_BASE = `/api/company/profile`;
export default class DataApi {
    static async getCompanyProfile(company) {
        return DataApi.getFullCompanyProfile(company)
            .then(res => pick(res, COMPANY_PROFILE_FIELDS));
    }

    static async getComapnyFinancial(company) {
        return DataApi.getFullCompanyProfile(company)
        .then(res => pick(res, COMPANY_FINANCIAL_FIELDS));
    }

    static async getFullCompanyProfile(company) {
        return fetch(`${API_BASE}/${company.trim()}`, {mode: 'cors', headers: { 'Content-Type': 'application/json'}})
            .then(res => {
                if (!res.ok) {
                    throw new Error('error when fetching data');
                }
                return res.text()
            })
            .then(textRes => textRes.replace(/<pre>/g, '').replace(/<\/pre>/g, ''))
            .then(res => JSON.parse(res))
            .then(res => res[company.trim()]);
    }
}


