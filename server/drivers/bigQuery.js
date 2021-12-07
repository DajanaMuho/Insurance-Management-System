const {BigQuery} = require('@google-cloud/bigquery');

const pushToBQ = async (mappedPayload) => {
    try {
    //TODO: change it when gcp account is avaiable
    const bigquery = new BigQuery();
    await bigquery.dataset('analytics').table('insuranceCompany').insert(mappedPayload);
    console.log(`Inserted ${mappedPayload.length} rows`);
    } catch(err) {
        console.log(err);
        throw err;
    }
}
module.exports = pushToBQ;